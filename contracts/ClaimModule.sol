// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ClaimModule {
    address public admin;
    address public feeCollector;
    address public lpPool; // Адрес пула ликвидности
    mapping(address => uint256) public claimed;

    constructor(address _feeCollector, address _lpPool) {
        admin = msg.sender;
        feeCollector = _feeCollector;
        lpPool = _lpPool;
    }

    function claimTokens(address recipient, uint256 amount, bytes memory signature) external {
        // TODO: Проверить подпись EIP-712
        require(claimed[recipient] == 0, "Уже заявлено");
        claimed[recipient] = amount;

        uint256 lpAmount = (amount * 25) / 100;
        uint256 feeAmount = (amount * 5) / 100;
        uint256 recipientAmount = amount - lpAmount - feeAmount;

        // TODO: Реализовать перевод токенов (recipientAmount → recipient, lpAmount → lpPool, feeAmount → feeCollector)
        // TODO: Реализовать своп 5% на стейблкоины через DEX
        emit Claimed(recipient, amount, lpAmount, feeAmount);
    }

    event Claimed(address indexed recipient, uint256 totalAmount, uint256 lpAmount, uint256 feeAmount);
}
