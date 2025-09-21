import React from 'react';

const RecentJobs = () => {
  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      department: 'IT - Phần mềm',
      location: 'Hà Nội',
      status: 'Đang tuyển',
      applications: 12,
      views: 148,
      datePosted: '2 ngày trước',
      salary: '20-30 triệu',
      type: 'Toàn thời gian',
    },
    {
      id: 2,
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'TP. Hồ Chí Minh',
      status: 'Đang tuyển',
      applications: 8,
      views: 92,
      datePosted: '1 tuần trước',
      salary: '15-25 triệu',
      type: 'Toàn thời gian',
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      department: 'Thiết kế',
      location: 'Hà Nội',
      status: 'Tạm dừng',
      applications: 25,
      views: 312,
      datePosted: '3 ngày trước',
      salary: '12-18 triệu',
      type: 'Toàn thời gian',
    },
    {
      id: 4,
      title: 'Content Writer',
      department: 'Marketing',
      location: 'Remote',
      status: 'Đang tuyển',
      applications: 5,
      views: 67,
      datePosted: '5 ngày trước',
      salary: '8-12 triệu',
      type: 'Bán thời gian',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Đang tuyển':
        return 'bg-green-100 text-green-800';
      case 'Tạm dừng':
        return 'bg-yellow-100 text-yellow-800';
      case 'Đã đóng':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Tin tuyển dụng gần đây</h3>
          <button className="text-green-600 hover:text-green-700 text-sm font-medium">
            Xem tất cả
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Vị trí tuyển dụng
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Trạng thái
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ứng viên
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Lượt xem
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ngày đăng
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {jobs.map((job) => (
              <tr key={job.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{job.title}</div>
                    <div className="text-sm text-gray-500">{job.department} • {job.location}</div>
                    <div className="text-sm text-gray-500">{job.salary} • {job.type}</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                      job.status
                    )}`}
                  >
                    {job.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  <span className="font-medium">{job.applications}</span> ứng tuyển
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {job.views} lượt xem
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {job.datePosted}
                </td>
                <td className="px-6 py-4 text-sm font-medium">
                  <div className="flex space-x-2">
                    <button className="text-green-600 hover:text-green-900">
                      Sửa
                    </button>
                    <button className="text-blue-600 hover:text-blue-900">
                      Xem
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      Xóa
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentJobs;