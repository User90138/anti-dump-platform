import React from 'react';
import { useWallet } from '../hooks/useWallet';

const Header = () => {
  const { account } = useWallet();

  return (
    <header style={{ padding: '10px', background: '#f8f9fa', display: 'flex', justifyContent: 'space-between' }}>
      <h1>Anti-Dump Platform</h1>
      <div>
        {account ? (
          <span>Подключен: {account.slice(0, 6)}...{account.slice(-4)}</span>
        ) : (
          <span>Кошелёк не подключен</span>
        )}
        {/* TODO: Добавить кнопку для подключения/отключения кошелька */}
      </div>
    </header>
  );
};

export default Header;
