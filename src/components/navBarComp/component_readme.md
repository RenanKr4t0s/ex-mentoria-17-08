# Componente navBar.jsx (Barras de navegação)
Criado por Renan Ramos da Silva esse componente react cria uma navbar em bootstrap completa para utilização em sites diversos.

## Preparando os subcomponentes
1. Coloque o componente **navBar** assim como a pasta **navBarComp** em sua pasta de components.

2. Na pasta de assets coloque o logo do site com o nome **navBarLogo.png** (caso seja outro formato arrumar no componente)

3. Em **~/navBarComp/toFurfill/navArray.js** preencha esse array de objetos com todos os **Links Diretos** que quer na Navbar.

4. Caso queira que um item da navBar que abra uma camada de subitens preencha o **~/navBarComp/toFurfill/navArrayDrop.js**

5. Caso queira que um segundo item da navBar que abra uma camada de subitens crie uma cópia do **~/navBarComp/toFurfill/navArrayDrop.js** com o outro componente (posteriormente vamos chama-lo).

## Utilizando o navBar.jsx

- O Navbar já vem previamente carregado com o array de itens e um item de camadas.
- Preencha a alternativa ao logo caso ele tenha algum erro

### Se não tenho nenhum item com subitens
- Elimine o dropItens


### Se tenho outro item com subitens
1. Importe o array da mesma forma que o **navArrayDrop**
2. Chame ele utilizando o **NavItemDrop**.

