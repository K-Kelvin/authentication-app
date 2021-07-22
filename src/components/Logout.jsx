import { useHistory } from "react-router-dom";
import logoutUser from "utils/logoutUser";

const Logout = () => {
    const history = useHistory();
    logoutUser()
        .then(() => history.push("/login"))
        .catch(error => {
            // eslint-disable-next-line no-alert
            alert(error.message || "Failed to log out");
        });
    return null;
};

export default Logout;
