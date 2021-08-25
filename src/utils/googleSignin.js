// import { firebase } from "./init";
import firebase from "firebase/app";
import { createUser } from "./firebaseUserActions";

const provider = new firebase.auth.GoogleAuthProvider();

async function googleSignin() {
    firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
            /** @type {firebase.auth.OAuthCredential} */
            const { credential, user } = result;
            const token = credential.accessToken;
            createUser(user);
            return { user, token };
        })
        .catch(error => {
            const errorMessage = error.message;
            const { email, credential } = error;
            // eslint-disable-next-line no-console
            console.log(error);
            return { error: true, errorMessage, email, credential };
        });
}

export default googleSignin;
