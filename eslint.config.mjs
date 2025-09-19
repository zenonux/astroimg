// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu(
  {},
  {
    rules: {
      'perfectionist/sort-imports': 'off',
    },
  },
)
