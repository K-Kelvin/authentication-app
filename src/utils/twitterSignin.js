import firebase from "firebase/app";

const provider = new firebase.auth.TwitterAuthProvider();

async function twitterSignin() {
    firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
            return result;
        })
        .catch(error => {
            return error;
        });
}

export default twitterSignin;
