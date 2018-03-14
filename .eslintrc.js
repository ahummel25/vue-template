module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#bulb-rules
    'plugin:vue/recommended',
    '@vue/prettier',
  ],
  overrides: [
    {
      files: ['src/**/*'],
      rules: {
        'no-var': ['error'],
        radix: ['error'],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        // use a more sane max-attributes-per-line
        'vue/max-attributes-per-line': 3
      },
    },
    {
      files: ['**/*.spec.js'],
      env: { jest: true },
      globals: {
        createComponentMocks: false,
        mount: false,
        mountShallow: false,
        mountShallowView: false,
      },
    },
  ],
  globals: {
    $: true,
    jQuery: true,
  },
}
