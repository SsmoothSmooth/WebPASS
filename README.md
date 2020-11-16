# Descrição do Trabalho:
### Uma plataforma online onde pode realizar busca e compra de passagem de avião
* Criado com components React e também utilizado styled-components;
* Configurado para funcionar em SPA(single page application) ;
* Usando react-router-dom para controlar as rotas;
* Realizado criação da instancia que o sistema vai ficar hospedado divido em duas Zona de Disponibilidade da AWS 
* Configurado o load balancer e o auto scalling para o sistema. 
* Feito o deploy do WEbPASS na Vercel para poder visualizar no navegador em qualquer lugar.

### Quais tecnologias e biblioteca:
Será desenvolvido utilizando a biblioteca React JS, que será integrado ao banco de dado MySQL rodando em cloud.

# Descrições das funcionalidade:
* Vendas de passagens - Realiza o direcionamento das vendas para sua respectivas agências de voo/ônibus. (Pendente problema na comunicação com o banco de dados)
* Consulta de passagens - Realiza a consulta da passagem que são registradas em nosso banco de dados. (Pendente problema na comunicação com o banco de dados)
* Registro de usuário - Realiza o registros das informações de cada cadastro realizado em nosso sistema. (Pendente problema na comunicação com o banco de dados)
* Registro de passagem - Gravar todos os registros das passagens no banco de dados para consulta-las. (Pendente problema na comunicação com o banco de dados)
* Histórico de compra e venda -  Será armazenados todo os registros de compras/vendas. (Pendente problema na comunicação com o banco de dados)

# Comandos utilizados

* npx create-react-app webpass:
  * Criando um novo projeto na qual vai trabalhar


* npm start:
  * Executa o aplicativo no modo de desenvolvimento.
    Abra http://localhost:3000/ para visualizá-lo no navegador.

                A página será recarregada se você fizer edições.
                Você também verá caso paresente os erros no console.

* npm install styled-components:
  * Uma biblioteca para React e React Native que permite 
    que você use estilos ao nível de componente na sua aplicação. 
    Eles são escritos em uma mistura de JavaScript com CSS

*  npm install react-router-dom
  * Uma biblioteca completa para controle de rotas que permite que você consiga configurar
    as rotas utilizando o formato JSX e também disponibiliza uma API para você 
    configurar diretamente via Javascript.

*  npm install react-slick
  * Uma Lib para Criar um carrossel

### Observação:
* npm install 
   * Utilzar para abaixar as dependencia do projeto.

# IMPORTANTE

* Não estamos conseguindo fazer a comunicação com o banco de dado
