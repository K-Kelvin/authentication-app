import { firebase } from "./init";

function logoutUser() {
    return firebase
        .auth()
        .signOut()
        .catch(error => {
            // eslint-disable-next-line no-console
            console.log(error.message);
        });
}

export default logoutUser;
