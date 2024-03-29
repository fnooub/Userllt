export default [
  {
    env: {
      browser: true,
      jquery: true,
      greasemonkey: true,
      es6: true,
      worker: true,
    },
    parserOptions: {
      ecmaVersion: 2018,
    },
    globals: {
      saveAs: false,
      JSZip: false,
      jEpub: false,
      throttleDebounce: false,
      GM_config: false,
    },
    extends: 'eslint:recommended',
    rules: {
      indent: [
        'error',
        2,
        {
          SwitchCase: 1,
        },
      ],
      'linebreak-style': ['error', 'unix'],
      quotes: [
        'error',
        'single',
        {
          avoidEscape: true,
        },
      ],
      semi: ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'no-console': 0,
    },
  },
];
