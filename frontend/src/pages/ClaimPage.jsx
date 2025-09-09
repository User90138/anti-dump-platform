import React from 'react';
import Header from '../components/Header';
import ClaimForm from '../components/ClaimForm';

const ClaimPage = () => {
  return (
    <div>
      <Header />
      <div style={{ padding: '20px' }}>
        <h1>Заявка на токены</h1>
        <ClaimForm />
      </div>
    </div>
  );
};

export default ClaimPage;
