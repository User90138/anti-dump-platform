import { useState, useEffect } from 'react';
import Web3 from 'web3';

export const useWallet = () => {
  const [account, setAccount] = useState(null);
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    const connectWallet = async () => {
      if (window.ethereum) {
        try {
          const web3Instance = new Web3(window.ethereum);
          setWeb3(web3Instance);
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          setAccount(accounts[0]);
          // TODO: Добавить обработку смены аккаунта
        } catch (error) {
          console.error('Ошибка подключения кошелька:', error);
        }
      } else {
        console.warn('MetaMask не найден. Добавить поддержку WalletConnect.');
        // TODO: Интегрировать WalletConnect
      }
    };
    connectWallet();
  }, []);

  const signEIP712 = async (data) => {
    if (!web3 || !account) throw new Error('Кошелёк не подключен');
    const domain = {
      name: 'Anti-Dump Platform',
      version: '1',
      chainId: 1, // TODO: Динамически определять chainId
      verifyingContract: '0x0000000000000000000000000000000000000000', // TODO: Указать адрес контракта
    };
    const types = {
      Claim: [
        { name: 'recipient', type: 'address' },
        { name: 'amount', type: 'uint256' },
      ],
      Campaign: [
        { name: 'airdropPercent', type: 'uint256' },
        { name: 'lpPercent', type: 'uint256' },
        { name: 'servicePercent', type: 'uint256' },
        { name: 'feeCurrency', type: 'address' },
      ],
    };
    const message = data.recipient ? { recipient: account, amount: data.amount } : data;
    try {
      const signature = await web3.eth.personal.sign(
        JSON.stringify({ domain, types, message }),
        account
      );
      // TODO: Реализовать полноценную подпись EIP-712
      return signature;
    } catch (error) {
      console.error('Ошибка подписи EIP-712:', error);
      throw error;
    }
  };

  return { account, signEIP712 };
};
import typedData from "../../../shared/typedData/Campaign.json";
import { ethers } from "ethers";

/**
 * provider - ethers provider (window.ethereum -> new ethers.providers.Web3Provider(window.ethereum))
 * campaign - { airdropPercent, lpPercent, servicePercent, feeCurrency }
 * returns { signature, signerAddress }
 */
export async function signCampaign(provider, campaign) {
  const signer = provider.getSigner();

  // Подстройка домена (можно переопределять через env)
  const domain = {
    ...typedData.domain,
    chainId: Number(process.env.REACT_APP_CHAIN_ID || typedData.domain.chainId),
    verifyingContract: process.env.REACT_APP_VERIFYING_CONTRACT || typedData.domain.verifyingContract
  };

  const types = typedData.types;

  const message = {
    airdropPercent: campaign.airdropPercent,
    lpPercent: campaign.lpPercent,
    servicePercent: campaign.servicePercent,
    feeCurrency: campaign.feeCurrency
  };

  const signature = await signer._signTypedData(domain, types, message);
  const signerAddress = await signer.getAddress();

  return { signature, signerAddress, domain, types, message };
}

