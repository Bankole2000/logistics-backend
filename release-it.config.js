module.exports = {
  // Specify the GitHub token and repository info
  git: {
    commit: true,
    tag: true,
    push: true,
    requireUpstream: true,
  },
  github: {
    release: true, // Enable release creation on GitHub
    tokenRef: 'GITHUB_TOKEN', // Use GitHub Action's secret token
  },
  npm: {
    publish: false, // Prevent publishing to NPM (unless desired)
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
