// commitlint.config.js
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'ci', 'chore', 'revert'],
    ],
    'type-empty': [2, 'never'], // type cannot be empty
    'subject-case': [2, 'always', 'lower-case'], // enforce sentence case for the subject
    'subject-empty': [2, 'never'], // subject cannot be empty
    'header-max-length': [2, 'always', 72], // limit header length to 72 characters
  },
};
