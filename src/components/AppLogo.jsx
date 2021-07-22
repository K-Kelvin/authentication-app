import { useGetDarkMode } from "hooks/useTheme";
import { ReactComponent as LogoLight } from "images/devchallenges-light.svg";
import { ReactComponent as LogoDark } from "images/devchallenges.svg";

const AppLogo = () => {
    const { isDark } = useGetDarkMode();
    return (
        <a
            href="/"
            className="inline-block ring-offset-4 ring-opacity-25 rounded"
        >
            {isDark ? <LogoLight /> : <LogoDark />}
        </a>
    );
};

export default AppLogo;
