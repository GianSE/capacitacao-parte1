
# API CRUD Alunos

API REST simples de cadastro, consulta, atualização e remoção de alunos - desenvolvida em Node.js com JavaScript. Utiliza as dependências: Express, Mongoose (MongoDB) e Moment.js para formatação de datas.

## 📋 Sumário

1. [Descrição](#1-descrição)  
2. [Requisitos](#2-requisitos)  
3. [Instalação](#3-instalação)  
4. [Variáveis de Ambiente](#4-variáveis-de-ambiente)  
5. [Execução](#5-execução)  
6. [Endpoints Disponíveis](#6-endpoints-disponíveis)  
7. [Licença](#7-licença)

## 1. Descrição

Esta API implementa operações CRUD (Create, Read, Update, Delete) para um recurso **Aluno**, com armazenamento no MongoDB. Cada aluno possui:

- **_id**: gerado automaticamente pelo MongoDB  
- **name** (string)  
- **age** (number)  
- **ra** (string, único)  
- **cpf** (string, único)  
- **createdAt** (string formatado com Moment.js no horário de Brasília)  
- **updatedAt** (string formatado com Moment.js no horário de Brasília)

## 2. Requisitos

- Node.js v14 ou superior instalado  
- MongoDB (local ou via MongoDB Atlas)

## 3. Instalação

1. Clone o repositório:

```bash
git clone https://github.com/GianSE/capacitacao-parte1/
cd capacitacao-parte1
```

2. Instale as dependências:

```bash
npm install
```

## 4. Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com:

```dotenv
DB_USER=<seu-usuário-do-atlas>
DB_PASSWORD=<sua-senha-url-encoded>
```

## 5. Execução

Para rodar em desenvolvimento:

```bash
npm start
```

A API estará disponível em:

```
http://localhost:3000/
```

## 6. Endpoints Disponíveis

Base URL: `http://localhost:3000`

### POST /aluno

Cria um novo aluno.

**Body JSON**:

```json
{
  "name": "Maria Oliveira",
  "age": 22,
  "ra": "2024001",
  "cpf": "321.654.987-00"
}
```

**Respostas**:

- `201 Created`: aluno criado com sucesso
- `422 Unprocessable Entity`: campos obrigatórios ausentes

### GET /aluno

Lista todos os alunos. Pode ser filtrado por query string `ra` ou `name`.

**Query Params**:

- `ra=2024001`
- `name=maria`

**Resposta**:

- `200 OK`: lista de alunos filtrados ou todos

### GET /aluno/:id

Busca um aluno pelo ID.

**Resposta**:

- `200 OK`: aluno encontrado
- `422 Unprocessable Entity`: aluno não encontrado

### PATCH /aluno/:id

Atualiza parcialmente os dados de um aluno.

**Body JSON** (qualquer campo):

```json
{
  "age": 23
}
```

**Resposta**:

- `200 OK`: aluno atualizado
- `422 Unprocessable Entity`: aluno não encontrado

### DELETE /aluno/:id

Remove um aluno.

**Resposta**:

- `200 OK`: aluno removido
- `422 Unprocessable Entity`: aluno não encontrado


## 7. Licença

ISC © 2025
