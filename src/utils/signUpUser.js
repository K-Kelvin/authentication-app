/* eslint-disable no-console */
/* eslint-disable no-alert */
import { db, firebase } from "./init";

export function createUser(user) {
    const newUser = {
        username: user.email,
        displayName: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
        bio: "",
        phone: user.phoneNumber,
    };
    function _(resolve, reject) {
        db.collection("users")
            .doc(newUser.username)
            .set(newUser)
            .then(docRef => {
                resolve({ id: docRef.id, ...newUser });
            })
            .catch(reject);
    }
    return new Promise(_);
}

function signUpUser(email, password) {
    function _(resolve, reject) {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {
                createUser(user).then(resolve).catch(reject);
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode === "auth/weak-password") {
                    reject("The password is too weak.");
                } else {
                    reject(errorMessage);
                }
            });
    }
    return new Promise(_);
}

export function getAllUsers() {
    function _(resolve, reject) {
        db.collection("users")
            .get()
            .then(querySnapshot => {
                // querySnapshot.forEach(doc => {
                //     console.log(`${doc.id} => ${doc.data()}`);
                // });
                resolve(querySnapshot.docs);
            })
            .catch(reject);
    }
    return new Promise(_);
}

export default signUpUser;
