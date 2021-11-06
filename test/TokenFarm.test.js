//Import new Tokens
const DappToken = artifacts.require('DappToken')
const DaiToken = artifacts.require('DaiToken')
const TokenFarm = artifacts.require('TokenFarm')


//helps write better tests through out the project
require('chai')
 .use(require('chai-as-promised'))
 .should()

 //write some basic tests
 contract('TokenFarm', (accounts)=> {
     //first thing to do is to create a before hook
     let daiToken
     before(async () => {
        daiToken = await DaiToken.new()

     })

     //write tests here.......
     describe('Mock DAI deployment', async () => {
         it('has a name', async () => {
            const name = await daiToken.name()
            assert.equal(name, 'Mock DAI Token')
         })
     })
 })