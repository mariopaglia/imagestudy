# ImageStudy

ImageStudy é um banco de imagens gratuito construído com ReactJS, Typescript e Styled Components que utiliza a Pexels API para buscar e exibir imagens. Com ele, você pode pesquisar imagens por palavras-chave e usá-las em seus projetos sem se preocupar com direitos autorais.

Para visualizar e testar a aplicação, basta acessar o link: [https://imagestudy.vercel.app/](https://imagestudy.vercel.app/)

## Instalação

Para instalar o ImageStudy, você precisará ter o [Node.js](https://nodejs.org/) instalado em sua máquina. Em seguida, clone o repositório e execute os seguintes comandos:

### Instalação por YARN

```
yarn install
yarn start
```

### Instalação por NPM

```
npm install
npm start
```

Isso iniciará um servidor de desenvolvimento local na porta 3000. Acesse [http://localhost:3000](http://localhost:3000) para ver o aplicativo em funcionamento.

## Utilização

Para usar o ImageStudy, basta pesquisar por uma palavra-chave na barra de pesquisa e clicar em uma imagem para visualizá-la. Você também pode navegar pelas páginas de resultados usando os botões "Anterior" e "Próximo".

As imagens exibidas são obtidas através da Pexels API e podem ser usadas livremente em seus projetos, desde que sejam creditadas aos autores.

## Contribuições

Este projeto é open-source e estamos sempre abertos a contribuições. Se você deseja contribuir, por favor, siga as seguintes etapas:

1. Faça um fork do repositório
2. Crie uma nova branch com a sua contribuição (`git checkout -b my-new-feature`)
3. Adicione suas mudanças (`git add .`)
4. Faça o commit das suas mudanças (`git commit -m 'Added a new feature'`)
5. Faça o push para sua branch (`git push origin my-new-feature`)
6. Crie uma nova Pull Request

## Implementações Futuras

- [x] Paginação
- [ ] Melhoria na paginação
- [x] Instalação e configuração de Eslint e Prettier no projeto
- [ ] Abrir imagens em modal
- [ ] Adicionar opções de download direto com diferentes tipos de resolução da imagem no modal
- [ ] Adicionar opção de visualizar a imagem em tamanho original no modal
- [x] Imagens dinâmicas na página inicial

## Screenshots da Aplicação

### Página Inicial

![Página Inicial](https://i.imgur.com/okUHe8M.jpeg)

### Termo de Pesquisa: Gato

![Pesquisa de Gatos](https://i.imgur.com/ilpehv5.jpeg)

### Termo de Pesquisa: Cachorro

![Pesquisa de Cachorro](https://i.imgur.com/ZjFzbQM.jpeg)

## Licença

Este projeto está licenciado sob a licença [MIT](https://opensource.org/licenses/MIT).
