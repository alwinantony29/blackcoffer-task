module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },

  // Set up ESLint for .js / .jsx files
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
  },
  plugins: ['jsx-a11y', 'promise'],
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    // Prettier must be last to override other configs
    'prettier',
  ],
  rules: {
    'arrow-parens': 'off',
    'comma-dangle': 'off',
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
    'react/jsx-curly-brace-presence': [
      'error',
      {props: 'always', children: 'never'},
    ],
    'import/newline-after-import': 'off',
    'object-curly-newline': 'off',
    'consistent-return': 'off',
    'no-underscore-dangle': 'off',
    'one-var': 'off',
    'no-plusplus': 'off',
    'operator-assignment': 'off',
    'one-var-declaration-per-line': 'off',
    'class-methods-use-this': 'off',
    '@next/next/no-img-element': 'off',
  },

  // Overrides specific eslint config for .ts files
  overrides: [
    {
      files: ['**/*.ts'],
      env: {
        jest: true,
      },
      globals: {
        React: 'writable',
      },
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts'],
        },
        'import/resolver': {
          typescript: {
            project: './tsconfig.json',
          },
        },
      },

      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
      },

      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'prettier',
      ],
      rules: {
        'arrow-parens': 'off',
        'max-classes-per-file': 'off',
        'comma-dangle': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/member-ordering': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off',
        '@typescript-eslint/no-floating-promises': 'warn',
        'import/no-named-as-default-member': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        'prefer-const': [
          'error',
          {
            destructuring: 'all',
            ignoreReadBeforeAssign: true,
          },
        ],
        complexity: 'off',

        quotes: [2, 'single', 'avoid-escape'],
      },
    },
  ],
};
