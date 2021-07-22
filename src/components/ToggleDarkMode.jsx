import {
    FiMoon as MoonIcon,
    FiSun as SunIcon,
    FiToggleLeft as ToggleLeftIcon,
    FiToggleRight as ToggleRightIcon,
} from "react-icons/fi";
import useTheme from "../hooks/useTheme";

const ToggleDarkMode = ({ className }) => {
    const { isDark, toggleDarkTheme } = useTheme(true);

    const common = "w-6 h-6 flex-shrink-0";
    const ToggleIcon = isDark ? ToggleRightIcon : ToggleLeftIcon;
    return (
        <button
            type="button"
            onClick={e => {
                e.stopPropagation();
                toggleDarkTheme();
            }}
            className={`${
                className || "absolute top-4 right-4"
            } rounded-full border border-bd dark:border-secondary-dark text-secondary-light dark:text-secondary-dark focus:ring-4 flex gap-2 px-3.5 py-1.5 transform mobile:scale-90`}
        >
            <SunIcon className={`text-yellow-400 ${common}`} />
            <ToggleIcon className="w-7 h-6 flex-shrink-0" />
            <MoonIcon className={`text-bd ${common}`} />
        </button>
    );
};

export default ToggleDarkMode;
