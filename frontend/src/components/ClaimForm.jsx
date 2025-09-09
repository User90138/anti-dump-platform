import React, { useState } from 'react';
import { useWallet } from '../hooks/useWallet';

const ClaimForm = () => {
  const { signEIP712 } = useWallet();
  const [amount, setAmount] = useState('');
  const [receipt, setReceipt] = useState(null);

  const handleClaim = async () => {
    try {
      const signature = await signEIP712({ amount: Number(amount), recipient: '0x...' });
      // TODO: Отправить запрос на бэкенд для обработки заявки
      const response = await fetch('/api/claim', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: Number(amount), signature, chain: 'ethereum' }),
      });
      const result = await response.json();
      setReceipt(result);
      console.log(`Заявка на ${amount} токенов успешна`);
    } catch (error) {
      console.error('Ошибка заявки:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Заявка на токены</h2>
      <input
        type="number"
        placeholder="Введите сумму токенов"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <button onClick={handleClaim}>Заявить</button>
      {receipt && (
        <div>
          <h3>Квитанция</h3>
          <pre>{JSON.stringify(receipt, null, 2)}</pre>
          {/* TODO: Форматировать квитанцию */}
        </div>
      )}
    </div>
  );
};

export default ClaimForm;
