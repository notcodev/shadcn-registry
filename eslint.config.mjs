import { eslint } from '@notcodev/eslint'

export default eslint({
  typescript: true,
  react: true,
  jsxA11y: true,
  next: true,
  ignores: ['.source'],
})
