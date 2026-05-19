import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronDown, Coffee, Car, Zap, Ticket } from 'lucide-react';

const categoryOptions = [
  { value: 'Food', icon: <Coffee size={18} className="text-gray-700" />, color: 'bg-[#fbe2c2]' },
  { value: 'Transport', icon: <Car size={18} className="text-gray-700" />, color: 'bg-[#b5dca6]' },
  { value: 'Utilities', icon: <Zap size={18} className="text-gray-700" />, color: 'bg-[#f8c2b7]' },
  { value: 'Entertainment', icon: <Ticket size={18} className="text-gray-700" />, color: 'bg-[#e8d5f8]' },
];

function AddTransaction({ onAdd, onBack }) {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('2023-03-08');
  const [paymentType, setPaymentType] = useState('Cash');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedCategoryObj = categoryOptions.find(c => c.value === category) || categoryOptions[0];

  const handleAdd = () => {
    if (!amount || !title || !date) return;
    onAdd({
      title,
      category,
      date,
      amount: parseFloat(amount),
      paymentType,
      description
    });
    onBack();
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-white relative">
      <div className="h-[60px] bg-[#b5dca6] w-full absolute top-0 left-0 rounded-t-[32px]"></div>

      <div className="relative z-10 flex flex-col h-full bg-white mt-[10px] rounded-t-[32px] px-6 pt-6 pb-28 overflow-y-auto scrollbar-hide">
        <div className="flex items-center gap-6 mb-8 mt-2">
          <button onClick={onBack} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50">
            <ChevronLeft size={20} />
          </button>
          <h2 className="text-xl text-[#1a2035] font-medium">Add transaction</h2>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-[#fcfcfc] border border-gray-100 rounded-[20px] p-4">
            <label className="text-[13px] text-gray-500 block mb-1">Amount</label>
            <input
              type="number"
              placeholder="$12.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="text-[20px] text-[#1a2035] font-medium bg-transparent outline-none w-full placeholder-gray-300"
            />
          </div>

          <div className="relative" ref={dropdownRef}>
            <div
              className="bg-[#fcfcfc] border border-gray-100 rounded-[20px] p-4 flex items-center justify-between cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <div>
                <label className="text-[13px] text-gray-500 block mb-2 cursor-pointer">Category</label>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-[12px] ${selectedCategoryObj.color} flex items-center justify-center`}>
                    {selectedCategoryObj.icon}
                  </div>
                  <div className="text-[16px] text-[#1a2035] font-medium bg-transparent outline-none cursor-pointer">
                    {category}
                  </div>
                </div>
              </div>
              <ChevronDown size={20} className={`text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </div>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-[20px] p-2 shadow-lg z-30">
                {categoryOptions.map((opt) => (
                  <div
                    key={opt.value}
                    onClick={() => {
                      setCategory(opt.value);
                      setIsDropdownOpen(false);
                    }}
                    className={`flex items-center gap-3 p-3 rounded-[12px] cursor-pointer transition-colors ${category === opt.value ? 'bg-gray-50' : 'hover:bg-gray-50'}`}
                  >
                    <div className={`w-8 h-8 rounded-[10px] ${opt.color} flex items-center justify-center`}>
                      {React.cloneElement(opt.icon, { size: 16 })}
                    </div>
                    <span className="text-[15px] text-[#1a2035] font-medium">{opt.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-[#fcfcfc] border border-gray-100 rounded-[20px] p-4">
            <label className="text-[13px] text-gray-500 block mb-1">Title</label>
            <input
              type="text"
              placeholder="e.g., Lunch with team"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-[16px] text-[#1a2035] bg-transparent outline-none w-full placeholder-gray-300"
            />
          </div>

          <div className="bg-[#fcfcfc] border border-gray-100 rounded-[20px] p-4">
            <label className="text-[13px] text-gray-500 block mb-1">Description (Optional)</label>
            <input
              type="text"
              placeholder="e.g., Notes about purchase..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="text-[16px] text-[#1a2035] bg-transparent outline-none w-full placeholder-gray-300"
            />
          </div>

          <div className="bg-[#fcfcfc] border border-gray-100 rounded-[20px] p-4">
            <label className="text-[13px] text-gray-500 block mb-1">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="text-[16px] text-[#1a2035] bg-transparent outline-none w-full placeholder-gray-300 cursor-pointer"
            />
          </div>

          <div className="mt-2">
            <h3 className="text-[16px] text-[#1a2035] mb-4">Payment Type</h3>
            <div className="flex flex-col gap-3">
              {['Cash', 'Credit/Debit Card', 'Check'].map((type) => (
                <label key={type} className={`flex items-center gap-3 p-3.5 rounded-[16px] border cursor-pointer transition-colors ${paymentType === type ? 'border-[#b5dca6] bg-white w-[140px]' : 'border-gray-100 bg-white w-[180px]'}`}>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentType === type ? 'border-[#b5dca6]' : 'border-gray-300'}`}>
                    {paymentType === type && <div className="w-2.5 h-2.5 rounded-full bg-[#b5dca6]"></div>}
                  </div>
                  <span className={`text-[14px] ${paymentType === type ? 'text-[#1a2035] font-medium' : 'text-gray-400'}`}>{type}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 bg-white flex justify-between gap-4 z-20 rounded-b-[32px] border-t border-gray-50">
        <button onClick={onBack} className="flex-1 py-4 rounded-[20px] border border-gray-200 text-[#1a2035] font-medium hover:bg-gray-50 transition-colors">
          Draft
        </button>
        <button onClick={handleAdd} className="flex-1 py-4 rounded-[20px] bg-[#b5dca6] text-[#1a2035] font-medium hover:bg-[#a3cc94] transition-colors">
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTransaction;
