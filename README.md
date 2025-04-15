# Integração Laravel + React Native

Modelo de Conexão Laravel(backend) e React Native(frontend), com implementação de Autenticaçao e um exemplo de CRUD.

## Como rodar o projeto

### Pré-requisitos

- PHP
- Composer
- Expo CLI (`npm install -g expo-cli`)
- PostgreSQL
- Yarn ou npm

---

## Backend (Laravel)

### 1. Instalação

```bash
cd api-laravel
composer install
cp .env.example .env
php artisan key:generate
```

### 2. Configura o .env
```bash
DB_CONNECTION=pgsql
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=laravel
DB_USERNAME=
DB_PASSWORD=
```

### 3. Rodar os migrates
```bash
php artisan migrate
```
### 4. Rodar projeto ( rodar no ip caso queira usar o celular )
---

# Frontend (React Native)

### 1. Instalar as dependências 
```bash
cd app-react-native
npm install
```

### 2. Configurar a URL da API

No projeto React Native, atualize a URL base da API no arquivo onde está configurado o axios (services/api.ts):
```js
const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', // Altere para seu IP local se testar no celular
});
```

### 3. Startar o projeto 
```bash
npx expo start
```
