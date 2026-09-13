# Fake Store

Aplicativo mobile em React Native com Expo consumindo a Fake Store API.

## Funcionalidades

- Lista de produtos vindos de `GET /products`
- Categorias vindas de `GET /products/categories`
- Busca de produtos por titulo
- Filtro de produtos por categoria
- Tela de detalhe do produto
- Carrinho com quantidade editavel, subtotal, frete e total
- Troca de telas controlada por estado no `App.tsx`, sem biblioteca de navegacao

## Como rodar

Instale as dependencias:

```bash
npm install
```

Inicie o projeto:

```bash
npm start
```

Depois, use uma das opcoes do Expo:

- pressione `a` para abrir no Android
- pressione `i` para abrir no iOS
- pressione `w` para abrir no navegador

## Scripts

```bash
npm start
npm run android
npm run ios
npm run web
```

## API

Base da API:

```txt
https://fakestoreapi.com
```

Endpoints usados:

- `GET /products`
- `GET /products/categories`
