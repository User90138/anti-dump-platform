import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ClaimPage from './pages/ClaimPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/claim" element={<ClaimPage />} />
        {/* TODO: Добавить дополнительные маршруты при необходимости */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
