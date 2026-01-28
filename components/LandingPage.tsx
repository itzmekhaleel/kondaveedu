
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import landImg from '../assets/landimg.jpeg';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate a brief loading state for cinematic effect
    const timer = setTimeout(() => setIsLoaded(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-between py-12 px-8">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={landImg}
          alt="Kondaveedu Fort Background"
          className="w-full h-full object-cover transition-transform duration-[10000ms] scale-110 animate-pulse-slow"
          style={{ animationDuration: '20s' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80"></div>
      </div>

      {/* Top Section */}
      <header className="relative z-10 w-full text-center animate-fadeIn" style={{ animationDelay: '0.2s' }}>
        <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-4">
          <span className="text-amber-400 text-[10px] font-bold uppercase tracking-[0.3em]">Heritage Experience</span>
        </div>
        <h1 className="text-white text-3xl font-black tracking-tight leading-tight">
          Welcome to <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200">
            Kondaveedu Tour
          </span>
        </h1>
      </header>

      {/* Middle Section: Loading/Pulse Symbol */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="relative flex items-center justify-center">
          {/* Pulsing rings */}
          <div className="absolute w-24 h-24 bg-amber-500/20 rounded-full animate-ping"></div>
          <div className="absolute w-16 h-16 bg-amber-500/40 rounded-full animate-pulse"></div>
          {/* Main Loading Icon */}
          <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white shadow-2xl shadow-amber-500/50 relative z-20">
            <i className="fa-solid fa-spinner animate-spin text-xl"></i>
          </div>
        </div>

        {isLoaded && (
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl active:scale-95 transition-all animate-fadeIn"
          >
            Begin Exploration
          </button>
        )}
      </div>

      {/* Bottom Section: Location Info */}
      <footer className="relative z-10 flex flex-col items-center animate-fadeIn" style={{ animationDelay: '0.4s' }}>
        <div className="flex items-center gap-3 bg-black/40 backdrop-blur-lg px-6 py-4 rounded-[24px] border border-white/10 shadow-xl">
          <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white text-sm">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div className="text-left">
            <div className="text-[10px] text-amber-500 font-bold uppercase tracking-wider">Historical Site</div>
            <div className="text-white text-xs font-medium">Kondaveedu Fort, Guntur District</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
