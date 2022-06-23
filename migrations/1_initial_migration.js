const Migrations = artifacts.require("FixedSizeArray");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
