import React, { useState } from 'react';
import Home from './Home';
import AddTransaction from './AddTransaction';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [transactions, setTransactions] = useState([
    { id: 1, title: 'Food', category: 'Food', date: 'Mar 07, 2023', amount: -12.00, paymentType: 'Card' },
    { id: 2, title: 'Salary', category: 'Income', date: 'Mar 07, 2023', amount: 6800.00, paymentType: 'Bank Account' },
    { id: 3, title: 'Entertainment', category: 'Entertainment', date: 'Mar 07, 2023', amount: -8.00, paymentType: 'Card' },
  ]);

  const navigateTo = (screen) => {
    setCurrentScreen(screen);
  };

  const addTransaction = (transaction) => {
    setTransactions([
      { ...transaction, id: Date.now() },
      ...transactions
    ]);
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center p-4 font-sans text-slate-800">
      <div className="w-[375px] bg-[#fafafa] rounded-[40px] shadow-2xl overflow-hidden relative h-[812px] flex flex-col border-[8px] border-white ring-1 ring-gray-200">
        {currentScreen === 'home' && (
          <Home
            transactions={transactions}
            onNavigate={() => navigateTo('add')}
          />
        )}
        {currentScreen === 'add' && (
          <AddTransaction
            onAdd={addTransaction}
            onBack={() => navigateTo('home')}
          />
        )}
      </div>
    </div>
  );
}

export default App;
