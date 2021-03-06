/* eslint-disable no-console */
import { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

import useForm from "hooks/useForm";
import Form, { FormWrapper } from "components/Form";
import CreatedBy from "components/CreatedBy";
import AppLogo from "components/AppLogo";
import { useUser } from "context/user";
import loginUser from "utils/loginUser";

const Login = () => {
    const [loading, setLoading] = useState(false);
    const { onChange, state } = useForm("/login");
    const user = useUser();
    const history = useHistory();

    useEffect(() => {
        document.title = "Login";
    }, []);

    const onSubmit = e => {
        e.preventDefault();
        const { email, password } = state;
        if (!email || !password) {
            // eslint-disable-next-line no-alert
            alert("Email and password fields are required!");
            return;
        }
        if (loading) return;
        setLoading(true);
        loginUser(email, password)
            .then(() => {
                console.log("Log in successful");
                setLoading(false);
                history.push("/u");
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
                // eslint-disable-next-line no-alert
                alert("Invalid email or password!");
            });
    };

    if (user) return <Redirect to="/u" />;
    return (
        <FormWrapper>
            <Form onSubmit={onSubmit}>
                <AppLogo />
                <h2 className="font-semibold text-lg leading-none text-secondary-light dark:text-secondary-dark mb-7">
                    Login
                </h2>
                <Form.InputGroup
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={onChange}
                    className="mb-3.5"
                />
                <Form.InputGroup
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={onChange}
                    className="mb-6"
                />
                <Form.Submit text="Login" />
                <Form.Footer login={false} />
            </Form>
            <CreatedBy />
        </FormWrapper>
    );
};

export default Login;
