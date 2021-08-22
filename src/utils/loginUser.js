import { firebase } from "./init";

function loginUser(email, password) {
    return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(error => {
            const { code, message } = error;
            // eslint-disable-next-line no-alert
            if (code) alert(message);
        });
}

export default loginUser;
