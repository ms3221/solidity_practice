// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.5.0 <0.9.0;

contract SendEth {
    address public owner;
    event sendEth(address _from, uint256 _value, string message);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "not owner");
        _;
    }

    receive() external payable {
        emit sendEth(msg.sender, msg.value, "send Eth");
    }

    function Deposit(address payable _to) public payable onlyOwner {
        require(msg.value > 0);
        (bool sent, ) = _to.call{value: msg.value}("");
        require(sent, "Failled");
    }

    function withDraw(address[] calldata addressArr, uint256 amount)
        external
        payable
        onlyOwner
    {
        require(
            address(this).balance > addressArr.length * amount,
            "balance < totalAmount"
        );
        for (uint256 i = 0; i < addressArr.length; i++) {
            (bool sent, ) = addressArr[i].call{value: amount}("");
            require(sent, "Failled");
        }
    }
}
