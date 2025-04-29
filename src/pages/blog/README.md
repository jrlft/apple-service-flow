# Estrutura do Blog

- `index.tsx`: Página de listagem dos posts (busca do Strapi)
- `BlogPost.tsx`: Página de post individual (rota `/blog/:slug`)
- `samplePost.json`: Exemplo de post para referência do formato esperado pelo frontend

## Exemplo de post no Strapi

- title: "Cuidados com a bateria do seu iPhone"
- slug: "bateria-iphone"
- content: "<p>Veja dicas para prolongar a vida útil da bateria do seu iPhone. Evite temperaturas extremas, mantenha o iOS atualizado e utilize carregadores certificados.</p>"

O frontend espera que o Strapi esteja rodando em `http://localhost:1337` e que a collection seja `posts`.
