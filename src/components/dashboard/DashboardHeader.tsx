import React from 'react';
import Link from 'next/link';

interface DashboardHeaderProps {
  onMenuClick: () => void;
  onToggleSidebar: () => void;
}

const DashboardHeader = ({ onMenuClick, onToggleSidebar }: DashboardHeaderProps) => {
  return (
    <header className="bg-slate-700 text-white sticky top-0 z-40">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Menu and Logo */}
          <div className="flex items-center">
            {/* Desktop sidebar toggle button */}
            <button
              onClick={onToggleSidebar}
              className="hidden lg:flex p-2 rounded-md text-white hover:bg-slate-600 mr-4"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={onMenuClick}
              className="p-2 rounded-md text-white hover:bg-slate-600 lg:hidden"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            {/* Logo */}
            <Link href="/dashboard" className="flex items-center ml-4 lg:ml-0">
              <div className="text-white font-bold text-xl">topcv</div>
            </Link>
          </div>

          {/* Center - Navigation Buttons */}
          <div className="hidden md:flex items-center space-x-1">
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span>HR Insider</span>
            </button>
            
            <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-colors">
              <span>📋</span>
              <span>Đăng tin</span>
            </button>
            
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
              <span>🔍</span>
              <span>Tìm CV</span>
            </button>
            
            <button className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition-colors">
              <span>💬</span>
              <span>Connect</span>
            </button>
            
            <button className="flex items-center space-x-2 bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-700 transition-colors">
              <span>📊</span>
              <span>Insights</span>
            </button>
          </div>

          {/* Right side - Notifications and User */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="relative p-2 text-white hover:bg-slate-600 rounded-md">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-3.5-3.5A1.985 1.985 0 0115 14v-1a6 6 0 10-12 0v1c0 .53-.211 1.04-.586 1.414L0 17h5m0 0v1a3 3 0 006 0v-1m-6 0h6" />
              </svg>
              <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                1
              </span>
            </button>

            {/* Shopping Cart */}
            <button className="relative p-2 text-white hover:bg-slate-600 rounded-md">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 2.5M7 13l2.5 2.5m6.5-11h4v4m-4-4l4 4" />
              </svg>
              <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                0
              </span>
            </button>

            {/* User Profile */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-slate-500 flex items-center justify-center">
                <span className="text-white text-sm font-medium">H</span>
              </div>
              <button className="text-white hover:bg-slate-600 p-1 rounded">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;