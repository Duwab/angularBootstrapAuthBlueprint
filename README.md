# StandaloneFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.24.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Deploy on s3

```
ng build
aws s3 cp ./dist/standalone-front s3://<bucket>/<project>/<branch> --recursive --acl=public-read
```

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Icons

### Font awesome 

List : https://fontawesome.com/icons?d=gallery&m=free

Doc : https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use

Free version, use `fas` (solid style) or `fab` (brands style)
```
<i class="fas fa-camera"></i>
```

### Angular Material

List : https://material.io/resources/icons/?style=baseline

Import `MatIconModule` and use `mat-icon` directive :
```
<mat-icon>calendar_today</mat-icon>
```

### Octoicon

List : https://octicons.github.com/

Use directive configured in `theme/directives/octoicon.directive` :
```
<span octicon="gear"></span>
```





