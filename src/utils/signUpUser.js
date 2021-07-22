/* eslint-disable no-console */
/* eslint-disable no-alert */
import { firebase } from "./init";

function signUpUser(email, password) {
    return firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode === "auth/weak-password") {
                alert("The password is too weak.");
            } else {
                alert(errorMessage);
            }
            console.log(error);
        });
}

export default signUpUser;
