import eslint from "@eslint/js"
import tseslint from "typescript-eslint"
import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import prettierPlugin from "eslint-plugin-prettier"
import simpleImportSort from "eslint-plugin-simple-import-sort"

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      react,
      "react-hooks": reactHooks,
      prettier: prettierPlugin,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      // React
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",

      // React Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Prettier
      "prettier/prettier": "error",

      // Typescript
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/no-explicit-any": "off",

      // Import
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // 1. Node modules
            ["^\\u0000", "^@?\\w"],

            // 2. Project files
            [
              "^(@|components|hooks|utils|services)(/.*|$)",
              "^[.](?!.*\\.css$).*",
            ],

            // 3. Styles
            ["^.+\\.css$"],
          ],
        },
      ],
      "simple-import-sort/exports": "error",
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ["**/*.js"],
    extends: [tseslint.configs.disableTypeChecked],
  }
)
