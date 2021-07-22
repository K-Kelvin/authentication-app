import {
    useRef,
    useCallback,
    createContext,
    useReducer,
    useContext,
} from "react";

const THEME_CLASSNAME = "dark";

function setTheme(isDark = false) {
    const root = window.document.body;
    if (isDark) {
        root.classList.add(THEME_CLASSNAME);
        window.localStorage.setItem(THEME_CLASSNAME, THEME_CLASSNAME);
    } else {
        root.classList.remove(THEME_CLASSNAME);
        window.localStorage.setItem(THEME_CLASSNAME, "");
    }
    return isDark;
}

function initGlobalDarkMode() {
    const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;
    const inLocalStorage = window.localStorage.getItem(THEME_CLASSNAME);
    if (inLocalStorage === THEME_CLASSNAME) return setTheme(true);
    if (inLocalStorage === "") return setTheme(false);
    if (!inLocalStorage && prefersDarkMode) return setTheme(true);
    return setTheme(false);
}

const ThemeContext = createContext({ isDark: false });
function themeReducer(state, action) {
    switch (action.type) {
        case "light":
            return { isDark: false };
        case "dark":
            return { isDark: true };
        default:
            return state;
    }
}

export function ThemeProvider({ children }) {
    const isDarkRef = useRef(initGlobalDarkMode());
    const [state, dispatch] = useReducer(themeReducer, {
        isDark: isDarkRef.current,
    });

    return (
        <ThemeContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useGetDarkMode() {
    return useContext(ThemeContext);
}

// eslint-disable-next-line no-unused-vars
export default function useTheme(reRender = false) {
    const { isDark, dispatch } = useGetDarkMode();

    const toggleDarkTheme = useCallback(() => {
        if (setTheme(!isDark)) dispatch({ type: "dark" });
        else dispatch({ type: "light" });
    }, [isDark, dispatch]);

    return { isDark, toggleDarkTheme };
}
