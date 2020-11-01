# StandaloneFront

**Pitch:** Angular + Bootstrap blueprint, no API requirements.

* Splash screen
* Home page
* Login page
* Auth middleware
* Core/features split

**Requirements:**

```
$ ng --version
Angular CLI: 10.2.0
Node: 12.18.2
OS: linux x64
```

## Getting started

```
npm install
ng serve
```

App available on http://localhost:4200/


## Deploy on s3

```
ng build
aws s3 cp ./dist/standalone-front s3://<bucket>/<project>/<branch> --recursive --acl=public-read
```

-----------

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





