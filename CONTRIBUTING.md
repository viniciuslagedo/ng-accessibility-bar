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

1. On master branch, with develop updated merge it on master

```bash
git checkout develop
git pull origin develop
git checkout master
git merge develop
```

2. Update the project version following [SEMVER](https://semver.org/) rules

```bash
//For Patch version
npm run version:patch

//For Minor version
npm run version:minor

//For Major version
npm run version:major
```

3. Push on master branch with tags
```bash
git push --tags origin master
```

4. Travis make the build, publish on npm and github release
