import { firebase } from "./init";

function loginUser(email, password) {
    return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // eslint-disable-next-line no-console
            console.log(errorCode, errorMessage);
        });
}

export default loginUser;
