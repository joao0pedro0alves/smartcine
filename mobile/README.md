<h1 align="center">
  SmartCine
</h1>

<p align="center">
  <a href="#sobre-o-projeto-book">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias-gear">Tecnologias</a>
</p>

# Sobre o projeto :book:

Projeto para aprimorar conhecimentos gerais do React Native + Typescript.
Desenvolvimento com base na API [The movie DB](https://developers.themoviedb.org/3/getting-started/introduction)

o SmartCine é uma biblioteca, para pesquisar e ver critícas de seus filmes favoritos
Possui uma UI simples e inspirada em aplicativos como:

- Netflix
- Spotify

## Tecnologias :gear:

Este projeto foi desenvolvido com as seguintes tecnologias:

-   [Typescript](https://www.typescriptlang.org/)
-   [React Native](https://reactnative.dev)
-   [React Navigation](https://reactnavigation.org)
-   [axios](https://yarnpkg.com/package/axios)

### Condição prévia 📌

Você precisa ter instalado:

-   NodeJS
-   Package manager (NPM ou Yarn)
-   Expo Go

Também é necessário criar uma [chave de API](https://developers.themoviedb.org/3/getting-started/authentication)
e adicioná-la a seu arquivo .env

### Clone esse repositório :floppy_disk:

```bash
$ git clone https://github.com/joao0pedro0alves/smartcine.git
```
### Acesse a partiçao mobile

```bash
$ cd mobile
```

### Instale as dependências :wrench:

```bash
$ npx expo install
```

### Execute :iphone:

```bash
$ npx expo start
```

## Deploy dispositivo local (fisico)

### Inicialize seu arquivo `eas.json`

```bash
$ npx eas-cli build:configure
```

### Configure seu arquivo `eas.json` para desenvolvimento local

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

- Para executar esse comando é necessário estar logado na sua conta Expo.dev

### Execute o build do projeto

```bash
$ npx eas-cli build -p android --profile preview
```

- Após a conclusão do build,um QRCODE será gerado na sua linha de comando, com um link para o executável do seu aplicativo.


### Referência

- [Create your first build](https://docs.expo.dev/build/setup/)
- [Building APKs for Android Emulators and devices](https://docs.expo.dev/build-reference/apk/)
- [Configuring EAS Build with eas.json](https://docs.expo.dev/build/eas-json/)

## Contato

<a href="https://instagram.com/joaao_alvees" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
<a href = "mailto:contato@joao.alves1032003@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
<a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-alves-pereira-bb0052216/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>

</div>
