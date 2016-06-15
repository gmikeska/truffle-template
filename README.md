# Truffle template

Requires

* pm2
* truffle
* testrpc

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
