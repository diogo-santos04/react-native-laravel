# Documentação do Projeto React Native + Laravel

## Índice
1. [Visão Geral](#visão-geral)
2. [Estrutura do Projeto](#estrutura-do-projeto)
3. [Tecnologias Utilizadas](#tecnologias-utilizadas)
4. [Configuração e Instalação](#configuração-e-instalação)
5. [Autenticação](#autenticação)
6. [Navegação](#navegação)
7. [Gerenciamento de Estado](#gerenciamento-de-estado)
8. [API e Integração](#api-e-integração)
9. [Componentes Principais](#componentes-principais)


## Visão Geral

Documentacao para modelo de Conexão Laravel(backend) e React Native(frontend), com implementação de Autenticaçao e um exemplo de CRUD.

## Estrutura do Projeto

```
react-native-laravel/
├── src/
│   ├── contexts/         # Contextos de estado global
│   ├── pages/            # Telas da aplicação
│   │   ├── SignIn/       # Tela de login
│   │   └── Menu/         # Tela de gerenciamento de itens
│   ├── routes/           # Configuração de navegação
│   └── services/         # Serviços (API, etc.)
├── App.tsx               # Componente principal
├── package.json          # Dependências do projeto
└── tsconfig.json         # Configuração do TypeScript
```

## Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento mobile
- **Expo**: Plataforma para facilitar o desenvolvimento React Native
- **TypeScript**
- **React Navigation**: Biblioteca para navegação entre telas
- **Axios**: Cliente HTTP para requisições à API
- **AsyncStorage**: Sistema de armazenamento local persistente, utilizado para guardar o token JWT

## Autenticação

O sistema de autenticação utiliza tokens JWT armazenados localmente através do AsyncStorage.

### Fluxo de Autenticação

1. **Login**: O usuário insere email e senha na tela SignIn (src/pages/SignIn)
2. **Validação**: Os dados são enviados para a API Laravel via POST em `/auth/login` (src/contexts/AuthContext  -- linha 65...)
3. **Armazenamento**: O token e informações do usuário são armazenados no AsyncStorage (src/contexts/AuthContext  -- linha 79)
4. **Cabeçalhos**: O token é incluído automaticamente nos cabeçalhos de todas as requisições subsequentes ( header da requisicao ) 
5. **Verificação de Token**: No carregamento do app, o sistema verifica se existe um token armazenado (useEffect no AuthContext)
6. **Logout**: Envia requisição para `/auth/logout` e limpa o AsyncStorage (linha 89 AuthContext)

### Componentes de Autenticação

- `AuthContext.tsx`: Gerencia o estado de autenticação e expõe métodos como `signIn` e `signOut`
- `SignIn/index.tsx`: Interface de login
- `routes/index.tsx`: Redireciona para rotas autenticadas ou públicas conforme o estado de autenticação

## Navegação

A navegação é gerenciada pelo React Navigation com duas pilhas principais:

- **AuthRoutes**: Rotas públicas (nao precisao estar logado para acessar)
- **AppRoutes**: Rotas protegidas (rotas que é necessário estar autenticado)

O componente `routes/index.tsx` decide qual pilha exibir com base no estado de autenticação.

## Gerenciamento de Estado

O estado global é gerenciado usando React Context API através dos seguintes arquivos:

- `contexts/AuthContext.tsx`: Mantém informações de autenticação como token e dados do usuário

## API e Integração

### Configuração

A comunicação com a API Laravel é feita através do Axios, configurado em `services/api.ts`.

### Endpoints Utilizados

- **Login**: `POST /auth/login`
- **Logout**: `POST /auth/logout`
- **Listar Itens**: `GET /item`
- **Criar Item**: `POST /item`
- **Excluir Item**: `DELETE /item/{id}`
- **Editar Item**: `PUT /item/{id}`
  
### Tratamento de Autenticação

O token JWT é automaticamente injetado nos cabeçalhos de todas as requisições:

```typescript
api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
```

## Componentes Principais

### Tela de Login (SignIn)

Localizada em `pages/SignIn/index.tsx`, esta tela:
- Pega email e senha 
- Chama a função `signIn` do AuthContext

### Menu de Gerenciamento (Menu)

Localizada em `pages/Menu/index.tsx`, esta tela:

- Lista os itens cadastrados em formato de tabela
- Permite adicionar novos itens através de um formulário
- Possibilita a exclusão de itens
- Possibilita a ediçõa de itens
- Possui botão para logout

