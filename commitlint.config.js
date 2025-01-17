module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2, // Level: 2 = error
      'always', // Condition: enforce this rule always
      [
        'feat', // Feature
        'fix', // Bug fix
        'docs', // Documentation
        'style', // Code style changes
        'refactor', // Code refactoring
        'perf', // Performance improvement
        'test', // Adding/updating tests
        'build', // Build-related changes
        'ci', // CI/CD changes
        'chore', // Maintenance changes
        'revert', // Revert changes
        'wip', // Custom type: Work in Progress
      ],
    ],
  },
};
