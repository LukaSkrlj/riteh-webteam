module.exports = {
  name: 'posts-remote',
  exposes: {
    './Module': 'apps/posts-remote/src/app/remote-entry/entry.module.ts',
  },
};
