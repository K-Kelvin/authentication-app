import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import {
    AiFillCaretDown as CaretDown,
    AiFillCaretUp as CaretUp,
} from "react-icons/ai";
import {
    MdAccountCircle as AccountIcon,
    MdPeople as GroupIcon,
    MdExitToApp as LogoutIcon,
} from "react-icons/md";
import AppLogo from "components/AppLogo";
import ToggleDarkMode from "components/ToggleDarkMode";
// import handleImgError from "helpers/handleImgError";
import useOnClickOutside from "hooks/use-on-click-outside";
import { useUser } from "context/user";

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef();
    const usr = useUser();
    const displayName = usr?.displayName;
    const photoURL = usr?.photoURL;

    const Arrow = showDropdown ? CaretUp : CaretDown;
    useOnClickOutside(dropdownRef, () => {
        setShowDropdown(false);
    });
    return (
        <header className="p4 md:px-20 md:py-6 flex justify-between items-center text-secondary dark:text-secondary-dark">
            <AppLogo />
            <div
                role="button"
                className="flex items-center gap-3 relative focus:outline-none focus:ring-2 ring-blue1/25 offset ring-offset-4 rounded"
                onClick={() => setShowDropdown(p => !p)}
                onKeyPress={e => {
                    if (e.key === "Enter") setShowDropdown(p => !p);
                }}
                tabIndex="0"
                ref={dropdownRef}
            >
                <img
                    src={photoURL}
                    alt=" "
                    className="w-8 h-8 rounded bg-bd"
                    // onError={handleImgError}
                />
                <span className="flex-grow-0 flex-shrink-0 block font-bold text-xs max-w-[110px] overflow-hidden overflow-ellipsis whitespace-nowrap mobile:hidden">
                    {displayName}
                </span>
                <Arrow className="w-4 h-4 mobile:hidden" />
                <Dropdown show={showDropdown} />
            </div>
        </header>
    );
};

const Dropdown = ({ show }) => {
    const history = useHistory();
    return (
        <div
            className={`bg-white dark:bg-primary-dark shadow rounded-xl absolute ${
                show ? "block" : "hidden"
            } top-full mt-5 right-0 px-3 py-3.5 border border-secondary-dark text-sm font-medium`}
            style={{ minWidth: "188px" }}
        >
            <button
                type="button"
                onClick={() => history.push("/u")}
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-f2 dark:hover:bg-[#2b282f] focus:bg-f2 text-4f dark:text-secondary-dark font-medium w-full"
            >
                <AccountIcon className="w-5 h-5" />
                <span>My Profile</span>
            </button>
            <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-f2 dark:hover:bg-[#2b282f] focus:bg-f2 text-4f dark:text-secondary-dark">
                <GroupIcon className="w-5 h-5" />
                <span>Group Chat</span>
            </div>
            <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-f2 dark:hover:bg-[#2b282f] focus:bg-f2 text-4f dark:text-secondary-dark">
                <ToggleDarkMode className="scale-75 mx-auto" />
            </div>
            <hr className="w-full h-0.5 text-secondary-dark" />
            <button
                type="button"
                onClick={() => {
                    history.push("/logout");
                }}
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-f2 dark:hover:bg-[#2b282f] focus:bg-f2 text-red-eb font-medium w-full"
            >
                <LogoutIcon className="w-5 h-5" />
                <span>Logout</span>
            </button>
        </div>
    );
};

export default Header;
