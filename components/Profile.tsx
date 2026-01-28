
import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="p-6 animate-fadeIn">
      <div className="flex flex-col items-center mb-8">
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full bg-amber-100 flex items-center justify-center text-3xl text-amber-600 border-4 border-white shadow-md">
            <i className="fa-solid fa-user"></i>
          </div>
          <button className="absolute bottom-0 right-0 w-8 h-8 bg-amber-600 text-white rounded-full border-2 border-white flex items-center justify-center text-xs">
            <i className="fa-solid fa-camera"></i>
          </button>
        </div>
        <h2 className="text-xl font-bold text-gray-900">Guest Explorer</h2>
        <p className="text-gray-500 text-xs">Joined March 2024</p>
      </div>

      <div className="space-y-4">
        <div className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
              <i className="fa-solid fa-receipt"></i>
            </div>
            <span className="font-semibold text-gray-800 text-sm">My Bookings</span>
          </div>
          <i className="fa-solid fa-chevron-right text-gray-300 text-xs"></i>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center">
              <i className="fa-solid fa-heart"></i>
            </div>
            <span className="font-semibold text-gray-800 text-sm">Saved Places</span>
          </div>
          <i className="fa-solid fa-chevron-right text-gray-300 text-xs"></i>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
              <i className="fa-solid fa-gear"></i>
            </div>
            <span className="font-semibold text-gray-800 text-sm">Settings</span>
          </div>
          <i className="fa-solid fa-chevron-right text-gray-300 text-xs"></i>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-50 text-gray-500 rounded-xl flex items-center justify-center">
              <i className="fa-solid fa-circle-question"></i>
            </div>
            <span className="font-semibold text-gray-800 text-sm">Help & Support</span>
          </div>
          <i className="fa-solid fa-chevron-right text-gray-300 text-xs"></i>
        </div>
      </div>

      <button className="w-full mt-10 py-4 text-red-500 font-bold text-sm">
        Log Out
      </button>
    </div>
  );
};

export default Profile;
