# Contributing
Default process to contributing with project

### New feature or improvement

1. Create a new branch from develop following [Git Flow](https://danielkummer.github.io/git-flow-cheatsheet/index.pt_BR.html) rules

```bash
git checkout -b branch-type/name
```

2. Commit and Push files

3. Create a new Pull Request for develop

4. Waiting approves or new comments on pull request

### New bugs solution

1. Create a new branch from master following [Git Flow](https://danielkummer.github.io/git-flow-cheatsheet/index.pt_BR.html) rules

```bash
git checkout -b hotfix/name
```

2. Commit and Push files

3. Create a new Pull Request for master

4. Waiting approves or new comments on pull request

## Only for collaborators

### New version/release

1. Create a new branch from develop following [Git Flow](https://danielkummer.github.io/git-flow-cheatsheet/index.pt_BR.html) and [SEMVER](https://semver.org/) rules

```bash
git checkout -b release/v.X.X.X
```

2. Update version of project on package.json file


3. Make a a new build of dist using *gulp*


```bash
gulp build:prod
```

4. Create a new Pull Request for master

5. Waiting approves or new comments on pull request

6. After pull request approves, create a new tag/release on github and publish the repository on [NPM](https://www.npmjs.com/)

7. For finish, make a merge from master to develop
