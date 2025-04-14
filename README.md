# 📱🔗 Integração Laravel + React Native

Este projeto foi criado como um **modelo de conexão entre Laravel (API backend)** e **React Native (aplicativo mobile frontend)**, utilizando uma estrutura simples e funcional para autenticação e consumo de dados.

## 🗂 Estrutura do Projeto

O projeto está dividido em dois repositórios/pastas:

- **`api-laravel/`**: Backend feito com Laravel.
- **`app-react-native/`**: Frontend mobile feito com React Native (usando Expo).

---

## 🚀 Como rodar o projeto

### ✅ Pré-requisitos

- PHP 8.x
- Composer
- Node.js
- Expo CLI (`npm install -g expo-cli`)
- SQLite ou MySQL (dependendo da config)
- Yarn ou npm

---

## ⚙️ Backend (Laravel)

### 1. Instalação

```bash
cd api-laravel
composer install
cp .env.example .env
php artisan key:generate
