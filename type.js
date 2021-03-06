'use strict';

var Type = [];

Type.push({
  name: 'HOME',
  test: function (obj) {
    return obj.hostname === 'github.com' && obj.pathlist.length === 0;
  },
  sample: 'https://github.com'
});

var staticTypes = [
  'explore',
  'notifications',
  'showcases',
  'stars',
  'trending',
  'watching',
  'search',
  'about',
  'contact',
  'features',
  'settings/admin',
  'settings/applications',
  'settings/billing',
  'settings/emails',
  'settings/notifications',
  'settings/organizations',
  'settings/profile',
  'settings/repositories',
  'settings/security',
  'settings/ssh'
];

for (var i = 0; i < staticTypes.length; i++) {
  var val = staticTypes[i];
  Type.push({
    name: val.toUpperCase().replace(/\//g, '_'),
    test: {
      pathname: '/' + val
    },
    sample: 'https://github.com/' + val
  });
}

Type.push({
  name: 'BLOG',
  test: function (obj) {
    return obj.pathname.match(/^\/blog/);
  },
  sample: 'https://github.com/blog'
});

Type.push({
  name: 'USER_ORGANIZATION_PROFILE',
  test: function (obj) {
    return obj.pathlist.length === 1;
  },
  sample: 'https://github.com/user'
});

Type.push({
  name: 'REPOSITORY',
  test: function (obj) {
    return obj.pathlist.length === 2;
  },
  sample: 'https://github.com/user/repo'
});

Type.push({
  name: 'REPOSITORY_BLOB',
  test: function (obj) {
    return obj.pathlist.length > 4 && obj.pathlist[2] === 'blob';
  },
  sample: 'https://github.com/user/repo/blob/master/file'
});

Type.push({
  name: 'REPOSITORY_TREE',
  test: function (obj) {
    return obj.pathlist.length > 3 && obj.pathlist[2] === 'tree';
  },
  sample: 'https://github.com/user/repo/tree/master/folder'
});

Type.push({
  name: 'REPOSITORY_COMMIT',
  test: function (obj) {
    return obj.pathlist.length === 4 && obj.pathlist[2] === 'commit';
  },
  sample: 'https://github.com/user/repo/commit/4a30c6606465e294d1ae1c9ca394ba03368928f7'
});

Type.push({
  name: 'REPOSITORY_COMMITS',
  test: function (obj) {
    return obj.pathlist.length < 5 && obj.pathlist[2] === 'commits' && !/\b[0-9a-f]{7,40}\b/.test(obj.pathlist[3]);
  },
  sample: 'https://github.com/user/repo/commits/master'
});

Type.push({
  name: 'REPOSITORY_SEARCH',
  test: function (obj) {
    return obj.pathlist.length === 3 && obj.pathlist[2] === 'search';
  },
  sample: 'https://github.com/user/repo/search'
});

Type.push({
  name: 'REPOSITORY_ISSUES',
  test: function (obj) {
    return obj.pathlist.length === 3 && obj.pathlist[2] === 'issues';
  },
  sample: 'https://github.com/user/repo/issues'
});

Type.push({
  name: 'REPOSITORY_ISSUE',
  test: function (obj) {
    return obj.pathlist.length === 4 && obj.pathlist[2] === 'issues';
  },
  sample: 'https://github.com/user/repo/issues/123'
});

Type.push({
  name: 'REPOSITORY_PULLS',
  test: function (obj) {
    return obj.pathlist.length === 3 && obj.pathlist[2] === 'pulls';
  },
  sample: 'https://github.com/user/repo/pulls'
});

Type.push({
  name: 'REPOSITORY_PULL_CONVERSATION',
  test: function (obj) {
    return obj.pathlist.length === 4 && obj.pathlist[2] === 'pull';
  },
  sample: 'https://github.com/user/repo/pull/123'
});

Type.push({
  name: 'REPOSITORY_PULL_COMMITS',
  test: function (obj) {
    return obj.pathlist.length === 5 && obj.pathlist[2] === 'pull' && obj.pathlist[4] === 'commits';
  },
  sample: 'https://github.com/user/repo/pull/123/commits'
});

Type.push({
  name: 'REPOSITORY_PULL_FILES',
  test: function (obj) {
    return obj.pathlist.length === 5 && obj.pathlist[2] === 'pull' && obj.pathlist[4] === 'files';
  },
  sample: 'https://github.com/user/repo/pull/123/files'
});

Type.push({
  name: 'REPOSITORY_COMPARE',
  test: function (obj) {
    return obj.pathlist.length === 4 && obj.pathlist[2] === 'compare';
  },
  sample: 'https://github.com/user/repo/compare/master...dev'
});

Type.push({
  name: 'REPOSITORY_COMPARE_OVERVIEW',
  test: function (obj) {
    return obj.pathlist.length === 3 && obj.pathlist[2] === 'compare';
  },
  sample: 'https://github.com/user/repo/compare'
});

// TODO add support for:

// https://github.com/user/repo/branches
//
// https://github.com/orgs/foo/audit-log
// https://github.com/orgs/foo/people
// https://github.com/orgs/foo/teams
//
// https://github.com/settings/organizations/foo/settings/applications
// https://github.com/settings/organizations/foo/settings/billing
// https://github.com/settings/organizations/foo/settings/hooks
// https://github.com/settings/organizations/foo/settings/oauth_application_policy
// https://github.com/settings/organizations/foo/settings/profile
//
// https://github.com/user/repo/branches/active
// https://github.com/user/repo/branches/all
// https://github.com/user/repo/branches/stale
// https://github.com/user/repo/branches/yours
// https://github.com/user/repo/graphs/code-frequency
// https://github.com/user/repo/graphs/commit-activity
// https://github.com/user/repo/graphs/contributors
// https://github.com/user/repo/graphs/punch-card
// https://github.com/user/repo/graphs/traffic
// https://github.com/user/repo/network
// https://github.com/user/repo/network/members
// https://github.com/user/repo/releases
// https://github.com/user/repo/releases/tag/v0.18.9
// https://github.com/user/repo/settings
// https://github.com/user/repo/settings/collaboration
// https://github.com/user/repo/settings/hooks
// https://github.com/user/repo/settings/keys
// https://github.com/user/repo/stargazers
// https://github.com/user/repo/stargazers/you_know
// https://github.com/user/repo/tags
// https://github.com/user/repo/watchers
// https://github.com/user/repo/wiki
//
// https://gist.github.com/user
// https://gist.github.com/user/4a30c6606465e294d1ae1c9ca394ba03368928f7

module.exports = Type;
