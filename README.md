# Demoapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.2 to verify the impact of using shared material modules for the blog post - [Stop using shared material module - Santosh Yadav](https://indepth.dev/stop-using-shared-material-module/)

Based on my analysis: if you only use required material modules in the shared material module, you might not pay the penalty that Santosh is talking about. The problem in his blog is he is comparing a scenaraio where the shared material module is importing unwanted modules.

Based on my analysis, I got **666.09 KB using the shared material module** vs **665.37 KB using material modules directly** in the sub modules.

Todo: Need to check the impact of having too many material modules in one of the app module where other modules only uses few material modules [Hopefully, we should see a big difference in build size]

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
