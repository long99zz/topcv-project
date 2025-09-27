import React from 'react';
import Link from 'next/link';
import { 
  Menu, 
  Bell, 
  ShoppingCart, 
  ChevronDown, 
  ClipboardList, 
  Search, 
  MessageSquare, 
  BarChart3 
} from 'lucide-react';

interface DashboardHeaderProps {
  onMenuClick: () => void;
  onToggleSidebar: () => void;
}

const DashboardHeader = ({ onMenuClick, onToggleSidebar }: DashboardHeaderProps) => {
  return (
    <header className="bg-slate-700 text-white sticky top-0 z-40 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Menu and Logo */}
          <div className="flex items-center">
            {/* Desktop sidebar toggle button */}
            <button
              onClick={onToggleSidebar}
              className="hidden lg:flex px-3 py-2.5 rounded-md text-white hover:bg-slate-600 mr-4"
            >
              <Menu className="h-5 w-5" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={onMenuClick}
              className="p-2 rounded-md text-white hover:bg-slate-600 lg:hidden"
            >
              <Menu className="h-6 w-6" />
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
              <ClipboardList className="h-4 w-4" />
              <span>Đăng tin</span>
            </button>
            
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
              <Search className="h-4 w-4" />
              <span>Tìm CV</span>
            </button>
            
            <button className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition-colors">
              <MessageSquare className="h-4 w-4" />
              <span>Connect</span>
            </button>
            
            <button className="flex items-center space-x-2 bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-700 transition-colors">
              <BarChart3 className="h-4 w-4" />
              <span>Insights</span>
            </button>
          </div>

          {/* Right side - Notifications and User */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="relative p-2 text-white hover:bg-slate-600 rounded-md transition-colors">
              <Bell className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
                1
              </span>
            </button>

            {/* Shopping Cart */}
            <button className="relative p-2 text-white hover:bg-slate-600 rounded-md transition-colors">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
                0
              </span>
            </button>

            {/* User Profile */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-slate-500 flex items-center justify-center">
                <span className="text-white text-sm font-medium">H</span>
              </div>
              <button className="text-white hover:bg-slate-600 p-1 rounded">
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;