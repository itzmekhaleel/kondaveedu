
import React from 'react';

const History: React.FC = () => {
  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Chronicles of Kondaveedu</h1>
      
      <div className="relative border-l-2 border-amber-200 ml-4 pl-8 space-y-10">
        <div className="relative">
          <div className="absolute -left-[41px] top-0 w-5 h-5 bg-amber-600 rounded-full border-4 border-white shadow-sm"></div>
          <div className="text-amber-600 font-bold text-sm mb-1 uppercase tracking-wider">1323 - 1325 AD</div>
          <h3 className="font-bold text-gray-900 mb-2">Foundation</h3>
          <p className="text-xs text-gray-500 leading-relaxed">The Reddy dynasty, led by Prolaya Vema Reddy, laid the foundation of the hill fortress after the fall of Warangal.</p>
        </div>

        <div className="relative">
          <div className="absolute -left-[41px] top-0 w-5 h-5 bg-amber-400 rounded-full border-4 border-white shadow-sm"></div>
          <div className="text-amber-500 font-bold text-sm mb-1 uppercase tracking-wider">1420 - 1500 AD</div>
          <h3 className="font-bold text-gray-900 mb-2">The Golden Era</h3>
          <p className="text-xs text-gray-500 leading-relaxed">Under the rule of Anavema Reddy, the fort became a major center for literature, arts, and military strength.</p>
        </div>

        <div className="relative">
          <div className="absolute -left-[41px] top-0 w-5 h-5 bg-gray-400 rounded-full border-4 border-white shadow-sm"></div>
          <div className="text-gray-400 font-bold text-sm mb-1 uppercase tracking-wider">1516 AD</div>
          <h3 className="font-bold text-gray-900 mb-2">Vijayanagara Conquest</h3>
          <p className="text-xs text-gray-500 leading-relaxed">The legendary emperor Sri Krishnadevaraya annexed Kondaveedu after a historic siege.</p>
        </div>

        <div className="relative">
          <div className="absolute -left-[41px] top-0 w-5 h-5 bg-gray-300 rounded-full border-4 border-white shadow-sm"></div>
          <div className="text-gray-400 font-bold text-sm mb-1 uppercase tracking-wider">Today</div>
          <h3 className="font-bold text-gray-900 mb-2">Preservation</h3>
          <p className="text-xs text-gray-500 leading-relaxed">Now protected by the Archaeological Survey of India, attracting thousands of history buffs and nature lovers.</p>
        </div>
      </div>

      <div className="mt-12 bg-amber-900 text-white rounded-3xl p-6 overflow-hidden relative">
        <div className="relative z-10">
          <h2 className="text-xl font-bold mb-2">Did You Know?</h2>
          <p className="text-sm opacity-80 leading-relaxed">Kondaveedu Fort was actually a triple-fortified hill complex with two additional concentric walls surrounding the inner citadel.</p>
        </div>
        <i className="fa-solid fa-lightbulb absolute -bottom-4 -right-4 text-white/10 text-8xl"></i>
      </div>
    </div>
  );
};

export default History;
