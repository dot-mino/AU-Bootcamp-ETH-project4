// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Winner{
    address private contractWinner = 0xd576B095b5147683ebcEB57CBF75B307Ab8c22F7;

    string private contractABI = '[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"}],"name":"Winner","type":"event"},{"inputs":[],"name":"attempt","outputs":[],"stateMutability":"nonpayable","type":"function"}]';

    constructor() payable {
    }

    function callAttempt() external {
        (bool success, ) = contractWinner.call(abi.encodeWithSignature("attempt()"));
        require(success, "Call Failed");
    }
}