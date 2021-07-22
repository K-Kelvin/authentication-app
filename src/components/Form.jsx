import { NavLink as Link } from "react-router-dom";
import { MdMail as MailIcon, MdLock as LockIcon } from "react-icons/md";
import {
    FaGoogle,
    FaFacebookSquare as FaFacebook,
    FaTwitter,
    FaGithub,
} from "react-icons/fa";

export const FormWrapper = ({ children }) => (
    <div className="min-h-screen md:grid md:place-items-center bg-primary dark:bg-primary-dark">
        <div className="w-full max-w-md text-gray-82 leading-none mobile:h-screen mobile:p-4 mobile:flex mobile:flex-col mobile:justify-between">
            {children}
        </div>
    </div>
);

const Form = ({ children, onSubmit, className }) => {
    return (
        <form
            onSubmit={onSubmit}
            className={`md:border border-bd rounded-3xl md:px-14 md:py-12 ${className}`}
        >
            {children}
        </form>
    );
};

Form.InputGroup = ({
    className,
    type = "text",
    name,
    onChange,
    placeholder = "",
}) => {
    const icons = {
        email: <MailIcon className="w-5 h-5 text-current" />,
        password: <LockIcon className="w-5 h-5 text-current" />,
    };
    return (
        <div className={`text-gray-82 rounded-lg relative ${className}`}>
            <span className="absolute block top-1/2 left-3.5 transform -translate-y-1/2 w-6">
                {icons[type]}
            </span>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className="focus:outline-none bg-transparent w-full py-2 pl-12 pr-3.5 text-secondary-light dark:text-secondary-dark placeholder-gray-82 rounded-lg ring-1 ring-bd focus:ring-2 focus:ring-blue1"
                onChange={onChange}
            />
        </div>
    );
};
Form.Submit = ({ text = "" }) => (
    <button
        type="submit"
        className="bg-blue1 text-white rounded-lg py-2 w-full mb-7"
    >
        {text}
    </button>
);

const socialAuth = [
    { icon: <FaGoogle />, link: "https://google.com" },
    { icon: <FaFacebook />, link: "https://facebook.com" },
    { icon: <FaTwitter />, link: "https://twitter.com" },
    { icon: <FaGithub />, link: "https://github.com" },
];
Form.Footer = ({ login = true }) => (
    <div className="flex flex-col items-center gap-5 text-sm">
        <p>or continue with these social profiles</p>
        <div className="flex gap-3 -mb-1">
            {socialAuth.map(({ icon, link }) => (
                <a
                    key={link}
                    href={link}
                    className="rounded-full border border-current w-10 h-10 grid place-items-center ring-current"
                    target="blank"
                >
                    {icon}
                </a>
            ))}
        </div>
        {login ? (
            <p>
                Already a member?{" "}
                <Link
                    to="/login"
                    className="text-blue1 hover:underline focus:underline focus:ring-0"
                >
                    Login
                </Link>
            </p>
        ) : (
            <p>
                Don’t have an account yet?{" "}
                <Link
                    to="/signup"
                    className="text-blue1 hover:underline focus:underline focus:ring-0"
                >
                    Register
                </Link>
            </p>
        )}
    </div>
);

export default Form;
