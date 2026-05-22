
import { Leaf, Plus, Sprout, MapPin } from 'lucide-react';
import { ingredients } from './data';

const IngredientsMarket = () => {
  return (
    <div className="flex-1 overflow-y-auto pb-24 bg-[#FAFAFA]">
      <div className="p-5">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Market</h2>

        {/* Promotional Banner */}
        <div className="bg-[#4A7C59] rounded-3xl p-5 text-white mb-6 shadow-md shadow-green-200 relative overflow-hidden flex items-center justify-between">
          <div className="relative z-10 max-w-[60%]">
            <div className="flex items-center gap-1.5 text-green-200 mb-1">
              <Sprout size={16} />
              <span className="text-xs font-bold uppercase tracking-wide">Farm to Table</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Fresh from the Farm</h3>
            <p className="text-xs text-green-100 mb-3">Get 20% off organic produce this week.</p>
            <button className="bg-white text-[#4A7C59] text-xs font-bold px-4 py-2 rounded-xl shadow-sm hover:bg-green-50 transition-colors">
              Shop Now
            </button>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-[45%] opacity-90">
             <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=400&auto=format&fit=crop" alt="Fresh produce" className="w-full h-full object-cover rounded-l-full border-l-4 border-[#7DAA92]" />
          </div>
        </div>

        {/* Categories (Quick access) */}
        <div className="flex justify-between mb-6">
          {['Spices', 'Oils', 'Produce', 'Dairy'].map(cat => (
            <div key={cat} className="flex flex-col items-center gap-2 cursor-pointer group">
              <div className="w-14 h-14 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:bg-amber-50 group-hover:border-amber-200 transition-colors">
                <Leaf size={24} className="text-[#7DAA92] group-hover:text-amber-500 transition-colors" />
              </div>
              <span className="text-xs font-medium text-slate-600">{cat}</span>
            </div>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-4">
          {ingredients.map(product => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col h-full relative">
              {product.organic && (
                <div className="absolute top-2 left-2 z-10 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
                  <Leaf size={10} className="text-[#4A7C59] fill-current" />
                  <span className="text-[9px] font-bold text-[#4A7C59] uppercase tracking-wider">Organic</span>
                </div>
              )}

              <div className="h-32 w-full p-2">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <div className="p-3 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-sm text-slate-800 leading-tight mb-1">{product.title}</h4>
                  <div className="flex items-center gap-1 text-slate-500 mb-2">
                    <MapPin size={10} />
                    <span className="text-[10px] truncate">{product.origin}</span>
                  </div>
                  <span className="text-xs text-slate-400 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">{product.options}</span>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <span className="font-bold text-slate-800">${product.price.toFixed(2)}</span>
                  <button className="bg-slate-900 text-white p-1.5 rounded-lg shadow-sm hover:bg-slate-800 transition-colors">
                    <Plus size={16} />
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

export default IngredientsMarket;
