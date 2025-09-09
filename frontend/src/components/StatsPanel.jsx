import React, { useEffect, useState } from 'react';

const StatsPanel = ({ isCreator }) => {
  const [stats, setStats] = useState({ totalClaimed: 0, lpSize: 0, fees: 0, history: [] });

  useEffect(() => {
    const fetchStats = async () => {
      // TODO: Получить статистику с бэкенда
      const response = await fetch('/api/stats');
      const data = await response.json();
      setStats(data);
    };
    fetchStats();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>{isCreator ? 'Статистика кампании' : 'Статистика аирдропа'}</h2>
      <p>Всего заявлено: <span>{stats.totalClaimed} токенов</span></p>
      <p>Размер пула ликвидности: <span>{stats.lpSize} токенов</span></p>
      <p>Собранные комиссии: <span>{stats.fees} USDT</span></p>
      {isCreator && (
        <div>
          <h3>История заявок</h3>
          <ul>
            {stats.history.map((claim, index) => (
              <li key={index}>{claim.amount} токенов для {claim.user}</li>
            ))}
            {/* TODO: Добавить пагинацию для истории */}
          </ul>
        </div>
      )}
      {!isCreator && (
        <div>
          <p>Распределение: 70% участнику, 25% в пул ликвидности, 5% сервису</p>
          {/* TODO: Получить предварительный просмотр с /api/preview */}
        </div>
      )}
    </div>
  );
};

export default StatsPanel;
