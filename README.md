# 🎓 API de Alunos

API RESTful para gerenciamento de dados de alunos, incluindo criação, listagem, busca, atualização e remoção de registros. Ideal para testes, estudos ou integração com sistemas educacionais.

---

## 🚀 Instalação e Execução

### ✅ Pré-requisitos
- [Node.js](https://nodejs.org/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

### 🛠️ Passos para rodar localmente

```bash
# Clone o repositório
git clone https://github.com/seuusuario/seu-repo.git

# Instale as dependências
npm install
```

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
# Substitua com sua string de conexão do MongoDB Atlas
MONGO_URL=mongodb+srv://seu_usuario:sua_senha@seuclusterteste.mongodb.net/nomeDoBanco?retryWrites=true&w=majority
```

```bash
# Inicie a aplicação
npm start
```

---

## 📂 Coleções do Postman

Você pode testar a API com coleções do Postman:

1. Abra o Postman.
2. Clique em **Import**.
3. Selecione os arquivos `.postman_collection.json` localizados na pasta `postman/`.
4. Execute as requisições conforme os exemplos abaixo.

> 🔐 A API não requer autenticação JWT nesta versão.

---

## 📘 Endpoints

### 📍 GET `/`
Testa se a API está funcionando.

**Resposta:**
```json
{ "message": "Oi Express!" }
```

---

### 📍 POST `/aluno`
Cadastra um novo aluno.

**Corpo da requisição:**
```json
{
  "name": "Maria Souza",
  "age": 21,
  "ra": "123456",
  "cpf": "11122233344"
}
```

**Resposta:**
```json
{ "message": "Aluno inserido no sistema com sucesso!" }
```

---

### 📍 GET `/aluno`
Lista todos os alunos. Filtros opcionais:

- `?ra=123`
- `?name=Maria`

**Resposta:**
```json
[
  {
    "_id": "...",
    "name": "Maria Souza",
    "age": 21,
    "ra": "123456",
    "cpf": "11122233344"
  }
]
```

---

### 📍 GET `/aluno/:id`
Busca um aluno pelo ID.

**Resposta:**
```json
{
  "_id": "...",
  "name": "Maria Souza",
  "age": 21,
  "ra": "123456",
  "cpf": "11122233344"
}
```

---

### 📍 PATCH `/aluno/:id`
Atualiza informações de um aluno.

**Exemplo de corpo:**
```json
{
  "name": "Maria S. Souza",
  "age": 22
}
```

**Resposta:**
```json
{
  "_id": "...",
  "name": "Maria S. Souza",
  "age": 22,
  "ra": "123456",
  "cpf": "11122233344"
}
```

---

### 📍 DELETE `/aluno/:id`
Remove um aluno pelo ID.

**Resposta:**
```json
{ "message": "Aluno removido com sucesso" }
```

---

## 📬 Exemplos de Uso no Postman

### ➕ Cadastro de Aluno
- **POST** `http://localhost:3000/aluno`
- Body: JSON com `name`, `age`, `ra`, `cpf`

### 🔍 Buscar por Nome ou RA
- **GET** `http://localhost:3000/aluno?name=maria`

### ✏️ Atualizar Aluno
- **PATCH** `http://localhost:3000/aluno/{id}`
- Body: campos a serem atualizados

### ❌ Deletar Aluno
- **DELETE** `http://localhost:3000/aluno/{id}`

---

## ✅ Considerações Finais

- A API é aberta e não requer autenticação.
- Utiliza MongoDB Atlas como banco de dados principal.
- Ideal para fins educacionais e aprendizado de APIs com Node.js e MongoDB.
