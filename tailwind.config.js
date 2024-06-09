/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                "loader6-1": "loader6-1 1.5s infinite linear",
                "loader6-2": "loader6-2 1.5s infinite linear reverse",
            },
            keyframes: {
                "loader6-1": {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(360deg)" },
                },
                "loader6-2": {
                    "0%": { transform: "scale(0.2)", left: "0%" },
                    "50%": { transform: "scale(1.0)", left: "50%" },
                    "100%": { transform: "scale(0.2)", left: "100%" },
                },
            },
            backgroundImage: {
                "custom-svg": "url('/src/imgs/1482678.svg')",
            },
        },
    },
    plugins: [],
};
