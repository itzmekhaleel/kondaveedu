
import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Hide specific header elements on the main LandingPage for a more immersive look
  const isLanding = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen w-full md:max-w-md mx-auto bg-white shadow-xl relative overflow-x-hidden">
      {/* Mobile-Style Header */}
      {!isLanding && (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 p-4 animate-slideDown">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
              <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center text-white font-bold shadow-md shadow-amber-200">
                K
              </div>
              <span className="font-bold text-lg tracking-tight text-gray-800">KONDAVEEDU</span>
            </div>
            <div className="flex items-center gap-4 text-gray-500">
              <button className="p-1 hover:text-amber-600 transition-colors">
                <i className="fa-solid fa-bell"></i>
              </button>
              <button className="p-1 hover:text-amber-600 transition-colors" onClick={() => navigate('/profile')}>
                <i className="fa-solid fa-circle-user"></i>
              </button>
            </div>
          </div>

          <div className="relative">
            <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
            <input
              type="text"
              placeholder="Search viewpoints, stories..."
              className="w-full bg-gray-100 border-none rounded-full py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-amber-500 transition-all outline-none"
            />
          </div>
        </header>
      )}

      {/* Main Content Area */}
      <main className={`flex-1 ${isLanding ? '' : 'pb-24'}`}>
        {children}
      </main>

      {/* Mobile-Style Bottom Navigation */}
      <footer className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full md:max-w-md bg-white/95 backdrop-blur-md border-t border-gray-100 px-6 py-3 z-50 shadow-[0_-8px_30px_rgba(0,0,0,0.08)]">
        <nav className="flex items-center justify-between">
          <NavLink
            to="/dashboard"
            className={({ isActive }) => `flex flex-col items-center gap-1 transition-all duration-300 ${isActive ? 'text-amber-600 scale-110' : 'text-gray-400'}`}
          >
            <i className="fa-solid fa-house text-xl"></i>
            <span className="text-[10px] font-bold">Home</span>
          </NavLink>

          <NavLink
            to="/viewpoints"
            className={({ isActive }) => `flex flex-col items-center gap-1 transition-all duration-300 ${isActive ? 'text-amber-600 scale-110' : 'text-gray-400'}`}
          >
            <i className="fa-solid fa-mountain-sun text-xl"></i>
            <span className="text-[10px] font-bold">Explore</span>
          </NavLink>

          {/* Use function-as-child to access isActive state for nested div styles */}
          <NavLink
            to="/tickets"
            className={({ isActive }) => `flex flex-col items-center gap-1 transition-all duration-300 ${isActive ? 'text-amber-600 scale-110' : 'text-gray-400'}`}
          >
            {({ isActive }) => (
              <React.Fragment>
                <div className={`p-4 rounded-2xl -mt-10 border-4 border-white shadow-xl transition-all duration-500 ${isActive ? 'bg-amber-600 text-white rotate-[360deg]' : 'bg-slate-800 text-white'}`}>
                  <i className="fa-solid fa-ticket"></i>
                </div>
                <span className="text-[10px] font-bold mt-1">Book</span>
              </React.Fragment>
            )}
          </NavLink>

          <NavLink
            to="/history"
            className={({ isActive }) => `flex flex-col items-center gap-1 transition-all duration-300 ${isActive ? 'text-amber-600 scale-110' : 'text-gray-400'}`}
          >
            <i className="fa-solid fa-landmark text-xl"></i>
            <span className="text-[10px] font-bold">History</span>
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) => `flex flex-col items-center gap-1 transition-all duration-300 ${isActive ? 'text-amber-600 scale-110' : 'text-gray-400'}`}
          >
            <i className="fa-solid fa-user text-xl"></i>
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-bold">Profile</span>
              <span className="text-[8px] text-gray-300 absolute -bottom-2">v2.1</span>
            </div>
          </NavLink>
        </nav>
      </footer>
    </div>
  );
};

export default Layout;
