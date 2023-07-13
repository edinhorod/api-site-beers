
# Beers API

API para cadastro e autenticação de usários com geração de Bearer Token


## Documentação da API

#### Insere um usuário no banco de dados e retorna os dados gravados

```http
  POST /register
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. O nome do usuário |
| `email`      | `string` | **Obrigatório**. O e-mail do usuário |
| `password`      | `string` | **Obrigatório**. A senha do usuário |

#### Valida os dados inseridos e caso o retorno seja verdadeiro, retorna os dados do usuário logado e o token de autenticação

```http
  POST /authenticate
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `email`      | `string` | **Obrigatório**. O e-mail do usuário |
| `password`      | `string` | **Obrigatório**. A senha do usuário |

#### Retorna os dados do usuário
```http
  POST /me
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `userId`      | `string` | **Obrigatório**. O id do usuário |



## Autores

- [@edinhorod](https://github.com/edinhorod)


## Deploy

Para rodar o projeto:
```bash
  npm install
```

```
  npx sequelize-cli db:migrate
```

```bash
  npm run dev
```

# Beers Site

Tela de Login e consumo de api externa construída em ReactJS.
## Deploy

Para rodar o projeto
```bash
  npm install
```
```bash
  npm run start
```
