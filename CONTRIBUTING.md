# Contributing
That is a default process to contribute to the project

### If new features or improvements

1. Fork the repo
2. Clone your fork
3. Create a new branch from develop-branch following [Git Flow](https://danielkummer.github.io/git-flow-cheatsheet/index.pt_BR.html) rules

```bash
git checkout -b branch-type/name
```

4. Install

```bash
npm install
```

5. Run

```bash
gulp
```

6. Make your changes

7. Commit and Push files

8. Create a new Pull Request to that repo develop-branch with a good description

9. Wait for approbation or new comments about your pull request. We'll be too fast, we swear.

### If new hotfixes


1. Fork the repo
2. Clone your fork
3. Create a new branch from master-branch following [Git Flow](https://danielkummer.github.io/git-flow-cheatsheet/index.pt_BR.html) rules

```bash
git checkout -b hotfix/name
```
4. Install

```bash
npm install
```

5. Run

```bash
gulp
```

6. Make your changes

7. Commit and Push files

8. Create a new Pull Request to that repo master-branch with a good description

9. Wait for approbation or new comments about your pull request. We'll be too fast, we swear.

## Only for admins

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

6. After approving, create a new git-tag and release-markup on github and publish whole repository, including the dist folder, on [NPM](https://www.npmjs.com/) services.

7. Then make a merge from master-branch to develop-branch
