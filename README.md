# Sobre o projeto

Mockup é um visualisador de dados  de empregados  regisrados  previamente em um banco de dados,com um design intuitivo e responsivo

# Deploy 
ps: a api  entra em stand-by por usar o  serviço free do render então as vezes o primeiro carregamento pode ser lento (5-10 min)!! 
[https://mockup-nwjzwvwq3-m4arthu.vercel.app](https://mockup-ashen.vercel.app)

#Views do app:
- Mobile </br>
![image](https://github.com/m4arthu/Mockup/assets/102080715/4d5956fd-a3c3-46cd-b43c-54f3895524fb)]

- Desktop </br>
![image](https://github.com/m4arthu/Mockup/assets/102080715/9e927d14-f492-4efc-ad47-208faf893598)


# Tecnologias utilizadas:

Vite - Ferramenta de construção do Projeto <br/>
NodeJS - Engine do projeto <br/>
React - Framework <br/>
Typescript - Linguagem de progamação <br/>
Styled Components - Biblioteca para estilização dos components <br/>

# Pré-requisitos 
-  ter instalado em sua maquina : <br/>
   git, nodeJs e npm
- ter clonado e rodando  na porta 3000 a api deste repositório: https://github.com/BeMobile/desafio-front-end

# Como rodar 
- clone este projeto em sua maquina <br/>
- Instale as dependências: 
  ```cmd
  npm  i
  ```
- Crie um arquivo  chamado .env  e nele coloque o endereço da api rodando localmente numa variável chamada VITE_API_URL
  ```cmd
   VITE_API_URL = 'http://localhost:3000'
  ```
- Inicie o  projeto:
  ```cmd
  npm run dev
  ```
