
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { VIEWPOINTS } from '../constants';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-64 w-full overflow-hidden">
        <img 
          src="https://picsum.photos/seed/kondaveedu/800/600" 
          alt="Kondaveedu Fort Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">Historical Landmark</span>
          <h1 className="text-white text-3xl font-bold leading-tight">Relive the Glory of Kondaveedu Fort</h1>
          <p className="text-gray-200 text-sm mt-2 line-clamp-2">Journey back to the 14th century and explore the architectural marvel of the Reddy Kings.</p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="px-6 py-6 flex justify-between">
        <div className="text-center">
          <div className="text-amber-600 font-bold text-xl">14th C</div>
          <div className="text-gray-500 text-[10px] uppercase font-semibold">Origin</div>
        </div>
        <div className="h-10 w-[1px] bg-gray-200"></div>
        <div className="text-center">
          <div className="text-amber-600 font-bold text-xl">1700 ft</div>
          <div className="text-gray-500 text-[10px] uppercase font-semibold">Elevation</div>
        </div>
        <div className="h-10 w-[1px] bg-gray-200"></div>
        <div className="text-center">
          <div className="text-amber-600 font-bold text-xl">21+</div>
          <div className="text-gray-500 text-[10px] uppercase font-semibold">Viewpoints</div>
        </div>
      </section>

      {/* Call to Action: Book Tickets */}
      <section className="px-6 mb-8">
        <div className="bg-amber-50 rounded-2xl p-4 flex items-center justify-between border border-amber-100 shadow-sm">
          <div>
            <h3 className="font-bold text-gray-800">Plan Your Visit</h3>
            <p className="text-xs text-gray-600">Avoid the queue, book online.</p>
          </div>
          <button 
            onClick={() => navigate('/tickets')}
            className="bg-amber-600 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-md shadow-amber-200 hover:bg-amber-700 transition-colors"
          >
            Buy Tickets
          </button>
        </div>
      </section>

      {/* Featured Viewpoints Horizontal Scroll */}
      <section className="pl-6 mb-8">
        <div className="flex items-center justify-between pr-6 mb-4">
          <h2 className="text-lg font-bold text-gray-800">Popular Spots</h2>
          <button onClick={() => navigate('/viewpoints')} className="text-amber-600 text-xs font-semibold">View All</button>
        </div>
        <div className="flex overflow-x-auto gap-4 hide-scrollbar pb-2">
          {VIEWPOINTS.map((view) => (
            <div 
              key={view.id} 
              className="flex-shrink-0 w-64 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
              onClick={() => navigate(`/viewpoints/${view.id}`)}
            >
              <img src={view.imageUrl} alt={view.name} className="w-full h-36 object-cover" />
              <div className="p-4">
                <h4 className="font-bold text-gray-800 truncate">{view.name}</h4>
                <div className="flex items-center gap-1 text-gray-500 text-[10px] mt-1">
                  <i className="fa-solid fa-location-dot text-amber-500"></i>
                  <span>{view.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Updates / News */}
      <section className="px-6 mb-8">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Latest Updates</h2>
        <div className="space-y-4">
          <div className="flex gap-4 items-center">
            <div className="w-16 h-16 bg-gray-100 rounded-xl flex-shrink-0 overflow-hidden">
              <img src="https://picsum.photos/seed/news1/100/100" className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-800">New Museum Wing Opens</h4>
              <p className="text-xs text-gray-500 mt-1 line-clamp-2">Explore the recently discovered artifacts from the era of the Reddy kings...</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="w-16 h-16 bg-gray-100 rounded-xl flex-shrink-0 overflow-hidden">
              <img src="https://picsum.photos/seed/news2/100/100" className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-800">New Hill Road Lighting</h4>
              <p className="text-xs text-gray-500 mt-1 line-clamp-2">Visiting hours extended until 7 PM with new eco-friendly road lighting...</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
