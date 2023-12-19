# Code Challenge RickyMorty

v.1.0.0 https://cristianabc.github.io/studious-enigma/  
v.2.0.0 In progress implementation NgRx branch ngrx 

## Design Decisions

* Scroll: I have use the host listener and property `window.pageYOffset` for computing in which moment
  load the new information.

* User Search: Using ngModel and validating the length of the input. For improving user experience, we 
  can search using enter key and clicking the button. 

* Unit Test:
  - Character Service: It is important to check that the information we need it is returning from the   server.
  - Character List and Character: It is important to validate that information is rendered properly.
  - Main Component [PENDING]: It is important to spy the services to check the behaviour of the component.

* Styling: I've chose Saas and for the main view i've used a classic css grid. 
* State Management: I'm using the basic component and service approach. Now i'm implementing NGRX.

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
