// src/App.tsx (혹은 main.tsx)

import React from 'react';
import InsightListPage from './pages/InsightLisePage'
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <InsightListPage />
    </div>
  );
};

export default App;