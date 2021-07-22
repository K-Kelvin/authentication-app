module.exports = {
    purge: [
        "./public/index.html",
        "./src/components/**/*.{js,jsx,ts,tsx}",
        "./src/pages/**/*.{js,jsx,ts,tsx}",
        "./src/*.{js,jsx}",
    ],
    darkMode: "class", // or 'media' or 'class'
    mode: "jit",
    theme: {
        extend: {
            colors: {
                black: {
                    DEFAULT: "#000",
                    0: "#000",
                    1: "#111",
                    2: "#222",
                    3: "#333",
                    4: "#444",
                    5: "#555",
                    6: "#666",
                    7: "#777",
                    8: "#888",
                    9: "#999",
                },
                primary: {
                    DEFAULT: "#FFF",
                    light: "#FFF",
                    dark: "#252329",
                },
                secondary: {
                    DEFAULT: "#333",
                    light: "#333",
                    dark: "#E0E0E0",
                },
                accent: "var(--accent-color)",
                "gray-82": "#828282",
                blue1: "#2F80ED",
                bd: "#BDBDBD",
                f2: "#F2F2F2",
                "4f": "#4F4F4F",
                red: {
                    eb: "#EB5757",
                },
            },
            screens: {
                tablet: { min: "768px", max: "1023px" }, // @media (min-width: 768px) and (max-width: 1023px)
                "phone-lg": { min: "640px", max: "767px" }, // @media (min-width: 768px) and (max-width: 1023px)
                mobile: { max: "639px" }, // @media (max-width: 639px)
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
