import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginVue from "eslint-plugin-vue"
import { FlatCompat } from "@eslint/eslintrc"
import eslintConfigPrettier from "eslint-config-prettier"

const compat = new FlatCompat()

export default [
  { ignores: [".nuxt"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  ...compat.extends("@vue/eslint-config-prettier"),
  eslintConfigPrettier,
]
