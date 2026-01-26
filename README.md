# CRUD de Usuários em JavaScript

## 📌 Visão Geral

Este projeto consiste em um **CRUD de usuários desenvolvido em JavaScript**, com foco em **lógica de programação, organização de código e boas práticas**.

O sistema realiza operações completas de **criação, leitura, atualização e exclusão de usuários**, utilizando **armazenamento em memória**, sem dependência de banco de dados ou frameworks externos.  
Trata-se de um projeto **educacional e técnico**, pensado para consolidar fundamentos essenciais de desenvolvimento backend e servir como base para evolução futura.

---

## 🎯 Objetivos do Projeto

- Consolidar conceitos de **lógica de programação**
- Aplicar **organização modular de código**
- Implementar operações CRUD de forma estruturada
- Trabalhar validações de dados e regras de negócio
- Padronizar retornos e respostas do sistema
- Preparar o projeto para **testes unitários**
- Servir como projeto principal de portfólio

---

## 🧠 Funcionalidades Implementadas

### 👤 Usuários
- Cadastro de usuário
- Listagem de usuários:
  - Ordenação por ID
  - Ordenação alfabética
- Atualização de usuário (nome)
- Exclusão de usuário:
  - Por ID
  - Por CPF

### 🔍 Validações
- Validação de CPF
- Validação de nome
- Validação de data de nascimento
- Verificação de campos obrigatórios

### 🧾 Padronização de Respostas
- Retornos estruturados com:
  - `status`
  - `code`
  - `message`
  - `data`

---

## 🗂️ Estrutura do Projeto

├── src
│   ├── dados
│   │   └── usuarios.js
│   │
│   ├── usuarios
│   │   ├── atualizarUsuario.js
│   │   ├── cadastrarUsuario.js
│   │   ├── deletaUsuario.js
│   │   └── listarUsuarios.js
│   │
│   ├── utils
│   │   ├── campoObrigatorio.js
│   │   ├── criarRespostas.js
│   │   └── formatacoes.js
│   │
│   ├── validacoes
│   │   ├── cpf.js
│   │   ├── dataNasc.js
│   │   └── nome.js
│   │
│   └── geradorId.js
│
├── tests
│   └── (testes unitários em desenvolvimento)
│
└── README.md

---

## 🧩 Arquitetura e Decisões Técnicas

- **Armazenamento em memória**:  
  Os usuários são armazenados em um módulo dedicado (`src/dados`), simulando uma camada de persistência.

- **Separação de responsabilidades**:
  - `usuarios`: regras de negócio do CRUD
  - `validacoes`: validação de dados
  - `utils`: funções reutilizáveis
  - `dados`: simulação de persistência

- **Atualização restrita**:
  Apenas o nome do usuário pode ser atualizado, refletindo uma decisão de negócio intencional.

- **Respostas padronizadas**:
  Todas as operações retornam objetos estruturados para facilitar manutenção, testes e futura integração.

---

## 🧪 Testes

A pasta `tests` está em fase de desenvolvimento.

Atualmente:
- As funções foram testadas manualmente durante o desenvolvimento
- Os testes unitários estão sendo implementados gradualmente

Próximo passo:
- Testes unitários por função
- Testes de fluxo completo do sistema

---

## 🚀 Execução do Projeto

Atualmente, o projeto é executado por meio da importação e chamada das funções diretamente em arquivos de teste.

Com a implementação dos testes unitários, o fluxo de execução será centralizado na pasta `tests`, permitindo validar todo o comportamento do sistema de forma automatizada.

---

## 🛠️ Tecnologias Utilizadas

- **JavaScript**
- **Git & GitHub**

---

## 📈 Evolução do Projeto

Este projeto foi desenvolvido de forma incremental, priorizando:
- Clareza de código
- Organização estrutural
- Evolução contínua
- Boas práticas de versionamento

---

## 📌 Observações

Este projeto não utiliza banco de dados nem frameworks propositalmente, mantendo o foco em **fundamentos de programação**, **arquitetura de código** e **lógica aplicada**.

---

## 👤 Autor

**Diego Paulino**  
Estudante de Análise e Desenvolvimento de Sistemas  
Foco em backend, lógica de programação e fundamentos de engenharia de software