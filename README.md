# 🔗 Meu Linktree Personalizado

Este é um projeto inspirado no [Linktree](https://linktr.ee), desenvolvido com **React**, **TypeScript** e **Vite**. Ele exibe uma lista de links personalizados na tela inicial e conta com uma área administrativa protegida por login, utilizando **Firebase Authentication** para gerenciar o acesso.

## 🚀 Tecnologias Utilizadas

- React
- TypeScript
- Vite
- Firebase Authentication
- Firebase Firestore
- React Router DOM

## 🧭 Rotas da Aplicação

| Rota             | Descrição                                           |
|------------------|-----------------------------------------------------|
| `/`              | Página principal com os links públicos              |
| `/login`         | Tela de login (com autenticação Firebase)           |
| `/admin/painel`  | Painel administrativo para gerenciar os links       |

## 🔐 Autenticação

O login é feito via **Firebase Authentication**, utilizando o método **Email e Senha**.
Pode ser acessado utilizando o login "teste123@teste.com" e senha "teste123"


- A área `/admin` só pode ser acessada após login válido.
- A autenticação é persistida no navegador (session/local).

## 📄 Funcionalidades

- ✅ Listar seus links na página principal
- 🔐 Login seguro via Firebase
- ➕ Adicionar novos links (com título e URL)
- 🗑️ Excluir links
- ✏️ Alterar cores
- ☁️ Links armazenados no **Firebase Firestore**

]
