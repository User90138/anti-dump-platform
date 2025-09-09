// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AdminModule {
    address public admin;
    uint256 public airdropPercent = 70;
    uint256 public lpPercent = 25;
    uint256 public servicePercent = 5;
    address public feeCurrency; // USDT, BNB, USDC
    uint256 public slippage;

    constructor() {
        admin = msg.sender;
    }

    function updateCampaign(
        uint256 _airdropPercent,
        uint256 _lpPercent,
        uint256 _servicePercent,
        address _feeCurrency,
        uint256 _slippage
    ) external {
        require(msg.sender == admin, "Только админ");
        require(_airdropPercent + _lpPercent + _servicePercent == 100, "Неверные проценты");
        airdropPercent = _airdropPercent;
        lpPercent = _lpPercent;
        servicePercent = _servicePercent;
        feeCurrency = _feeCurrency;
        slippage = _slippage;
        emit CampaignUpdated(_airdropPercent, _lpPercent, _servicePercent, _feeCurrency, _slippage);
    }

    event CampaignUpdated(
        uint256 airdropPercent,
        uint256 lpPercent,
        uint256 servicePercent,
        address feeCurrency,
        uint256 slippage
    );
}
