# Angular 6 Example Api Client App
Angular 6 Regres Api example project.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

# Installing 

Rum `npm install` for install npm modules.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Authors:
* **Ebubekir Tabak**

## Ho To Add New Language ?

Example For Arabic.

**1.** Add 'ar.json' file in `assets/i18n`.

**2.** Then add language texts in the JSON file.

```{
    "title":"welcome",
    "email_address":"Email address",
    "enter_email":"Enter email",
    "password":"Password",
    "enter_password":"Enter password",
    "login_text":"Login",
    "edit_user": "Edit User",
    "delete_user": "Delete User",
    "create_user": "Create User",
    "app_name": "Regres App",
    "app_language": "App Language",
    "name": "Name",
    "job": "Job",
    "close": "Close",
    "back": "Back",
    "save": "Save",
    "login": "Login",
    "ok": "Ok",
    "users": "Users",
    "user_type": "User Type",
    "logout": "Logout",
    "login":{
        "title":"Login"
    }
}```


**3.** add the language option to the `language` object in the `app/common/global.ts` file.


```languages : [{value: 'en', text: "English"},
                 {value: 'tr', text: "Türkçe"},
                 **{value: 'ar', text: "Arabic"}**
                 ]```
 



#### Also Look

http://www.ngx-translate.com
