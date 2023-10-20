# Cardápio Digital - Aplicação Frontend

Este projeto é um simples protótipo de um Cardápio Digital desenvolvido usando React, Typescript e React Query.

## 💻 Requisitos

Antes de começar, certifique-se de ter o Node.js e o NPM instalados na sua máquina.

```bash
# Atualize o gerenciador de pacotes
sudo apt update

# Instale o Node.js
sudo apt install nodejs

# Instale o NPM (Node Package Manager)
sudo apt install npm
```

## 🚀 Instalação

Para começar, siga os seguintes passos:

1. Clone o projeto para sua máquina:

   ```bash
   git clone https://github.com/EverttonGomes/cardapio-digital
   cd cardapio-digital
   cd front-end
   ```

2. Instale as dependências do projeto executando o seguinte comando:

   ```bash
   npm install
   ```

3. Para iniciar o projeto, utilize o seguinte comando:

   ```bash
   npm run dev
   ```

## 🔧 Compilação

Se você deseja compilar a aplicação para produção, siga estas etapas:

1. Execute o seguinte comando para gerar uma versão otimizada da aplicação na pasta "dist":

   ```bash
   npm run build
   ```

Isso criará uma versão pronta para produção do aplicativo. Os arquivos otimizados estarão na pasta "dist" após a conclusão do processo de compilação.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list