import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoutUser from "utils/logoutUser";

const Logout = () => {
    const [loggedOut, setLoggedOut] = useState(false);
    const [message, setMessage] = useState("Logging out...");

    useEffect(() => {
        logoutUser()
            .then(() => {
                setLoggedOut(true);
                setMessage("Successfully logged out");
            })
            .catch(error => {
                setMessage(error.message || "Failed to log out!");
            });
    }, []);

    return (
        <div className="mx-auto py-16 text-2xl text-center text-secondary-light dark:text-secondary-dark">
            {message}{" "}
            {loggedOut && (
                <Link to="/login" className="underline inline-block ml-3">
                    Login?
                </Link>
            )}
        </div>
    );
};

export default Logout;
