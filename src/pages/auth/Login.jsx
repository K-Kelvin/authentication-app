import { useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";

import useForm from "hooks/useForm";
import Form, { FormWrapper } from "components/Form";
import CreatedBy from "components/CreatedBy";
import AppLogo from "components/AppLogo";
import { useUser } from "context/user";
import loginUser from "utils/loginUser";

const Login = () => {
    const { onChange, state } = useForm("/login");
    const user = useUser();
    const history = useHistory();

    useEffect(() => {
        document.title = "Login";
    }, []);

    const onSubmit = e => {
        e.preventDefault();
        const { email, password } = state;
        loginUser(email, password).then(() => {
            history.push("/u");
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
