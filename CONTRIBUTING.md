# Contributing
This is a default process to contribute to the project

### New features or improvements

1. Create a new branch from develop-branch following [Git Flow](https://danielkummer.github.io/git-flow-cheatsheet/index.pt_BR.html) rules

```bash
git checkout -b branch-type/name
```

2. Commit and Push files

3. Create a new Pull Request to develop-branch

4. Wait for approbation or new comments about your pull request. We'll be too fast, we swear.

### New hotfixes

1. Create a new branch from master-branch following [Git Flow](https://danielkummer.github.io/git-flow-cheatsheet/index.pt_BR.html) rules

```bash
git checkout -b hotfix/name
```

2. Commit and Push files

3. Create a new Pull Request to master-branch

4. Wait for approbation or new comments about your pull request.

## Only for collaborators

### New version/release

1. Create a new branch from develop-branch following [Git Flow](https://danielkummer.github.io/git-flow-cheatsheet/index.pt_BR.html) and [SEMVER](https://semver.org/) rules

```bash
git checkout -b release/v.X.X.X
```

2. Update the project version property on package.json file

3. Generate a updated distribution using *gulp* command. It's going to be in *dist* directory.


```bash
gulp build:prod
```

4. Create a new Pull Request to master-branch

5. Wait for approbation or new comments about your pull request.

6. After approving, create a new git-tag and release-branch on github and publish whole repository, including the dist folder, on [NPM](https://www.npmjs.com/) services.

7. Then make a merge from develop-branch to master-branch
