<h1 align="center">
    <img alt="Smartcine" title="" src=".github/logo-smartcine.svg" width="200px" />
    <div>
      <strong>SmartCine</strong>
    </div>
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/joao0pedro0alves/smartcine?color=#F7DD43">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/joao0pedro0alves/smartcine">
  
  <a href="https://github.com/joao0pedro0alves/smartcine/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/joao0pedro0alves/smartcine">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">

   <a href="https://github.com/joao0pedro0alves/smartcine/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/joao0pedro0alves/smartcine?style=social">
  </a>
</p>

<p>
  <img src=".github/cover.png" alt="smartcine" />
</p>

<h4 align="center"> 
	🚧  Smarticine em desenvolvimento 🚀 🚧
</h4>

<p align="center">
 <a href="#-about">About</a> |
 <!-- <a href="#-funcionalidades">Funcionalidades</a> | -->
 <a href="#-layout">Layout</a> | 
 <a href="#-how-it-works">How It Works</a> | 
 <a href="#-technologies">Technologies</a> | 
 <!-- <a href="#-contribuidores">Contribuidores</a> |  -->
 <a href="#-author">Author</a> | 
 <a href="#-license">License</a>
</p>


## 💻 About

Projeto para aprimorar conhecimentos gerais do NextJS, React Native e Typescript.
Desenvolvimento com base na API [The movie DB](https://developers.themoviedb.org/3/getting-started/introduction)

É necessário criar uma [chave de API](https://developers.themoviedb.org/3/getting-started/authentication)
e adicioná-la a seu arquivo .env

Se por acaso gostar do resultado, peço uma estrelinha pelo trabalho que deu, obrigado !! 💜

---

<!-- ## ⚙️ Funcionalidades

- [x] Empresas ou entidades podem se cadastrar na plataforma web enviando:
  - [x] uma imagem do ponto de coleta
  - [x] nome da entidade, email e whatsapp
  - [x] e o endereço para que ele possa aparecer no mapa
  - [x] além de selecionar um ou mais ítens de coleta: 
    - lâmpadas
    - pilhas e baterias
    - papéis e papelão
    - resíduos eletrônicos
    - resíduos orgânicos
    - óleo de cozinha

- [x] Os usuários tem acesso ao aplicativo móvel, onde podem:
  - [x] navegar pelo mapa para ver as instituições cadastradas
  - [x] entrar em contato com a entidade através do E-mail ou do WhatsApp

--- -->

## 🎨 Layout

O Layout dessa aplicação foi desenvolvido por mim, usando de inspiração diversos Apps famosos como a Netflix.

### Web

<p align="center">
  <img alt="Layout Web Demonstration" title="#Web" src=".github/images/web-demonstration-splash.png" width="100%">
</p>

<p align="center">
  <img alt="Layout Web Demonstration" title="#Web" src=".github/images/web-demonstration-dialog.png" width="100%">
</p>

### Mobile

<table>
  <tr>
    <td valign="top">
      <img width=240 src=".github/images/mobile/mobile-demonstration-1.jpeg"/>
    </td>
    <td valign="top">
      <img width=240 src=".github/images/mobile/mobile-demonstration-2.jpeg"/>
    </td>
    <td valign="top">
      <img width=240 src=".github/images/mobile/mobile-demonstration-3.jpeg"/>
    </td>
    <td valign="top">
      <img width=240 src=".github/images/mobile/mobile-demonstration-4.jpeg"/>
    </td>
  </tr>
    <tr>
    <td valign="top">
      <img width=240 src=".github/images/mobile/mobile-demonstration-5.jpeg"/>
    </td>
    <td valign="top">
      <img width=240 src=".github/images/mobile/mobile-demonstration-6.jpeg"/>
    </td>
    <td valign="top">
      <img width=240 src=".github/images/mobile/mobile-demonstration-7.jpeg"/>
    </td>
    <td valign="top">
      <img width=240 src=".github/images/mobile/mobile-demonstration-8.jpeg"/>
    </td>
  </tr>
</table>

---

## 🚀 How it works

Este projeto é divido em duas partes:
1. Frontend (pasta web)
2. Mobile (pasta mobile)

💡Tanto o Frontend quanto o Mobile precisam que da chave de API para funcionar.

### Pré-requisitos

Antes de baixar o projeto você vai precisar ter instalado na sua máquina as seguintes ferramentas:

* [Git](https://git-scm.com)
* [NodeJS](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/) ou [NPM](https://www.npmjs.com/)

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🧭 Rodando a aplicação web (Frontend)

```bash
# Clone este repositório
$ git clone https://github.com/joao0pedro0alves/smartcine.git

# Acesse a pasta do projeto no terminal/cmd
$ cd smartcine

# Vá para a pasta da aplicação Front End
$ cd web

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000
```

#### 📱 Rodando a aplicação mobile (Mobile)

```bash
# Vá para a pasta da aplicação mobile
$ cd mobile

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npx expo start
```

#### 📱 Deploy dispositivo android (Mobile)

<br/>

**Inicialize seu arquivo `eas.json`**

```bash
$ npx eas-cli build:configure
```

**Configure seu arquivo `eas.json` para desenvolvimento local**

```json
{
  "cli": {
    "version": ">= 2.1.0"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal",
      "android": {
        "buildType": "apk",
        "gradleCommand": ":app:assembleRelease"
      }
    },
    "production": {}
  },
  "submit": {
    "production": {}
  }
}
```

  💡 Para executar esse comando é necessário estar logado na sua conta Expo.dev

**Execute o build do projeto**

```bash
$ npx eas-cli build -p android --profile preview
```

  💡 Após a conclusão do build,um QRCODE será gerado na sua linha de comando, com um link para o executável do seu aplicativo.


**Referência**

- [Create your first build](https://docs.expo.dev/build/setup/)
- [Building APKs for Android Emulators and devices](https://docs.expo.dev/build-reference/apk/)
- [Configuring EAS Build with eas.json](https://docs.expo.dev/build/eas-json/)

---

## 🛠 Technologies

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website**  ([Next](https://nextjs.org/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[TailwindCSS](https://tailwindcss.com/)**
-   **[PostCSS](https://postcss.org/)**
-   **[Axios](https://github.com/axios/axios)**
-   **[Moment](https://www.npmjs.com/package/moment)**
-   **[Mui](https://mui.com/pt/)**
-   **[KeenSlider](https://keen-slider.io/)**
-   **[PhosporReact](https://www.npmjs.com/package/phosphor-react)**
-   **[RadixUi](https://www.radix-ui.com/)**

> Veja o arquivo  [package.json](https://github.com/joao0pedro0alves/smartcine/blob/main/web/package.json)

#### **Mobile**  ([React Native](http://www.reactnative.com/)  +  [TypeScript](https://www.typescriptlang.org/))
 
-   **[Expo](https://expo.io/)**
-   **[Expo Fonts](https://docs.expo.dev/guides/using-custom-fonts/)**
-   **[Expo Google Fonts](https://github.com/expo/google-fonts)**
-   **[Expo LinearGradient](https://www.npmjs.com/package/expo-linear-gradient)**
-   **[Expo Linking](https://docs.expo.dev/guides/linking/)**
-   **[Expo NavigationBar](https://docs.expo.dev/versions/latest/sdk/navigation-bar/)**
-   **[React Navigation](https://reactnavigation.org/)**
-   **[React Native SVG](https://github.com/react-native-community/react-native-svg)**
-   **[React Native Async Storage](https://www.npmjs.com/package/@react-native-community/async-storage)**
-   **[React Native Toast Message](https://www.npmjs.com/package/react-native-toast-message)**
-   **[React Native WebView](https://github.com/react-native-webview/react-native-webview)**
-   **[React Native YoutubeIframe](https://www.npmjs.com/package/react-native-youtube-iframe)**
-   **[Axios](https://github.com/axios/axios)**
-   **[Moment](https://www.npmjs.com/package/moment)**

> Veja o arquivo  [package.json](https://github.com/joao0pedro0alves/smartcine/blob/main/mobile/package.json)

---
<!-- 
## 👨‍💻 Contribuidores

💜 Um super thanks 👏 para essa galera que fez esse produto sair do campo da ideia e entrar nas lojas de aplicativos :)

<table>
  <tr>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/2254731?s=400&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4" width="100px;" alt=""/><br /><sub><b>Diego Fernandes</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat">👨‍🚀</a></td>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars1.githubusercontent.com/u/4669899?s=460&u=806503605676192b5d0c363e4490e13d8127ed64&v=4" width="100px;" alt=""/><br /><sub><b>Cleiton Souza</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat">👨‍🚀</a></td>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/861751?s=460&v=4" width="100px;" alt=""/><br /><sub><b>Robson Marques</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat">👨‍🚀</a></td>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars3.githubusercontent.com/u/16831337?s=460&v=4" width="100px;" alt=""/><br /><sub><b>Claudio Orlandi</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat">🚀</a></td>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/37725197?s=460&u=446439436524c37f66e41f35b607dbb70358d5e4&v=4" width="100px;" alt=""/><br /><sub><b>Vinícios Fraga</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat">🚀</a></td>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars3.githubusercontent.com/u/26551306?s=460&u=18446655ccae6c2a29eb177a104ecf32f029aa3a&v=4" width="100px;" alt=""/><br /><sub><b>Hugo Duarte</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat">🚀</a>  <a href="https://blog.rocketseat.com.br/" title="Blog">🌐</a></td>
    
  </tr>
  <tr>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars0.githubusercontent.com/u/39345247?s=460&u=cdff2624a327a43e2765112a54e966a06eac6d79&v=4" width="100px;" alt=""/><br /><sub><b>Joseph Oliveira</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat">🚀</a></td>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars0.githubusercontent.com/u/10366880?s=460&u=59e93e1752e9d2ece4b7d8e129d60caba9c94207&v=4" width="100px;" alt=""/><br /><sub><b>Guilherme Rodz</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat">🚀</a></td>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4" width="100px;" alt=""/><br /><sub><b>Mayk Brito</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat">🚀</a></td>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/7268910?s=460&u=0b5d9df4232e70fa66ea9f130fad4260378323de&v=4" width="100px;" alt=""/><br /><sub><b>João Paulo</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat">🚀</a></td>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/14251143?s=460&u=340ed1d854bbacc22b9a3210a18a1f589a28bc40&v=4" width="100px;" alt=""/><br /><sub><b>Luke Morales</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat">🚀</a></td>
     <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars0.githubusercontent.com/u/5151405?s=460&u=1dbcf0e89087c2dc902d3331b90e532db1543d2b&v=4" width="100px;" alt=""/><br /><sub><b>Luiz Batanero</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat">🚀</a></td>
    
  </tr>
</table> -->

## 💪 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)

---

## 🦸 Author

<div align='center'>
 <img style="border-radius: 50%;" alt="JoaoAlves" title="JoaoAlves" src="https://avatars.githubusercontent.com/u/78969510?v=4" width="100px;" />
 <br />
 <br />

 <a href="https://github.com/joao0pedro0alves">
  <strong style="font-size:25px; line-height: 5px;">João Alves</strong>
 </a>

</div>

<br />
<br />

<a href="https://instagram.com/joaao_alvees" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
<a href = "mailto:contato@joao.alves1032003@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
<a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-alves-pereira-bb0052216/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>

---

## 📝 License

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com 💜 por João Alves 👋🏽 [Entre em contato!](https://www.linkedin.com/in/jo%C3%A3o-pedro-alves-pereira-bb0052216/)

---
