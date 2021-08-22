import firebase from "firebase/app";

const provider = new firebase.auth.GithubAuthProvider();

async function githubSignin() {
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

export default githubSignin;
