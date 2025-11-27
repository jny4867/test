// src/App.tsx (혹은 main.tsx)

import React from 'react';
import InsightListPage from './pages/InsightLisePage'

const App: React.FC = () => {
  return (
    <div className="App">
      <InsightListPage />
    </div>
  );
};

export default App;