# Truffle template

## Setup


* Install nvm - curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash
* Install node -  nvm install v5.0.0
* Use node via nvm - nvm use v5.0.0
* Install solc - npm install -g solc solc-cli
* Install pm2 process manager - npm install -g pm2
* Install testrpc - npm install -g ethereumjs-testrpc
* install truflle - npm install -g truffle

Provides
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
