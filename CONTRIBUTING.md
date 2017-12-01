# Contribuição
Padrão de processo usado para contribuir com o projeto

### Nova funcionalidade ou melhoria

1. Criar a branch saindo da develop seguindo o [Git Flow](https://danielkummer.github.io/git-flow-cheatsheet/index.pt_BR.html)

```bash
git checkout -b branch-type/name
```

2. Commit e push

3. Criar Pull Request para develop

### Resolução de bugs

1. Criar a branch saindo da master seguindo o [Git Flow](https://danielkummer.github.io/git-flow-cheatsheet/index.pt_BR.html)

```bash
git checkout -b hotfix/name
```

2. Commit e push

3. Criar Pull Request para master

## Apenas colaboradores

### Nova Versão

1. Criar a branch saindo da develop seguindo o [Git Flow](https://danielkummer.github.io/git-flow-cheatsheet/index.pt_BR.html) e a versão.

```bash
git checkout -b release/v.X.X.X
```

2. Atualizar a versão no arquivo package json

3. Gerar uma nova dist através gulp

```bash
gulp build:prod
```

4. Criar o Pull Request diretamente para master

5. Após aprovado, gerar tag/release no github e publicar no npm

6. Criar merge da master para develop
