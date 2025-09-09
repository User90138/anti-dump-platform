import React, { useState } from 'react';
import Header from '../components/Header';
import StatsPanel from '../components/StatsPanel';
import ClaimForm from '../components/ClaimForm';
import { useWallet } from '../hooks/useWallet';

const Dashboard = () => {
  const { account, signEIP712 } = useWallet();
  const [isCreator, setIsCreator] = useState(false); // TODO: Определить роль через бэкенд
  const [airdropPercent, setAirdropPercent] = useState(70);
  const [lpPercent, setLpPercent] = useState(25);
  const [servicePercent, setServicePercent] = useState(5);
  const [feeCurrency, setFeeCurrency] = useState('USDT');

  const handlePercentChange = (type, value) => {
    const numValue = Number(value);
    if (type === 'airdrop') setAirdropPercent(numValue);
    if (type === 'lp') setLpPercent(numValue);
    if (type === 'service') setServicePercent(numValue);
    // TODO: Проверить, что проценты в сумме равны 100
  };

  const handleSign = async () => {
    try {
      const signature = await signEIP712({
        airdropPercent,
        lpPercent,
        servicePercent,
        feeCurrency,
      });
      // TODO: Отправить настройки кампании на бэкенд
      console.log('Настройки подписаны:', { airdropPercent, lpPercent, servicePercent, feeCurrency });
    } catch (error) {
      console.error('Ошибка подписи:', error);
    }
  };

  return (
    <div>
      <Header />
      {isCreator ? (
        <div style={{ padding: '20px' }}>
          <h2>Панель создателя</h2>
          <div>
            <label>Аирдроп %: </label>
            <input
              type="range"
              min="0"
              max="100"
              value={airdropPercent}
              onChange={(e) => handlePercentChange('airdrop', e.target.value)}
            />
            <input
              type="number"
              value={airdropPercent}
              onChange={(e) => handlePercentChange('airdrop', e.target.value)}
              style={{ width: '60px', marginLeft: '10px' }}
            />
          </div>
          <div>
            <label>Пул ликвидности %: </label>
            <input
              type="range"
              min="0"
              max="100"
              value={lpPercent}
              onChange={(e) => handlePercentChange('lp', e.target.value)}
            />
            <input
              type="number"
              value={lpPercent}
              onChange={(e) => handlePercentChange('lp', e.target.value)}
              style={{ width: '60px', marginLeft: '10px' }}
            />
          </div>
          <div>
            <label>Сервис %: </label>
            <input
              type="range"
              min="0"
              max="100"
              value={servicePercent}
              onChange={(e) => handlePercentChange('service', e.target.value)}
            />
            <input
              type="number"
              value={servicePercent}
              onChange={(e) => handlePercentChange('service', e.target.value)}
              style={{ width: '60px', marginLeft: '10px' }}
            />
          </div>
          <div>
            <label>Валюта комиссии: </label>
            <select value={feeCurrency} onChange={(e) => setFeeCurrency(e.target.value)}>
              <option value="USDT">USDT</option>
              <option value="BNB">BNB</option>
              <option value="USDC">USDC</option>
            </select>
          </div>
          <button onClick={handleSign} style={{ marginTop: '10px' }}>
            Подписать через кошелёк
          </button>
        </div>
      ) : (
        <div style={{ padding: '20px' }}>
          <h2>Панель участника</h2>
          <ClaimForm />
        </div>
      )}
      <StatsPanel isCreator={isCreator} />
    </div>
  );
};

export default Dashboard;
