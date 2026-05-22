
import { Search, SlidersHorizontal, Plus, Clock, Users } from 'lucide-react';
import { deliveryMenu } from './data';

const FoodDelivery = () => {
  return (
    <div className="flex-1 overflow-y-auto pb-24 bg-[#FAFAFA]">
      <div className="p-5">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Ready to Eat</h2>

        {/* Search & Filters */}
        <div className="flex gap-3 mb-6">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search homemade meals..."
              className="w-full bg-white rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7DAA92] shadow-sm border border-slate-100 placeholder:text-slate-400"
            />
          </div>
          <button className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 text-slate-600 hover:text-[#7DAA92] hover:bg-slate-50 transition-colors">
            <SlidersHorizontal size={20} />
          </button>
        </div>

        {/* Menu Cards */}
        <div className="space-y-6">
          {deliveryMenu.map(menu => (
            <div key={menu.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group relative">
              <div className="relative h-56 w-full">
                <img
                  src={menu.image}
                  alt={menu.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-bold text-xl text-white mb-1 drop-shadow-md">{menu.title}</h3>
                  <p className="text-sm font-medium text-white/90 drop-shadow-md">{menu.kitchen}</p>
                </div>
              </div>

              <div className="p-4 flex items-center justify-between">
                <div className="flex gap-4">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Users size={16} className="text-[#E8A598]" />
                    <span className="text-xs font-medium">{menu.portion}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Clock size={16} className="text-[#E8A598]" />
                    <span className="text-xs font-medium">{menu.eta}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-bold text-lg text-slate-800">${menu.price}</span>
                  <button className="bg-[#7DAA92] text-white p-2.5 rounded-full shadow-md shadow-green-200 hover:bg-[#4A7C59] transition-colors">
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodDelivery;
