import { firebase } from "./init";

function loginUser(email, password) {
    function _(resolve, reject) {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                resolve(user);
            })
            .catch(reject);
    }
    return new Promise(_);
}

export default loginUser;
