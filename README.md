# NODE API
- [ ] Vendor package with package.json
- [ ] CI Server & Code Coverage

# Vendor package with package.json
## app-module-path
```
npm install app-module-path --save

// root dir app module
require('app-module-path').addPath(__dirname);
```

- https://www.npmjs.com/package/app-module-path

## aws-sdk

## express
- Routing & parameters http://expressjs.com/en/guide/routing.html
- Middleware http://expressjs.com/en/guide/writing-middleware.html
- Error handling http://expressjs.com/en/guide/error-handling.html
- https://github.com/expressjs/express

## child-process
- ?

# CI Server
- .coveralls.yml (!)
```
// service_name: travis-pro
repo_token: VTDxQHXMRLvU1dnEjKCxZtZR7VM2sTJs1
```

- node coveralls node package
```
npm install coveralls --save-dev
```

- Coveralls https://coveralls.io/github/lecaoquochung/node-api
 - Node Coveralls https://github.com/nickmerwin/node-coveralls
- Circle CI https://circleci.com/gh/lecaoquochung/node-api
- Travis CI https://travis-ci.org/lecaoquochung/node-api
