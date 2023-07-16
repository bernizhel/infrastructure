# Infrastructure

## Contributing

### Prerequisites

- Use `npm` as your package manager

### Common workflow

- `git clone https://github.com/bernizhel/infrastructure`
- `cd infrastructure`
- `git checkout -b "your branch name"`
- `npm ci` or `npm install` (will run prepare npm script hook too)
- Do some changes
- `git add .`
- `git commit -m "your commit message in conventional commits styles"`
- `precommit` and `commit-msg` hooks are run
- On failure, make correct changes
- On success, `git push origin "your branch name"`
- Runs CI checks
- On github create a PR with your changes to the `master` branch
- Wait for checks to pass
- Merge your changes

### Release workflow

- Make the work in another branch as described in "Common workflow" till your merge the changes to `master`
- Tag your last commit with `git tag v1.0.0` in SemVer
- `git push --tags`
- Wait for the release CI workflow
- Now you have your changes issued and deployed
- Merge the PR

### Specific workflows

- **Commitlint**: It is run on `commit-msg` hook and in the CI on pushes, PRs, and release workflow depends on it (required)
- **Prettier**: It is run on `precommit` hook and in the CI on pushes, PRs, and release workflow depends on it (required)
- **ESLint**: It is run on `precommit` hook and in the CI on pushes, PRs, and release workflow depends on it (required)
- **Unit tests**: It is run on `precommit` hook and in the CI on pushes, PRs, and release workflow depends on it (required)
- **Integration tests**: It is run in CI on PRs and release workflow depends on it (required)
- **Release**: runs all the above checks, creates or updates an issue, adds comment on tests results, builds the app, deploys it with `gh-pages`, adds a comment with a link to the deployed app, and finally closes the issue

## Project description

В этом репозитории находится пример приложения с тестами:

- [e2e тесты](e2e/example.spec.ts)
- [unit тесты](src/example.test.tsx)

Для запуска примеров необходимо установить [NodeJS](https://nodejs.org/en/download/) 16 или выше.

Как запустить:

```sh
# установить зависимости
npm ci

# запустить приложение
npm start
```

Как запустить e2e тесты:

```sh
# скачать браузеры
npx playwright install

# запустить тесты
npm run e2e
```

Как запустить модульные тесты:

```sh
npm test
```
