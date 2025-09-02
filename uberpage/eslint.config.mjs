import { defineConfig, globalIgnores } from "eslint/config";
import react from "eslint-plugin-react";
import globals from "globals";

export default defineConfig([globalIgnores(["build/*", "coverage/*", "node_modules/*"]),
{
    plugins: {
        react,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            Atomics: "readonly",
            SharedArrayBuffer: "readonly",
        },

        ecmaVersion: 2018,
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },

    rules: {
        "max-len": ["error", 140],
    },
}, {
    files: ["**/serviceWorker.js"],

    rules: {
        "no-param-reassign": 0,
        "no-console": 0,
    },
}]);