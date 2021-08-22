import { useEffect } from "react";
import { NavLink as Link } from "react-router-dom";

const Home = () => {
    useEffect(() => {
        document.title = "Home";
    }, []);

    return (
        <div className="bg-black-5 text-white mt-16 mx-auto p-4 max-w-lg text-center font-sans rounded-xl">
            <p className="mb-5 font-semibold">My React App!</p>
            <div className="flex justify-evenly">
                <Link to="/login" type="button" className="btn">
                    Login
                </Link>
                <Link to="/u" type="button" className="btn">
                    App
                </Link>
                <Link to="/signup" type="button" className="btn">
                    Sign up
                </Link>
            </div>
        </div>
    );
};

export default Home;
