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

## Doc

* [Icons](doc/Icons.md)




