const { default: Web3 } = require('web3')

//Import new Tokens
const DappToken = artifacts.require('DappToken')
const DaiToken = artifacts.require('DaiToken')
const TokenFarm = artifacts.require('TokenFarm')


//helps write better tests through out the project
require('chai')
 .use(require('chai-as-promised'))
 .should()

 function tokens(n) {
     return web3.utils.toWei(n, 'ether');
 }

 //write some basic tests
 contract('TokenFarm', ([owner, investor])=> {
     //first thing to do is to create a before hook
     let daiToken, dappToken, tokenFarm
     before(async () => {
         //Loads contracts
        daiToken = await DaiToken.new()
        dappToken = await DappToken.new()
        tokenFarm = await TokenFarm.new(dappToken.address, daiToken.address)

        //Transfer all Dapp tokens to farm (1 million)
        await dappToken.transfer(tokenFarm.address, tokens('1000000'))

        //Send tokens to investor
        await daiToken.transfer(investor, tokens('100'), {from: owner})

     
    
    })

     //write tests here.......
     describe('Mock DAI deployment', async () => {
         it('has a name', async () => {
            const name = await daiToken.name()
            assert.equal(name, 'Mock DAI Token')
         })
     })

     describe('Dapp Token deployment', async () => {
        it('has a name', async () => {
           const name = await dappToken.name()
           assert.equal(name, 'DApp Token')
        })
    })

    describe('Token Farm deployment', async () => {
        it('has a name', async () => {
           const name = await tokenFarm.name()
           assert.equal(name, 'DApp Token Farm')
        })
        it('contract has tokens', async () => {
            let balance = await dappToken.balanceOf(tokenFarm.address)
            assert.equal(balance.toString, tokens('1000000'))
         })
    })
 })