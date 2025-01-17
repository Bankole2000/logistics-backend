module.exports = {
  // Specify the GitHub token and repository info
  git: {
    commit: true,
    tag: true,
    push: true,
    requireUpstream: true,
    commitMessage: 'chore(release): {{version}}',
    tagName: 'v{{version}}',
  },
  github: {
    release: true, // Enable release creation on GitHub
    tokenRef: 'GITHUB_TOKEN', // Use GitHub Action's secret token
  },
  npm: {
    publish: false, // Prevent publishing to NPM (unless desired)
  },
  changelog: {
    enabled: true,
    filename: 'CHANGELOG.md',
  },
  plugins: {
    '@semantic-release/changelog': {
      changelogFile: 'CHANGELOG.md',
    },
    '@semantic-release/git': {
      assets: ['CHANGELOG.md', 'package.json'],
    },
  },
};
