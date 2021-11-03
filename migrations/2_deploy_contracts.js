//Import new Tokens
const DappToken = artifacts.require('DappToken')
const DaiToken = artifacts.require('DaiToken')
const TokenFarm = artifacts.require('TokenFarm')

module.exports = async function(deployer, network, accounts) {
  //First we Deploy the Dai Token
  await deployer.deploy(DaiToken)
  const daiToken = await DaiToken.deployed()

    //Second we Deploy the Dapp Token
    await deployer.deploy(DappToken)
    const dappToken = await DappToken.deployed()

  // We deploy the TokenFarm
  await deployer.deploy(TokenFarm, dappToken.address, daiToken.address)
  const TokenFarm = await TokenFarm.deployed()

  //assign all the DappTokens to the TokenFarm smart contract
  //Transfer all tokens to the tokenfarm (1M)
  await dappToken.transfer(tokenFarm.address, '1000000000000000000000000')

    //Transfer 100 Dai tokens to an investor
    await daiToken.transfer(accounts[1], '1000000000000000000000000')
};
