
# MyTapp Teste API

API de testes



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

Para rodar o projeto

```bash
  npm run dev
```

