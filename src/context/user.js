import { firebase } from "utils/init";
import useAuthListener from "hooks/useAuthListener";
import { createContext } from "react";

const UserContext = createContext({ user: null });

const UserProvider = ({ children }) => {
    const { user } = useAuthListener();
    return (
        <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
    );
};

export const useUser = () => {
    const { user } = useAuthListener();
    return user || firebase.auth().currentUser;
};

export default UserProvider;

