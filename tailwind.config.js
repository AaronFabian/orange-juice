const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                purple_mood: "#CF9DEB",
                purple_mood_slow: "#dbbbee",
                purple_mood_hard: "#d193f4",
                gold_mood: "#F4BEA7",
                application_layout_color: "rgba(0,0,0,0.55)",
            },
            height: {
                app_height: "736px",
                app_window_height: "40rem",
            },
            width: {
                app_inner_width: "96%",
            },
            fontSize: {
                xxs: "0.675rem",
            },
        },
    },

    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/line-clamp"),
    ],
};
