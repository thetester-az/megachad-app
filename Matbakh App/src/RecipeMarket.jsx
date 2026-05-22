
import { Sparkles, Star, Unlock } from 'lucide-react';
import { recipes } from './data';

const RecipeMarket = () => {
  const categories = ["All", "Restaurant-Grade", "Fitness", "Traditional", "Quick Meals", "Desserts"];

  return (
    <div className="flex-1 overflow-y-auto pb-24 bg-[#FAFAFA]">
      <div className="p-5">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Discover</h2>

        {/* AI Smart Widget */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-4 shadow-sm border border-amber-100 mb-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-2 -mr-2 text-amber-200/50">
             <Sparkles size={80} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3 text-amber-600 font-semibold">
              <Sparkles size={18} />
              <span>AI Recipe Generator</span>
            </div>
            <input
              type="text"
              placeholder="What ingredients do you have?"
              className="w-full bg-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-inner mb-3 placeholder:text-slate-400"
            />
            <button className="w-full bg-[#E63946] text-white font-medium py-3 rounded-xl shadow-md shadow-red-200 hover:bg-red-600 transition-colors">
              Generate Recipe
            </button>

            {/* Conceptual AI Result Card (Hidden by default, showing a peek) */}
            <div className="mt-4 bg-white/80 backdrop-blur rounded-xl p-3 border border-amber-300 shadow-[0_0_15px_rgba(251,191,36,0.2)] animate-pulse hidden">
              {/* Concept only for now */}
            </div>
          </div>
        </div>

        {/* Category Chips */}
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-hide mb-6">
          {categories.map((cat, index) => (
            <button
              key={cat}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-colors shadow-sm ${
                index === 0
                  ? 'bg-slate-800 text-white'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Recipe Feed */}
        <div className="space-y-5">
          {recipes.map(recipe => (
            <div key={recipe.id} className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100">
              <div className="relative h-48 w-full">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-700 shadow-sm">
                  {recipe.category}
                </div>
              </div>

              <div className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-lg text-slate-800 leading-tight flex-1 pr-3">{recipe.title}</h3>
                  <div className="flex items-center gap-1 bg-amber-50 text-amber-600 px-2 py-1 rounded-lg">
                    <Star size={14} className="fill-current" />
                    <span className="text-xs font-bold">{recipe.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2">
                    <img
                      src={recipe.creator.avatar}
                      alt={recipe.creator.name}
                      className="w-8 h-8 rounded-full border-2 border-white shadow-sm object-cover"
                    />
                    <span className="text-sm font-medium text-slate-600">{recipe.creator.name}</span>
                  </div>

                  <button className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-slate-800 transition-colors shadow-md">
                    <span>${recipe.price}</span>
                    <Unlock size={14} />
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

export default RecipeMarket;
