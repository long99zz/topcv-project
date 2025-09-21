'use client';

import { useState } from 'react';
import { ChartBarIcon, ArrowTrendingUpIcon, BriefcaseIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function InsightsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('30days');

  const marketStats = [
    {
      title: 'Tổng số công việc',
      value: '45,234',
      change: '+12.5%',
      icon: BriefcaseIcon,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Ứng viên mới',
      value: '12,890',
      change: '+8.3%',
      icon: UserGroupIcon,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Mức lương trung bình',
      value: '18.5M',
      change: '+5.2%',
      icon: ArrowTrendingUpIcon,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Tỷ lệ khớp việc',
      value: '67.8%',
      change: '+3.1%',
      icon: ChartBarIcon,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  const topIndustries = [
    { name: 'Công nghệ thông tin', jobs: 8934, growth: '+15.2%' },
    { name: 'Kế toán / Kiểm toán', jobs: 5672, growth: '+8.7%' },
    { name: 'Bán hàng / Kinh doanh', jobs: 4521, growth: '+6.3%' },
    { name: 'Marketing / Truyền thông', jobs: 3890, growth: '+12.1%' },
    { name: 'Nhân sự', jobs: 2356, growth: '+4.8%' },
  ];

  const salaryRanges = [
    { range: 'Dưới 10 triệu', percentage: 35, jobs: 15876 },
    { range: '10-15 triệu', percentage: 28, jobs: 12674 },
    { range: '15-20 triệu', percentage: 18, jobs: 8142 },
    { range: '20-30 triệu', percentage: 12, jobs: 5428 },
    { range: 'Trên 30 triệu', percentage: 7, jobs: 3167 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">TopCV Insights</h1>
              <p className="text-gray-600 mt-1">Phân tích thị trường việc làm</p>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="7days">7 ngày qua</option>
                <option value="30days">30 ngày qua</option>
                <option value="90days">90 ngày qua</option>
                <option value="1year">1 năm qua</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Market Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {marketStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center">
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <div className="flex items-center mt-1">
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <span className="ml-2 text-sm text-green-600 font-medium">{stat.change}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Industries */}
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-900">Ngành nghề hot nhất</h3>
              <p className="text-sm text-gray-600 mt-1">Dựa trên số lượng tin tuyển dụng</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {topIndustries.map((industry, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-900">{industry.name}</span>
                        <span className="text-sm text-green-600 font-medium">{industry.growth}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{industry.jobs.toLocaleString()} việc làm</span>
                        <span className="text-xs text-gray-400">#{index + 1}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Salary Distribution */}
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-900">Phân bố mức lương</h3>
              <p className="text-sm text-gray-600 mt-1">Theo mức lương đề xuất</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {salaryRanges.map((range, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-24 text-sm text-gray-700">{range.range}</div>
                    <div className="flex-1 mx-4">
                      <div className="bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full"
                          style={{ width: `${range.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="w-16 text-sm text-gray-600 text-right">{range.percentage}%</div>
                    <div className="w-20 text-xs text-gray-500 text-right">
                      {range.jobs.toLocaleString()} jobs
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Market Insights Banner */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl shadow-sm text-white p-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Market Insights Premium</h3>
              <p className="text-green-100 mb-4">
                Truy cập báo cáo chi tiết về xu hướng tuyển dụng, phân tích mức lương theo vị trí và khu vực
              </p>
              <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Nâng cấp ngay
              </button>
            </div>
            <div className="hidden lg:block">
              <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center">
                <ChartBarIcon className="h-16 w-16 text-white/80" />
              </div>
            </div>
          </div>
        </div>

        {/* Recent Trends */}
        <div className="bg-white rounded-xl shadow-sm border">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold text-gray-900">Xu hướng gần đây</h3>
            <p className="text-sm text-gray-600 mt-1">Các thay đổi đáng chú ý trong thị trường</p>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-50 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <ArrowTrendingUpIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-medium text-gray-900 mb-1">Remote Work</h4>
                <p className="text-sm text-gray-600">Tăng 45% công việc remote</p>
              </div>
              <div className="text-center">
                <div className="bg-green-50 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <BriefcaseIcon className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-medium text-gray-900 mb-1">Tech Skills</h4>
                <p className="text-sm text-gray-600">AI/ML skills được ưa chuộng</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-50 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <UserGroupIcon className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="font-medium text-gray-900 mb-1">Gen Z</h4>
                <p className="text-sm text-gray-600">Gia tăng ứng viên trẻ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}