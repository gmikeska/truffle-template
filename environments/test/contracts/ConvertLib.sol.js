// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"amount","type":"uint256"},{"name":"conversionRate","type":"uint256"}],"name":"convert","outputs":[{"name":"convertedAmount","type":"uint256"}],"type":"function"}],
    binary: "606060405260358060106000396000f36503050000000050606060405260e060020a600035046396e4ee3d81146024575b6007565b602435600435026060908152602090f3",
    unlinked_binary: "606060405260358060106000396000f36503050000000050606060405260e060020a600035046396e4ee3d81146024575b6007565b602435600435026060908152602090f3",
<<<<<<< HEAD
    address: "0x35381b17459770273d5b50c9278fad38d3913214",
=======
    address: "0x9273bc24c6cdd0fe6a60f87b198fed13689416ec",
>>>>>>> d36a26cf2593a4d0b623d26c90c8e24acf52a6be
    generated_with: "2.0.9",
    contract_name: "ConvertLib"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("ConvertLib error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("ConvertLib error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("ConvertLib error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("ConvertLib error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.ConvertLib = Contract;
  }

})();
