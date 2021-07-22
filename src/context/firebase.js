import { createContext, useContext } from "react";
import { firebase, FieldValue } from "utils/init";

const FirebaseContext = createContext(null);

const AuthProvider = ({ children }) => {
    return (
        <FirebaseContext.Provider value={{ firebase, FieldValue }}>
            {children}
        </FirebaseContext.Provider>
    );
};

export const useAuthContext = () => useContext(FirebaseContext);

export default AuthProvider;
