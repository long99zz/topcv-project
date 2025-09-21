"use client";

import React, { useState } from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import Sidebar from '@/components/dashboard/Sidebar';

const SettingsPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');

  // Form states
  const [profile, setProfile] = useState({
    fullName: 'Nguyễn Văn An',
    email: 'nguyenvanan@email.com',
    phone: '0123456789',
    address: 'Hà Nội, Việt Nam',
    jobTitle: 'Frontend Developer',
    experience: '3 năm',
    skills: 'React, TypeScript, Node.js'
  });

  const [notifications, setNotifications] = useState({
    emailJob: true,
    emailNews: false,
    smsJob: true,
    pushJob: true,
    pushNews: false
  });

  const [privacy, setPrivacy] = useState({
    profilePublic: true,
    showEmail: false,
    showPhone: false,
    allowMessages: true,
    allowCalls: false
  });

  const tabs = [
    { id: 'profile', label: 'Thông tin cá nhân', icon: '👤' },
    { id: 'security', label: 'Bảo mật', icon: '🔒' },
    { id: 'notifications', label: 'Thông báo', icon: '🔔' },
    { id: 'privacy', label: 'Quyền riêng tư', icon: '🛡️' },
    { id: 'preferences', label: 'Tùy chọn', icon: '⚙️' }
  ];

  const handleProfileChange = (field: string, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleNotificationChange = (field: string, value: boolean) => {
    setNotifications(prev => ({ ...prev, [field]: value }));
  };

  const handlePrivacyChange = (field: string, value: boolean) => {
    setPrivacy(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <DashboardHeader 
        onMenuClick={() => setSidebarOpen(!sidebarOpen)} 
        onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      
      <div className="flex">
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)}
          isCollapsed={sidebarCollapsed}
        />
        
        <main className={`flex-1 transition-all duration-300 ${
          sidebarCollapsed ? 'lg:ml-16' : 'lg:ml-64'
        }`}>
          <div className="px-4 py-4">
            <div className="max-w-7xl mx-auto">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Cài đặt tài khoản</h1>
                <p className="text-gray-600 mt-2">Quản lý thông tin cá nhân và tùy chọn tài khoản</p>
              </div>

              <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar Menu */}
                <div className="lg:w-64">
                  <nav className="space-y-2">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                          activeTab === tab.id
                            ? 'bg-green-100 text-green-700 border border-green-200'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <span className="text-lg">{tab.icon}</span>
                        <span className="font-medium">{tab.label}</span>
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Content Area */}
                <div className="flex-1">
                  <div className="bg-white rounded-lg shadow">
                    {/* Profile Tab */}
                    {activeTab === 'profile' && (
                      <div className="p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">Thông tin cá nhân</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Họ và tên</label>
                            <input
                              type="text"
                              value={profile.fullName}
                              onChange={(e) => handleProfileChange('fullName', e.target.value)}
                              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input
                              type="email"
                              value={profile.email}
                              onChange={(e) => handleProfileChange('email', e.target.value)}
                              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Số điện thoại</label>
                            <input
                              type="tel"
                              value={profile.phone}
                              onChange={(e) => handleProfileChange('phone', e.target.value)}
                              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Địa chỉ</label>
                            <input
                              type="text"
                              value={profile.address}
                              onChange={(e) => handleProfileChange('address', e.target.value)}
                              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Vị trí công việc</label>
                            <input
                              type="text"
                              value={profile.jobTitle}
                              onChange={(e) => handleProfileChange('jobTitle', e.target.value)}
                              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Kinh nghiệm</label>
                            <select
                              value={profile.experience}
                              onChange={(e) => handleProfileChange('experience', e.target.value)}
                              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            >
                              <option value="Chưa có kinh nghiệm">Chưa có kinh nghiệm</option>
                              <option value="Dưới 1 năm">Dưới 1 năm</option>
                              <option value="1-3 năm">1-3 năm</option>
                              <option value="3-5 năm">3-5 năm</option>
                              <option value="5-10 năm">5-10 năm</option>
                              <option value="Trên 10 năm">Trên 10 năm</option>
                            </select>
                          </div>
                        </div>

                        <div className="mt-6">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Kỹ năng</label>
                          <textarea
                            value={profile.skills}
                            onChange={(e) => handleProfileChange('skills', e.target.value)}
                            rows={3}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="Nhập các kỹ năng của bạn, phân tách bằng dấu phẩy"
                          />
                        </div>

                        <div className="mt-6 flex justify-end">
                          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                            Lưu thay đổi
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Security Tab */}
                    {activeTab === 'security' && (
                      <div className="p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">Bảo mật tài khoản</h2>
                        
                        <div className="space-y-6">
                          <div className="border border-gray-200 rounded-lg p-4">
                            <h3 className="text-lg font-medium text-gray-900 mb-2">Đổi mật khẩu</h3>
                            <p className="text-gray-600 mb-4">Cập nhật mật khẩu để bảo vệ tài khoản</p>
                            
                            <div className="space-y-4">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Mật khẩu hiện tại</label>
                                <input
                                  type="password"
                                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Mật khẩu mới</label>
                                <input
                                  type="password"
                                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Xác nhận mật khẩu mới</label>
                                <input
                                  type="password"
                                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                              </div>
                            </div>
                            
                            <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                              Cập nhật mật khẩu
                            </button>
                          </div>

                          <div className="border border-gray-200 rounded-lg p-4">
                            <h3 className="text-lg font-medium text-gray-900 mb-2">Xác thực hai yếu tố (2FA)</h3>
                            <p className="text-gray-600 mb-4">Tăng cường bảo mật bằng xác thực hai yếu tố</p>
                            
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium text-gray-900">Trạng thái: <span className="text-red-600">Chưa kích hoạt</span></p>
                                <p className="text-gray-600 text-sm">Bảo vệ tài khoản với lớp bảo mật bổ sung</p>
                              </div>
                              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                                Kích hoạt 2FA
                              </button>
                            </div>
                          </div>

                          <div className="border border-gray-200 rounded-lg p-4">
                            <h3 className="text-lg font-medium text-gray-900 mb-2">Phiên đăng nhập</h3>
                            <p className="text-gray-600 mb-4">Quản lý các thiết bị đã đăng nhập</p>
                            
                            <div className="space-y-3">
                              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div>
                                  <p className="font-medium text-gray-900">Windows PC - Chrome</p>
                                  <p className="text-gray-600 text-sm">Hà Nội, Việt Nam • Hoạt động hiện tại</p>
                                </div>
                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Hiện tại</span>
                              </div>
                              
                              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div>
                                  <p className="font-medium text-gray-900">iPhone - Safari</p>
                                  <p className="text-gray-600 text-sm">Hà Nội, Việt Nam • 2 giờ trước</p>
                                </div>
                                <button className="text-red-600 hover:text-red-700 text-sm font-medium">Đăng xuất</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Notifications Tab */}
                    {activeTab === 'notifications' && (
                      <div className="p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">Cài đặt thông báo</h2>
                        
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Email</h3>
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="font-medium text-gray-900">Thông báo việc làm</p>
                                  <p className="text-gray-600 text-sm">Nhận email về cơ hội việc làm phù hợp</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                  <input
                                    type="checkbox"
                                    checked={notifications.emailJob}
                                    onChange={(e) => handleNotificationChange('emailJob', e.target.checked)}
                                    className="sr-only peer"
                                  />
                                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                                </label>
                              </div>
                              
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="font-medium text-gray-900">Tin tức và cập nhật</p>
                                  <p className="text-gray-600 text-sm">Nhận thông tin về tính năng mới và tin tức</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                  <input
                                    type="checkbox"
                                    checked={notifications.emailNews}
                                    onChange={(e) => handleNotificationChange('emailNews', e.target.checked)}
                                    className="sr-only peer"
                                  />
                                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                                </label>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-4">SMS</h3>
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="font-medium text-gray-900">Thông báo việc làm khẩn cấp</p>
                                  <p className="text-gray-600 text-sm">SMS cho việc làm khớp 100% với yêu cầu</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                  <input
                                    type="checkbox"
                                    checked={notifications.smsJob}
                                    onChange={(e) => handleNotificationChange('smsJob', e.target.checked)}
                                    className="sr-only peer"
                                  />
                                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                                </label>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Push Notification</h3>
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="font-medium text-gray-900">Việc làm mới</p>
                                  <p className="text-gray-600 text-sm">Thông báo ngay khi có việc làm phù hợp</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                  <input
                                    type="checkbox"
                                    checked={notifications.pushJob}
                                    onChange={(e) => handleNotificationChange('pushJob', e.target.checked)}
                                    className="sr-only peer"
                                  />
                                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                                </label>
                              </div>
                              
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="font-medium text-gray-900">Tin tức</p>
                                  <p className="text-gray-600 text-sm">Thông báo về tin tức và cập nhật</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                  <input
                                    type="checkbox"
                                    checked={notifications.pushNews}
                                    onChange={(e) => handleNotificationChange('pushNews', e.target.checked)}
                                    className="sr-only peer"
                                  />
                                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 flex justify-end">
                          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                            Lưu cài đặt
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Privacy Tab */}
                    {activeTab === 'privacy' && (
                      <div className="p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">Quyền riêng tư</h2>
                        
                        <div className="space-y-6">
                          <div className="border border-gray-200 rounded-lg p-4">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Hiển thị hồ sơ</h3>
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="font-medium text-gray-900">Hồ sơ công khai</p>
                                  <p className="text-gray-600 text-sm">Cho phép nhà tuyển dụng tìm thấy hồ sơ của bạn</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                  <input
                                    type="checkbox"
                                    checked={privacy.profilePublic}
                                    onChange={(e) => handlePrivacyChange('profilePublic', e.target.checked)}
                                    className="sr-only peer"
                                  />
                                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                                </label>
                              </div>
                              
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="font-medium text-gray-900">Hiển thị email</p>
                                  <p className="text-gray-600 text-sm">Cho phép nhà tuyển dụng xem email của bạn</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                  <input
                                    type="checkbox"
                                    checked={privacy.showEmail}
                                    onChange={(e) => handlePrivacyChange('showEmail', e.target.checked)}
                                    className="sr-only peer"
                                  />
                                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                                </label>
                              </div>
                              
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="font-medium text-gray-900">Hiển thị số điện thoại</p>
                                  <p className="text-gray-600 text-sm">Cho phép nhà tuyển dụng xem số điện thoại</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                  <input
                                    type="checkbox"
                                    checked={privacy.showPhone}
                                    onChange={(e) => handlePrivacyChange('showPhone', e.target.checked)}
                                    className="sr-only peer"
                                  />
                                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="border border-gray-200 rounded-lg p-4">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Liên hệ</h3>
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="font-medium text-gray-900">Cho phép nhắn tin</p>
                                  <p className="text-gray-600 text-sm">Nhà tuyển dụng có thể gửi tin nhắn cho bạn</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                  <input
                                    type="checkbox"
                                    checked={privacy.allowMessages}
                                    onChange={(e) => handlePrivacyChange('allowMessages', e.target.checked)}
                                    className="sr-only peer"
                                  />
                                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                                </label>
                              </div>
                              
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="font-medium text-gray-900">Cho phép gọi điện</p>
                                  <p className="text-gray-600 text-sm">Nhà tuyển dụng có thể gọi điện cho bạn</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                  <input
                                    type="checkbox"
                                    checked={privacy.allowCalls}
                                    onChange={(e) => handlePrivacyChange('allowCalls', e.target.checked)}
                                    className="sr-only peer"
                                  />
                                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 flex justify-end">
                          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                            Lưu cài đặt
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Preferences Tab */}
                    {activeTab === 'preferences' && (
                      <div className="p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">Tùy chọn hệ thống</h2>
                        
                        <div className="space-y-6">
                          <div className="border border-gray-200 rounded-lg p-4">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Giao diện</h3>
                            <div className="space-y-4">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Ngôn ngữ</label>
                                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent">
                                  <option value="vi">Tiếng Việt</option>
                                  <option value="en">English</option>
                                </select>
                              </div>
                              
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Múi giờ</label>
                                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent">
                                  <option value="Asia/Ho_Chi_Minh">GMT+7 (Việt Nam)</option>
                                  <option value="Asia/Bangkok">GMT+7 (Bangkok)</option>
                                  <option value="Asia/Singapore">GMT+8 (Singapore)</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className="border border-gray-200 rounded-lg p-4">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Tự động hóa</h3>
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="font-medium text-gray-900">Tự động ứng tuyển</p>
                                  <p className="text-gray-600 text-sm">Tự động ứng tuyển vào các công việc phù hợp</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                  <input type="checkbox" className="sr-only peer" />
                                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                                </label>
                              </div>
                              
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="font-medium text-gray-900">Tự động cập nhật CV</p>
                                  <p className="text-gray-600 text-sm">Tự động cập nhật CV khi có thông tin mới</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                  <input type="checkbox" defaultChecked className="sr-only peer" />
                                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="border border-red-200 rounded-lg p-4">
                            <h3 className="text-lg font-medium text-red-900 mb-4">Vùng nguy hiểm</h3>
                            <div className="space-y-4">
                              <div>
                                <p className="font-medium text-red-900">Xóa tài khoản</p>
                                <p className="text-red-600 text-sm mb-3">Xóa vĩnh viễn tài khoản và tất cả dữ liệu liên quan</p>
                                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                                  Xóa tài khoản
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 flex justify-end">
                          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                            Lưu cài đặt
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SettingsPage;