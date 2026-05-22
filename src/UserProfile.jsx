import { useState } from 'react';
import { Heart, MessageCircle, MoreHorizontal, TrendingUp, Users, BookOpen, Bookmark } from 'lucide-react';
import { communityPosts, recipes } from './data';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('Chef');

  return (
    <div className="flex-1 overflow-y-auto pb-24 bg-[#FAFAFA]">
      {/* Profile Header */}
      <div className="bg-white px-5 pt-8 pb-4 rounded-b-[40px] shadow-sm mb-4">
        <div className="flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=200&auto=format&fit=crop"
            alt="Chef Amir"
            className="w-24 h-24 rounded-full object-cover border-4 border-amber-100 shadow-md mb-3"
          />
          <h2 className="text-xl font-bold text-slate-800">Amir's Kitchen</h2>
          <p className="text-sm text-slate-500 mb-4">Mastering the art of Levantine spices.</p>

          {/* Tab Navigation */}
          <div className="flex bg-slate-100 p-1 rounded-2xl w-full">
            {['Chef', 'Blogger', 'Guest'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 text-sm font-medium rounded-xl transition-all ${
                  activeTab === tab
                    ? 'bg-white text-slate-800 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-5">
        {/* Chef State */}
        {activeTab === 'Chef' && (
          <div className="animate-in fade-in duration-300">
            {/* Analytics Dashboard Snippet */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-gradient-to-br from-[#E8A598] to-[#E63946] p-4 rounded-2xl text-white shadow-md shadow-red-200">
                <div className="flex items-center gap-2 mb-2 opacity-90">
                  <TrendingUp size={16} />
                  <span className="text-xs font-medium uppercase tracking-wider">Total Sales</span>
                </div>
                <div className="text-2xl font-bold">$1,240.50</div>
              </div>
              <div className="bg-gradient-to-br from-[#7DAA92] to-[#4A7C59] p-4 rounded-2xl text-white shadow-md shadow-green-200">
                <div className="flex items-center gap-2 mb-2 opacity-90">
                  <BookOpen size={16} />
                  <span className="text-xs font-medium uppercase tracking-wider">Recipe Views</span>
                </div>
                <div className="text-2xl font-bold">8,492</div>
              </div>
            </div>

            <h3 className="font-bold text-slate-800 mb-3">Published Recipes</h3>
            <div className="grid grid-cols-2 gap-3">
              {recipes.slice(0, 2).map((recipe) => (
                <div key={recipe.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
                  <img src={recipe.image} alt={recipe.title} className="w-full h-28 object-cover" />
                  <div className="p-2">
                    <p className="text-xs font-bold text-slate-800 truncate">{recipe.title}</p>
                    <p className="text-[10px] text-slate-500 mt-1">${recipe.price} • {recipe.rating} ★</p>
                  </div>
                </div>
              ))}
              {/* Add New Placeholder */}
              <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center h-[166px] text-slate-400 cursor-pointer hover:bg-slate-100 transition-colors">
                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center mb-2">
                  <span className="text-lg font-bold text-slate-500">+</span>
                </div>
                <span className="text-xs font-medium">New Recipe</span>
              </div>
            </div>
          </div>
        )}

        {/* Blogger State */}
        {activeTab === 'Blogger' && (
          <div className="animate-in fade-in duration-300 space-y-5">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-slate-800">Community Feed</h3>
              <button className="text-xs bg-slate-900 text-white px-3 py-1.5 rounded-lg font-medium flex items-center gap-1">
                <Users size={12} />
                Follow
              </button>
            </div>

            {communityPosts.map(post => (
              <div key={post.id} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2">
                    <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <p className="text-sm font-bold text-slate-800">{post.author.name}</p>
                      <p className="text-xs text-slate-500">2 hours ago</p>
                    </div>
                  </div>
                  <button className="text-slate-400"><MoreHorizontal size={18} /></button>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed mb-3">{post.text}</p>
                {post.image && (
                  <img src={post.image} alt="Post content" className="w-full h-40 object-cover rounded-xl mb-3" />
                )}
                <div className="flex items-center gap-4 text-slate-500 text-sm">
                  <button className="flex items-center gap-1 hover:text-[#E63946] transition-colors">
                    <Heart size={16} /> <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-slate-800 transition-colors">
                    <MessageCircle size={16} /> <span>{post.comments}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Guest State */}
        {activeTab === 'Guest' && (
          <div className="animate-in fade-in duration-300">
             {/* Upgrade Banner */}
             <div className="bg-gradient-to-r from-amber-400 to-orange-400 p-5 rounded-2xl text-white mb-6 shadow-md shadow-amber-200 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-bold text-lg mb-1">Join the Kitchen</h3>
                <p className="text-sm opacity-90 mb-4">Create an account to sell your recipes and post to the community.</p>
                <button className="bg-white text-orange-500 font-bold text-sm px-5 py-2 rounded-xl shadow-sm hover:bg-orange-50 transition-colors">
                  Sign Up Now
                </button>
              </div>
              <div className="absolute -bottom-10 -right-10 opacity-20">
                <Users size={120} />
              </div>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <Bookmark className="text-amber-500" size={20} />
              <h3 className="font-bold text-slate-800">Saved Recipes</h3>
            </div>

            <div className="space-y-3">
              {recipes.slice(1).map(recipe => (
                <div key={`saved-${recipe.id}`} className="flex gap-3 bg-white p-2 rounded-xl shadow-sm border border-slate-100 items-center">
                  <img src={recipe.image} alt={recipe.title} className="w-16 h-16 rounded-lg object-cover" />
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-slate-800 line-clamp-1">{recipe.title}</h4>
                    <p className="text-xs text-slate-500 mt-1">By {recipe.creator.name}</p>
                  </div>
                  <button className="p-2 text-slate-300 hover:text-red-500 transition-colors">
                    <Heart size={18} className="fill-current text-red-500" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
