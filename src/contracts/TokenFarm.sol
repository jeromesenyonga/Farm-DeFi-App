pragma solidity ^0.8.0;

import "./DappToken.sol";
import "./DaiToken.sol";

contract TokenFarm{
    //All code goes here
    string public name = "Dapp Token Farm"; //state variable
    DappToken public dappToken;
    DaiToken public daiToken;

    constructor(DappToken _dappToken, DaiToken _daiToken){
        dappToken = _dappToken;
        daiToken = _daiToken;
    }
}