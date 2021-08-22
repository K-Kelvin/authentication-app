import firebase from "firebase/app";

const provider = new firebase.auth.GithubAuthProvider();

async function facebookSignin() {
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

export default facebookSignin;
