/* eslint-disable react/jsx-props-no-spreading */
import { Redirect, Route } from "react-router-dom";
import { useUser } from "context/user";

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const user = useUser();
    return (
        <Route
            {...rest}
            render={props => {
                if (user) {
                    return <Component {...props} />;
                }
                return (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location },
                        }}
                    />
                );
            }}
        />
    );
};

export default ProtectedRoute;
