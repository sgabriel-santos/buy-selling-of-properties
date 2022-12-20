# Dashboard

## 1. FrontEnd Configuration

### 1.1 Installing project dependencies

- Install [NodeJs](https://nodejs.org/en/)
- Open cmd in the `IHR-SE\dashboard` directory
- Install [Angular CLI](https://github.com/angular/angular-cli) with `npm install -g @angular/cli`
- Install the project dependencies with: `npm i`

```sh
npm install -g @angular/cli
npm i
```

After that, the project is successfully configured

### 1.2 Starting the FrontEnd application

To test correctly:
- Open cmd in the `IHR-SE\dashboard` directory again
- perform this command: `ng serve`
- The server will open on http://localhost:4200/

```sh
ng serve
```

- If the backend is configured correctly, a user has been created in the database. So, to enter the app, use the credentials in the login screen:
```sh
login: admin
password: admin
```

___

## 2. Clarification

This topic is not necessary to start the application, just to understand some technologies used.

## Code scaffolding

Run `ng generate component component-name` to generat4e a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
