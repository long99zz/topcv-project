'use client';

import React, { useState } from 'react';
import { 
  DocumentTextIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  ShareIcon,
  ArrowDownTrayIcon,
  PlusIcon,
  StarIcon,
  ClockIcon,
  ChartBarIcon,
  CheckCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';

interface CV {
  id: string;
  name: string;
  template: string;
  lastModified: Date;
  views: number;
  downloads: number;
  status: 'active' | 'draft' | 'archived';
  score: number;
  isDefault: boolean;
  thumbnail: string;
}

export default function CVManagementPage() {
  const [cvList] = useState<CV[]>([
    {
      id: '1',
      name: 'CV Kỹ sư Phần mềm',
      template: 'Professional Blue',
      lastModified: new Date('2025-09-15'),
      views: 234,
      downloads: 12,
      status: 'active',
      score: 85,
      isDefault: true,
      thumbnail: '/images/cv-template-1.png'
    },
    {
      id: '2',
      name: 'CV Marketing Executive',
      template: 'Creative Green',
      lastModified: new Date('2025-09-10'),
      views: 156,
      downloads: 8,
      status: 'active',
      score: 78,
      isDefault: false,
      thumbnail: '/images/cv-template-2.png'
    },
    {
      id: '3',
      name: 'CV Business Analyst',
      template: 'Modern Gray',
      lastModified: new Date('2025-09-05'),
      views: 89,
      downloads: 3,
      status: 'draft',
      score: 65,
      isDefault: false,
      thumbnail: '/images/cv-template-3.png'
    }
  ]);

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'draft' | 'archived'>('all');

  const filteredCVs = cvList.filter(cv => 
    filterStatus === 'all' ? true : cv.status === filterStatus
  );

  const templates = [
    { name: 'Professional Blue', category: 'Chuyên nghiệp', popularity: 95 },
    { name: 'Creative Green', category: 'Sáng tạo', popularity: 88 },
    { name: 'Modern Gray', category: 'Hiện đại', popularity: 92 },
    { name: 'Executive Black', category: 'Cao cấp', popularity: 85 },
    { name: 'Minimal White', category: 'Tối giản', popularity: 90 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'archived': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return CheckCircleIcon;
      case 'draft': return ClockIcon;
      case 'archived': return XCircleIcon;
      default: return ClockIcon;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">CV đề xuất</h1>
              <p className="text-gray-600 mt-1">Quản lý và tối ưu hóa CV của bạn</p>
            </div>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center">
              <PlusIcon className="h-5 w-5 mr-2" />
              Tạo CV mới
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center">
              <div className="bg-blue-100 rounded-lg p-3 mr-4">
                <DocumentTextIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Tổng CV</p>
                <p className="text-2xl font-bold text-gray-900">{cvList.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center">
              <div className="bg-green-100 rounded-lg p-3 mr-4">
                <EyeIcon className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Lượt xem</p>
                <p className="text-2xl font-bold text-gray-900">
                  {cvList.reduce((total, cv) => total + cv.views, 0)}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center">
              <div className="bg-purple-100 rounded-lg p-3 mr-4">
                <ArrowDownTrayIcon className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Lượt tải</p>
                <p className="text-2xl font-bold text-gray-900">
                  {cvList.reduce((total, cv) => total + cv.downloads, 0)}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center">
              <div className="bg-orange-100 rounded-lg p-3 mr-4">
                <ChartBarIcon className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Điểm TB</p>
                <p className="text-2xl font-bold text-gray-900">
                  {Math.round(cvList.reduce((total, cv) => total + cv.score, 0) / cvList.length)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and View Options */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium text-gray-700">Trạng thái:</label>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value as 'all' | 'active' | 'draft' | 'archived')}
                  className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="all">Tất cả</option>
                  <option value="active">Đang hoạt động</option>
                  <option value="draft">Bản nháp</option>
                  <option value="archived">Đã lưu trữ</option>
                </select>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-green-100 text-green-600' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm6 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V4zm-6 8a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-4zm6 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" clipRule="evenodd" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-green-100 text-green-600' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* CV List */}
        <div className="bg-white rounded-xl shadow-sm border">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold text-gray-900">
              CV của bạn ({filteredCVs.length})
            </h3>
          </div>

          <div className="p-6">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCVs.map((cv) => (
                  <div key={cv.id} className="border rounded-xl p-4 hover:shadow-md transition-shadow relative">
                    {cv.isDefault && (
                      <div className="absolute top-2 right-2 z-10">
                        <div className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                          <StarSolidIcon className="h-3 w-3 mr-1" />
                          Mặc định
                        </div>
                      </div>
                    )}

                    {/* CV Thumbnail */}
                    <div className="aspect-w-3 aspect-h-4 bg-gray-100 rounded-lg mb-4">
                      <div className="flex items-center justify-center h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg">
                        <DocumentTextIcon className="h-16 w-16 text-gray-400" />
                      </div>
                    </div>

                    {/* CV Info */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 line-clamp-1">{cv.name}</h4>
                      <p className="text-sm text-gray-600">{cv.template}</p>
                      
                      {/* Status */}
                      <div className="flex items-center justify-between">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(cv.status)}`}>
                          {React.createElement(getStatusIcon(cv.status), { className: 'h-3 w-3 mr-1' })}
                          {cv.status === 'active' ? 'Đang hoạt động' : 
                           cv.status === 'draft' ? 'Bản nháp' : 'Đã lưu trữ'}
                        </span>
                        <div className="flex items-center text-sm text-gray-600">
                          <StarIcon className="h-4 w-4 mr-1 text-yellow-400" />
                          <span>{cv.score}/100</span>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center">
                          <EyeIcon className="h-4 w-4 mr-1" />
                          <span>{cv.views}</span>
                        </div>
                        <div className="flex items-center">
                          <ArrowDownTrayIcon className="h-4 w-4 mr-1" />
                          <span>{cv.downloads}</span>
                        </div>
                        <span>{cv.lastModified.toLocaleDateString()}</span>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between pt-3 border-t">
                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                            <EyeIcon className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                            <PencilIcon className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                            <ShareIcon className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                            <TrashIcon className="h-4 w-4" />
                          </button>
                        </div>
                        <button className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-700 transition-colors">
                          Tải xuống
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredCVs.map((cv) => (
                  <div key={cv.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-16 bg-gray-100 rounded flex items-center justify-center">
                          <DocumentTextIcon className="h-6 w-6 text-gray-400" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h4 className="font-semibold text-gray-900">{cv.name}</h4>
                            {cv.isDefault && (
                              <StarSolidIcon className="h-4 w-4 text-yellow-500" />
                            )}
                          </div>
                          <p className="text-sm text-gray-600">{cv.template}</p>
                          <div className="flex items-center space-x-4 mt-1">
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(cv.status)}`}>
                              {React.createElement(getStatusIcon(cv.status), { className: 'h-3 w-3 mr-1' })}
                              {cv.status === 'active' ? 'Đang hoạt động' : 
                               cv.status === 'draft' ? 'Bản nháp' : 'Đã lưu trữ'}
                            </span>
                            <span className="text-sm text-gray-600">
                              Cập nhật: {cv.lastModified.toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <p className="text-sm font-medium text-gray-900">{cv.score}/100</p>
                          <p className="text-xs text-gray-600">Điểm</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-medium text-gray-900">{cv.views}</p>
                          <p className="text-xs text-gray-600">Lượt xem</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-medium text-gray-900">{cv.downloads}</p>
                          <p className="text-xs text-gray-600">Lượt tải</p>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                            <EyeIcon className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                            <PencilIcon className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                            <ShareIcon className="h-4 w-4" />
                          </button>
                          <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors">
                            Tải xuống
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Templates Section */}
        <div className="bg-white rounded-xl shadow-sm border">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold text-gray-900">Mẫu CV phổ biến</h3>
            <p className="text-sm text-gray-600 mt-1">Chọn mẫu phù hợp để tạo CV mới</p>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {templates.map((template, index) => (
                <div key={index} className="border rounded-lg p-4 hover:border-green-500 transition-colors cursor-pointer">
                  <div className="aspect-w-3 aspect-h-4 bg-gray-100 rounded mb-3">
                    <div className="flex items-center justify-center h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded">
                      <DocumentTextIcon className="h-8 w-8 text-gray-400" />
                    </div>
                  </div>
                  <h4 className="font-medium text-gray-900 text-sm">{template.name}</h4>
                  <p className="text-xs text-gray-600 mt-1">{template.category}</p>
                  <div className="flex items-center mt-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-1">
                      <div 
                        className="bg-green-500 h-1 rounded-full"
                        style={{ width: `${template.popularity}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-600 ml-2">{template.popularity}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}