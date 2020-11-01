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
