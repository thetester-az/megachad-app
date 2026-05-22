import { useState } from 'react';
import RecipeMarket from './RecipeMarket';
import UserProfile from './UserProfile';
import FoodDelivery from './FoodDelivery';
import IngredientsMarket from './IngredientsMarket';
import { Compass, User, ShoppingBag, ShoppingCart } from 'lucide-react';

function App() {
  const [currentScreen, setCurrentScreen] = useState('recipes'); // recipes, profile, delivery, market

  const renderScreen = () => {
    switch (currentScreen) {
      case 'recipes':
        return <RecipeMarket />;
      case 'profile':
        return <UserProfile />;
      case 'delivery':
        return <FoodDelivery />;
      case 'market':
        return <IngredientsMarket />;
      default:
        return <RecipeMarket />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center p-4 font-sans text-slate-800">
      <div className="w-[375px] bg-white rounded-[40px] shadow-2xl overflow-hidden relative h-[812px] flex flex-col border-[8px] border-slate-900 ring-1 ring-gray-200">

        {/* Status Bar Mockup */}
        <div className="h-12 w-full bg-transparent absolute top-0 z-50 flex justify-between items-center px-6 pointer-events-none">
          <span className="text-xs font-bold text-slate-800">9:41</span>
          <div className="flex gap-1.5">
            <div className="w-4 h-3 bg-slate-800 rounded-sm"></div>
            <div className="w-4 h-3 bg-slate-800 rounded-sm"></div>
            <div className="w-6 h-3 bg-slate-800 rounded-sm"></div>
          </div>
        </div>

        {/* Dynamic Screen Content */}
        <div className="flex-1 mt-10 overflow-hidden flex flex-col relative z-10">
          {renderScreen()}
        </div>

        {/* Bottom Sticky Navigation */}
        <div className="absolute bottom-0 w-full bg-white/90 backdrop-blur-md border-t border-slate-100 px-6 py-4 pb-8 z-50 rounded-b-[32px]">
          <div className="flex justify-between items-center">
            <button
              onClick={() => setCurrentScreen('recipes')}
              className={`flex flex-col items-center gap-1 ${currentScreen === 'recipes' ? 'text-[#E63946]' : 'text-slate-400 hover:text-slate-600'}`}
            >
              <Compass size={24} strokeWidth={currentScreen === 'recipes' ? 2.5 : 2} />
              <span className="text-[10px] font-medium">Discover</span>
            </button>

            <button
              onClick={() => setCurrentScreen('delivery')}
              className={`flex flex-col items-center gap-1 ${currentScreen === 'delivery' ? 'text-[#E63946]' : 'text-slate-400 hover:text-slate-600'}`}
            >
              <ShoppingBag size={24} strokeWidth={currentScreen === 'delivery' ? 2.5 : 2} />
              <span className="text-[10px] font-medium">Delivery</span>
            </button>

            <button
              onClick={() => setCurrentScreen('market')}
              className={`flex flex-col items-center gap-1 ${currentScreen === 'market' ? 'text-[#E63946]' : 'text-slate-400 hover:text-slate-600'}`}
            >
              <ShoppingCart size={24} strokeWidth={currentScreen === 'market' ? 2.5 : 2} />
              <span className="text-[10px] font-medium">Market</span>
            </button>

            <button
              onClick={() => setCurrentScreen('profile')}
              className={`flex flex-col items-center gap-1 ${currentScreen === 'profile' ? 'text-[#E63946]' : 'text-slate-400 hover:text-slate-600'}`}
            >
              <User size={24} strokeWidth={currentScreen === 'profile' ? 2.5 : 2} />
              <span className="text-[10px] font-medium">Profile</span>
            </button>
          </div>
          {/* Home Indicator Mockup */}
          <div className="w-1/3 h-1.5 bg-slate-800 rounded-full mx-auto mt-5"></div>
        </div>

      </div>
    </div>
  );
}

export default App;
