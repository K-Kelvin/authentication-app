/* eslint-disable no-console */
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import useForm from "hooks/useForm";
import Form, { FormWrapper } from "components/Form";
import AppLogo from "components/AppLogo";
import CreatedBy from "components/CreatedBy";
import signUpUser, { createUser } from "utils/signUpUser";

const Register = () => {
    const { onChange, state } = useForm("/register");
    const history = useHistory();

    useEffect(() => {
        document.title = "Sign up";
    }, []);

    const onSubmit = e => {
        e.preventDefault();
        const { email, password } = state;
        if (!email || !password) return;
        signUpUser(email, password).then(async userCredential => {
            const { user: user_ } = userCredential;
            const user = await createUser(user_);
            // eslint-disable-next-line no-console
            console.log(user);
            history.push("/u");
        });
    };

    return (
        <FormWrapper>
            <Form onSubmit={onSubmit}>
                <AppLogo />
                <h2 className="font-semibold text-lg leading-6 text-secondary-light dark:text-secondary-dark mb-3.5">
                    Join thousands of learners from around the world
                </h2>
                <p className="text-secondary-light text-base leading-5 dark:text-secondary-dark mb-8">
                    Master web development by making real-life projects. There
                    are multiple paths for you to choose
                </p>
                <Form.InputGroup
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={onChange}
                    icon="C"
                    className="mb-3.5"
                />
                <Form.InputGroup
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={onChange}
                    icon="C"
                    className="mb-6"
                />
                <Form.Submit text="Start coding now" />
                <Form.Footer login />
            </Form>
            <CreatedBy />
        </FormWrapper>
    );
};

export default Register;
