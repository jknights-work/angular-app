# Narratones

This project is the Angular 2 Application, which incorporates the same priniciples as Eventr Back. This application uses DWR to connect with the Java Backend.
The project is described as below: 

# Models

   - Objects used to represent Data, extending Common Model

# Controllers (Components)

   - Objects consisting of Logic

# Common Entities

   - Common Entities which are used app wide (Common Datasource, Model, Component) - These are 'wrapper' classes and are 'private', implementation of these have been done within components/models etc that extend the functionality they are implementing

# Handlers

   - Objects which handle a certain type of event for a certain type of entity.  

# Datasource

   - Object which describes the connectivity and interaction with the backend service. Portal is the implementation of Datasource for this particular application. 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-beta.31.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
