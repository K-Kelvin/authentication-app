/* eslint-disable no-alert */
/* eslint-disable no-console */
import firebase from "firebase/app";
import { db, FieldValue } from "./init";

// ✨TODO LIST✨
// ✅create user profile in the database
// ✅get current authenticated user from localStorage or database
// ✅get user by id from the database
// ✅update user in the database
// ✅get all users in the database
// ✅delete a user from the database

// AFTER
// Make sure timestamp shows appropriately!!!
export function createUser(user) {
    const newUser = {
        username: user.email,
        displayName: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
        bio: "",
        phone: user.phoneNumber,
        timestamp: FieldValue.serverTimestamp(),
    };
    // eslint-disable-next-line no-unused-vars
    const userCreated = (resolve, reject) => {
        db.collection("users")
            .add(newUser)
            .then(docRef => {
                console.log("Document written with ID: ", docRef.id);
                resolve(docRef.data());
            })
            .catch(error => {
                console.error("Error adding document: ", error);
                resolve(null);
            });
    };
    return new Promise(userCreated);
}

export function getCurrentUser() {
    const authUser = localStorage.getItem("current_auth_user");
    let user;
    // eslint-disable-next-line no-unused-vars
    const _ = (resolve, reject) => {
        if (authUser) user = JSON.parse(authUser);
        else {
            const userId = firebase.auth().currentUser?.uid;
            db.collection("users")
                .doc(userId)
                .get()
                .then(doc => {
                    if (doc.exists) user = doc.data();
                    else alert("User does not exist");
                })
                .catch(console.log);
        }
        resolve(user);
    };
    return new Promise(_);
}

export function getUserById(uid) {
    const _ = (resolve, reject) => {
        db.collection("users")
            .doc(uid)
            .get()
            .then(docRef => {
                resolve(docRef.data());
            })
            .catch(reject);
    };
    return new Promise(_);
}
export function updateUser(userId, data) {
    const userRef = db.collection("users").doc(userId);
    const _ = (resolve, reject) => {
        userRef
            .update(data)
            .then(docRef => {
                resolve(docRef.data());
            })
            .catch(reject);
    };
    return new Promise(_);
}
export function updateCurrentUser(data) {
    const userId = firebase.auth().currentUser?.uid;
    updateUser(userId, data).then(user => {
        localStorage.setItem("current_auth_user", JSON.stringify(user));
    });
}
export function getAllUsers() {
    function _(resolve, reject) {
        db.collection("users")
            .get()
            .then(usersRef => resolve(usersRef.docs))
            .catch(reject);
    }
    return new Promise(_);
}
export function deleteCurrentUser() {
    function _(resolve, reject) {
        firebase
            .auth()
            .currentUser.delete()
            .then(() => {
                localStorage.clear();
                resolve();
            })
            .catch(reject);
    }
    return new Promise(_);
}
