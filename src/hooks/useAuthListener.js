import { useState, useEffect } from "react";
import { useAuthContext } from "context/firebase";

export default function useAuthListener() {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("authUser"))
    );
    const { firebase } = useAuthContext();

    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged(authUser => {
            if (authUser) {
                // we have a user...therefore we can store the user in localstorage
                localStorage.setItem("authUser", JSON.stringify(authUser));
                setUser(authUser);
            } else {
                // we don't have an authUser, therefore clear the localstorage
                localStorage.removeItem("authUser");
                localStorage.clear();
                setUser(null);
            }
        });

        return () => listener();
    }, [firebase]);

    return { user };
}
