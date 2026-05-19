import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Home as HomeIcon, ArrowLeftRight, Wallet, User, Plus, Coffee, Coins, Ticket } from 'lucide-react';

const data = [
  { name: 'Groceries', value: 30, color: '#f8c2b7' },
  { name: 'Shopping', value: 20, color: '#a0c49d' },
  { name: 'Transport', value: 15, color: '#b5dca6' },
  { name: 'Food', value: 25, color: '#fbe2c2' },
  { name: 'Entertainment', value: 10, color: '#e8d5f8' },
];

const categoryIcons = {
  'Food': <Coffee size={20} className="text-gray-700" />,
  'Income': <Coins size={20} className="text-gray-700" />,
  'Entertainment': <Ticket size={20} className="text-gray-700" />,
};

const categoryColors = {
  'Food': 'bg-[#fbe2c2]',
  'Income': 'bg-[#e5f0e1]',
  'Entertainment': 'bg-[#e8d5f8]',
};

function Home({ transactions, onNavigate }) {
  return (
    <div className="flex-1 flex flex-col h-full bg-[#fafafa] relative">
      <div className="p-6 pb-28 overflow-y-auto flex-1 scrollbar-hide">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-[22px] text-slate-800 tracking-tight">Hello,</h1>
            <h2 className="text-[28px] font-bold text-[#1a2035] leading-tight">David</h2>
          </div>
          <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center relative">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.37 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.64 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16ZM16 17H8V11C8 8.52 9.51 6.5 12 6.5C14.49 6.5 16 8.52 16 11V17Z" fill="#1a2035"/>
            </svg>
          </button>
        </div>

        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
           <button className="px-5 py-2 rounded-[20px] border border-gray-200 text-sm font-medium whitespace-nowrap hover:bg-gray-50 transition-colors text-slate-800 shadow-sm">All</button>
           <button className="px-5 py-2 rounded-[20px] border border-gray-100 text-sm font-medium whitespace-nowrap hover:bg-gray-50 transition-colors text-gray-500">Daily</button>
           <button className="px-5 py-2 rounded-[20px] border border-gray-100 text-sm font-medium whitespace-nowrap hover:bg-gray-50 transition-colors text-gray-500">Weekly</button>
           <button className="px-5 py-2 rounded-[20px] border border-gray-100 text-sm font-medium whitespace-nowrap hover:bg-gray-50 transition-colors text-gray-500">Monthly</button>
        </div>

        <div className="bg-[#f4f6f3] rounded-[24px] p-5 mb-8 flex items-center justify-between shadow-sm">
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-1.5 h-4 bg-[#b5dca6] rounded-full"></div>
                <span className="text-sm text-gray-500">Income</span>
              </div>
              <div className="text-[26px] font-bold text-[#1a2035]">$8,429</div>
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-1.5 h-4 bg-[#f8c2b7] rounded-full"></div>
                <span className="text-sm text-gray-500">Spent</span>
              </div>
              <div className="text-[26px] font-bold text-[#1a2035]">$3,621</div>
            </div>
          </div>
          <div className="w-[180px] h-[180px] -mr-4">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={35}
                  outerRadius={65}
                  stroke="none"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                  style={{ fontSize: '9px', fill: '#64748b' }}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg text-slate-800">Recent transactions</h3>
          <button className="text-sm text-gray-500 flex items-center gap-1 bg-white px-3 py-1.5 rounded-full border border-gray-100">
            See All <span className="text-lg leading-none">›</span>
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {transactions.map((tx) => (
            <div key={tx.id} className="flex items-center justify-between bg-white p-3.5 rounded-[20px] shadow-sm border border-gray-50">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-[16px] flex items-center justify-center ${categoryColors[tx.category] || 'bg-gray-100'}`}>
                  {categoryIcons[tx.category] || <div className="w-5 h-5 bg-gray-300 rounded-full" />}
                </div>
                <div>
                  <div className="font-medium text-[#1a2035] text-[16px]">{tx.title}</div>
                  <div className="text-[13px] text-gray-400">{tx.paymentType}</div>
                </div>
              </div>
              <div className="text-right">
                <div className={`font-semibold text-[16px] ${tx.amount > 0 ? 'text-[#1a2035]' : 'text-[#1a2035]'}`}>
                  {tx.amount > 0 ? `+` : '-'}${Math.abs(tx.amount)}
                </div>
                <div className="text-[13px] text-gray-400">{tx.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-white flex justify-between items-center px-8 z-10 rounded-b-[32px] shadow-[0_-4px_20px_rgba(0,0,0,0.02)]">
          <div className="flex flex-col items-center gap-1 text-[#b5dca6] cursor-pointer">
            <HomeIcon size={24} strokeWidth={2.5} />
            <span className="text-[11px] font-medium text-gray-500">Home</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-gray-400 cursor-pointer">
            <ArrowLeftRight size={24} />
            <span className="text-[11px] font-medium text-gray-500">Transfer</span>
          </div>

          <button
            onClick={onNavigate}
            className="absolute left-1/2 -top-6 transform -translate-x-1/2 w-14 h-14 bg-[#b5dca6] rounded-full flex items-center justify-center text-[#1a2035] shadow-lg shadow-[#b5dca6]/30 hover:bg-[#a3cc94] transition-colors"
          >
            <Plus size={28} strokeWidth={2.5} />
          </button>

          <div className="flex flex-col items-center gap-1 text-gray-400 cursor-pointer ml-12">
            <Wallet size={24} />
            <span className="text-[11px] font-medium text-gray-500">Wallet</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-gray-400 cursor-pointer">
            <User size={24} />
            <span className="text-[11px] font-medium text-gray-500">Profile</span>
          </div>
      </div>
    </div>
  );
}

export default Home;
