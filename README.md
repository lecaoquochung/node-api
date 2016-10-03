# NODE API
- [ ] Vendor package with package.json
- [ ] CI Server & Code Coverage
- [ ] Test case
- [ ] Restful API

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

## Promise
### Promise
- pending - The initial state of a promise.
- fulfilled - The state of a promise representing a successful operation.
- rejected - The state of a promise representing a failed operation.

- syntax & point
 - callback aggregation (not only)
 - return values
 - throw exceptions
```
then(fulfilledHandler, errorHandler, progressHandler)
```

```
npm install promise --save
```
- https://www.promisejs.org/
- http://bluebirdjs.com/docs/why-promises.html

### Bluebird

```
npm install bluebird --save
var Promise = require("bluebird");
```

- http://bluebirdjs.com/docs/why-bluebird.html
- http://bluebirdjs.com/docs/install.html
- https://blog.domenic.me/youre-missing-the-point-of-promises/#toc_1

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

- Mocha & blanket for coverage test (!)
 - https://github.com/alex-seville/blanket/blob/master/docs/getting_started_node.md
```
npm install mocha --save
npm install blanket --save

"config": {
  "blanket": {
    "pattern": "/",
     "data-cover-never": [ "node_modules", "tests" ]
  }
}
```

- Coveralls https://coveralls.io/github/lecaoquochung/node-api
 - Node Coveralls https://github.com/nickmerwin/node-coveralls
 - (!)Example travis  https://github.com/lecaoquochung/nodeunit-lcov-coveralls-example
- Circle CI https://circleci.com/gh/lecaoquochung/node-api
- Travis CI https://travis-ci.org/lecaoquochung/node-api
- Mocha & Blanket.js https://github.com/alex-seville/blanket/blob/master/docs/getting_started_node.md

# Test case
## lodash
- Iterating arrays, objects, & strings
- Manipulating & testing values
- Creating composite functions
```
npm i --save lodash
```
- https://lodash.com/

## Mocha
```
npm install --save-dev mocha
```
- All-in-one docs http://mochajs.org/

## chai

## promise

## util

## nodeunit
```
npm install nodeunit --save
```

# Restful API
