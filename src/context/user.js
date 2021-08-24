import { createContext, useEffect, useState } from "react";
import { db, firebase } from "utils/init";
import useAuthListener from "hooks/useAuthListener";

const UserContext = createContext({ user: null });

const UserProvider = ({ children }) => {
    const { user } = useAuthListener();
    return (
        <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
    );
};

export const useUser = () => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("current_auth_user"))
    );

    useEffect(() => {
        const { currentUser } = firebase.auth();
        const unsubscribe =
            currentUser?.uid &&
            db
                .collection("users")
                .doc(currentUser.uid)
                .onSnapshot(snapshot => {
                    const usr = snapshot.data();
                    setUser(usr);
                });
        return () => unsubscribe?.();
    }, []);

    return user;
};

export default UserProvider;
