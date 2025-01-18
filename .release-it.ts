import type { Config } from 'release-it';

export default {
  git: {
    commit: true,
    tag: true,
    push: true,
    requireUpstream: true,
    commitMessage: 'chore(release): v${version}',
    tagName: 'v${version}',
    changelog: "npm run changelog:generate"
  },
  github: {
    release: true,
    tokenRef: 'GITHUB_TOKEN', 
  },
  npm: {
    publish: false,
  },
  "hooks": {
    "before:version:release": "echo 'Skipping npm version bump...'"
  }
  // plugins: {
  //   '@release-it/conventional-changelog': {
  //     infile: "CHANGELOG.md",
  //     // "writerOpts": {
  //     //   "groupBy": "type"
  //     // },
  //     preset: {
  //       name: "conventionalcommits",
  //       // types: [
  //       //   {
  //       //     "type": "feat",
  //       //     "section": "✨Features"
  //       //   },
  //       //   {
  //       //     "type": "fix",
  //       //     "section": "🐛 Bug Fixes"
  //       //   },
  //       //   {
  //       //     "type": "chore",
  //       //     "hidden": false,
  //       //     "section": "🚚 Chores"
  //       //   },
  //       //   {
  //       //     "type": "docs",
  //       //     "hidden": false,
  //       //     "section": "📝 Documentation"
  //       //   },
  //       //   {
  //       //     "type": "style",
  //       //     "hidden": false,
  //       //     "section": "🎨 Styling"
  //       //   },
  //       //   {
  //       //     "type": "refactor",
  //       //     "hidden": false,
  //       //     "section": "♻️ Code Refactoring"
  //       //   },
  //       //   {
  //       //     "type": "perf",
  //       //     "hidden": false,
  //       //     "section": "⚡️ Performance Improvements"
  //       //   },
  //       //   {
  //       //     "type": "test",
  //       //     "hidden": false,
  //       //     "section": "✅ Testing"
  //       //   },
  //       //   {
  //       //     "type": "build",
  //       //     "hidden": false,
  //       //     "section": "🚧 Build"
  //       //   },
  //       //   {
  //       //     "type": "wip",
  //       //     "hidden": false,
  //       //     "section": "⚒️ Work In Progress"
  //       //   },
  //       //   {
  //       //     "type": "revert",
  //       //     "hidden": false,
  //       //     "section": "🔁 Revert"
  //       //   },
  //       //   {
  //       //     "type": "ci",
  //       //     "hidden": false,
  //       //     "section": "👷‍♂️ Continuous Integration"
  //       //   }
  //       // ]
  //     }
  //   }
  // },
} satisfies Config;
