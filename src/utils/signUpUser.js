/* eslint-disable no-console */
/* eslint-disable no-alert */
import { db, firebase } from "./init";

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

export function createUser(user) {
    const newUser = {
        username: user.email,
        displayName: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
        bio: "",
        phone: user.phoneNumber,
    };
    db.collection("users")
        .doc(newUser.username)
        .add(newUser)
        .then(docRef => {
            console.log("Document written with ID: ", docRef.id);
            return {
                id: docRef.id,
                ...newUser,
            };
        })
        .catch(error => {
            console.error("Error adding document: ", error);
        });
}

export function getAllUsers() {
    db.collection("users")
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                console.log(`${doc.id} => ${doc.data()}`);
            });
        });
}

export default signUpUser;
