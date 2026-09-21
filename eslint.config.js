const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
    js.configs.recommended,

    {
        files: ["**/*.js"],
        languageOptions: {
            globals: globals.node
        }
    },

    {
        files: ["test/**/*.js"],
        languageOptions: {
            globals: {
                ...globals.node,
                test: "readonly",
                expect: "readonly"
            }
        }
    }
];