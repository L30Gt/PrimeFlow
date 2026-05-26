import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Board from './components/Board';

function App() {
  return (
    <div className="flex w-full min-h-screen">
      <Sidebar />
      <main className="flex-1 min-w-0 flex flex-col overflow-hidden">
        <Header />
        <Board />
      </main>
    </div>
  );
}

export default App;

