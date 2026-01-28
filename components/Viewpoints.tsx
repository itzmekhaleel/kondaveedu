
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { VIEWPOINTS } from '../constants';

const Viewpoints: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // If ID is provided, show detail view
  if (id) {
    const viewpoint = VIEWPOINTS.find(v => v.id === id);
    if (!viewpoint) return <div className="p-10 text-center">Viewpoint not found.</div>;

    return (
      <div className="animate-fadeIn">
        <div className="relative h-72">
          <button 
            onClick={() => navigate('/viewpoints')}
            className="absolute top-4 left-4 z-10 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-gray-800 shadow-sm"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <img src={viewpoint.imageUrl} className="w-full h-full object-cover" alt={viewpoint.name} />
        </div>
        
        <div className="p-6 -mt-8 relative bg-white rounded-t-[32px]">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{viewpoint.name}</h1>
              <div className="flex items-center gap-1 text-amber-600 font-medium text-sm mt-1">
                <i className="fa-solid fa-location-dot"></i>
                <span>{viewpoint.location}</span>
              </div>
            </div>
            <button className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-amber-600 hover:bg-amber-50 transition-colors">
              <i className="fa-solid fa-heart text-xl"></i>
            </button>
          </div>

          <div className="flex gap-4 mb-6">
            <div className="bg-amber-50 rounded-xl p-3 flex-1 text-center border border-amber-100">
              <i className="fa-solid fa-person-hiking text-amber-600 mb-1"></i>
              <div className="text-[10px] text-gray-500 uppercase font-bold">Difficulty</div>
              <div className="text-sm font-bold text-gray-800">Moderate</div>
            </div>
            <div className="bg-blue-50 rounded-xl p-3 flex-1 text-center border border-blue-100">
              <i className="fa-solid fa-clock text-blue-600 mb-1"></i>
              <div className="text-[10px] text-gray-500 uppercase font-bold">Time</div>
              <div className="text-sm font-bold text-gray-800">45 Mins</div>
            </div>
            <div className="bg-green-50 rounded-xl p-3 flex-1 text-center border border-green-100">
              <i className="fa-solid fa-camera text-green-600 mb-1"></i>
              <div className="text-[10px] text-gray-500 uppercase font-bold">Photos</div>
              <div className="text-sm font-bold text-gray-800">Scenic</div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-bold text-gray-800 mb-2">About this spot</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{viewpoint.description}</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-4 mb-8">
            <h3 className="font-bold text-gray-800 text-sm mb-2 flex items-center gap-2">
              <i className="fa-solid fa-scroll text-amber-600"></i>
              History Snippet
            </h3>
            <p className="text-gray-600 text-xs italic leading-relaxed border-l-4 border-amber-300 pl-4">
              "{viewpoint.historySnippet}"
            </p>
          </div>

          <button 
            onClick={() => navigate('/tickets')}
            className="w-full bg-amber-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-amber-200 active:scale-95 transition-transform"
          >
            Book Visit for this Spot
          </button>
        </div>
      </div>
    );
  }

  // Full List View
  return (
    <div className="p-6 animate-fadeIn">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Explore Viewpoints</h1>
        <button className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600">
          <i className="fa-solid fa-sliders"></i>
        </button>
      </div>

      <div className="flex gap-2 mb-6 overflow-x-auto hide-scrollbar">
        {['All', 'Scenic', 'Historical', 'Adventure', 'Sacred'].map((cat, idx) => (
          <button 
            key={cat} 
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${idx === 0 ? 'bg-amber-600 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6">
        {VIEWPOINTS.map((view) => (
          <div 
            key={view.id} 
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => navigate(`/viewpoints/${view.id}`)}
          >
            <div className="relative">
              <img src={view.imageUrl} alt={view.name} className="w-full h-48 object-cover" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-[10px] font-bold text-amber-600 shadow-sm flex items-center gap-1">
                <i className="fa-solid fa-star"></i> 4.9
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{view.name}</h3>
                  <div className="flex items-center gap-1 text-gray-500 text-xs mt-1">
                    <i className="fa-solid fa-location-dot text-amber-500"></i>
                    <span>{view.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-amber-600 font-bold">Free</div>
                  <div className="text-[10px] text-gray-400 uppercase">With Ticket</div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3 line-clamp-2">{view.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Viewpoints;
