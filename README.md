# Truffle template

## Setup

Meant for ca. Ubuntu style systems. Expects geth to be installed.
* make, git, g++ packages required

**Node JS via nvm**

This allows for easy version changes in node versions. Plus: NO sudo for  -g installs.

* Install nvm - curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash
* Install node -  nvm install v5.0.0
* Use node via nvm - nvm use v5.0.0

**Process Manager**
* Install pm2 process manager - npm install -g pm2

**Ethereum build tools***
* Install solc - npm install -g solc solc-cli
* Install testrpc - npm install -g ethereumjs-testrpc
* install truflle - npm install -g truffle

Provides

Run with

```
npm run
```

* testrpc - starts test rpc and puts it to pm2. S
* test - run tests
* start - start the server
* jshint - basic jshint test
* jscode style checker
* lint - jshint & jscs

```
  "scripts": {
    "testrpc": "pm2 start testrpc",
    "test": "truffle test",
    "start": "pm2 start truffle -- serve"
  },
```

* Start test rpc - npm run testrpc
* deployment of contracts
* running tests
* starting testrpc
* logs everything
