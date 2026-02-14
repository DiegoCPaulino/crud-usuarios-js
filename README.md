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

```
├── src
│   ├── dados
│   │   └── usuarios.js
│   │
│   ├── usuarios
│   │   ├── atualizarUsuario.js
│   │   ├── cadastrarUsuario.js
│   │   ├── deletarUsuario.js
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
│   ├── usuarios
│   │   ├── atualizarUsuario.test.js
│   │   ├── cadastrarUsuario.test.js
│   │   ├── deletaUsuario.test.js
│   │   └── listarUsuarios.test.js
│   │
│   └── validacoes
│       ├── cpf.test.js
│       └── dataNasc.test.js
│       ├── nome.test.js
│
└── README.md
```

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

## 🧪 Testes Unitários

O projeto adota uma estratégia clara de testes unitários, organizada por domínio funcional, espelhando a estrutura da aplicação.

### 📂 Organização dos testes

**tests/usuarios**

Testes das funções de CRUD:
- Cadastro
- Atualização
- Exclusão
- Listagem

**tests/validacoes**

Testes específicos para:
- CPF
- Nome
- Data de nascimento

### 🎯 Estratégia

- Cada função possui seu próprio arquivo de teste  
- Validações são testadas de forma isolada  
- Foco em:
  - Casos de sucesso
  - Casos de erro
  - Regras de negócio
  - Retornos esperados  

Essa abordagem garante confiabilidade, facilidade de manutenção e escala futura do sistema.

---

## 🚀 Execução do Projeto

Atualmente, o projeto é executado por meio da importação direta das funções, com validação do comportamento via testes unitários.

O fluxo é intencionalmente simples, priorizando entendimento profundo do código antes da introdução de camadas como API ou framework.

---

## 🛠️ Tecnologias Utilizadas

- JavaScript (ES6+)
- Git & GitHub

---

## 📈 Evolução do Projeto

Projeto desenvolvido de forma incremental, com foco em:
- Clareza de código
- Arquitetura limpa
- Testabilidade
- Evolução contínua

Base sólida para:
- Integração com banco de dados
- Criação de API REST
- Introdução de frameworks backend
- Expansão de testes

---

## 📌 Observações Finais

Este projeto não utiliza banco de dados ou frameworks propositalmente, mantendo o foco absoluto em:
- Fundamentos
- Lógica de negócio
- Arquitetura
- Qualidade de código

---

## 👤 Autor

**Diego Paulino**  
Estudante de Análise e Desenvolvimento de Sistemas  
Foco em backend, lógica de programação e fundamentos de engenharia de software
