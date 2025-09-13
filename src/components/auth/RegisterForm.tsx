'use client'

import React, { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import AuthSlider from './AuthSlider'

type RegisterFormData = {
  email: string
  password: string
  confirmPassword: string
  fullName: string
  gender: 'male' | 'female' | ''
  phone: string
  company: string
  province: string
  district: string
  acceptTerms: boolean
  userType: 'recruiter' | 'candidate' | ''
}

export default function RegisterForm() {
  const [formData, setFormData] = useState<RegisterFormData>({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    gender: '',
    phone: '',
    company: '',
    province: '',
    district: '',
    acceptTerms: false,
    userType: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  




  const provinces = [
    'Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng', 'Hải Phòng', 'Cần Thơ',
    'An Giang', 'Bà Rịa - Vũng Tàu', 'Bắc Giang', 'Bắc Kạn', 'Bạc Liêu'
  ]

  const districts = [
    'Ba Đình', 'Hoàn Kiếm', 'Tây Hồ', 'Long Biên', 'Cầu Giấy',
    'Đống Đa', 'Hai Bà Trưng', 'Hoàng Mai', 'Thanh Xuân'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => setIsLoading(false), 2000)
  }

  if (!formData.userType) {
    return (
      <div className="min-h-screen bg-white">
        {/* Left: Form chọn loại tài khoản */}
        <div className="min-h-screen lg:mr-[40vw] lg:min-w-0 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white">
          <div className="w-full max-w-md">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <Image src="/images/topcv-logo-cropped.png" alt="TopCV" width={140} height={45} className="mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Chào bạn,</h2>
                <p className="text-gray-600 flex items-center justify-center gap-2">
                  Bạn hãy dành ra vài giây để xác nhận thông tin dưới đây nhé!
                  <Image src="/images/feature/suggestion.png" alt="ring" width={20} height={20} />
                </p>
              </div>
              <div className="space-y-4 mb-6">
                <p className="text-center text-gray-700 flex items-center justify-center gap-2">
                  <Image src="/images/feature/service.png" alt="business" width={20} height={20} />
                  Để tối ưu tốt nhất cho trải nghiệm của bạn với TopCV, vui lòng lựa chọn nhóm phù hợp nhất với bạn.
                </p>
              </div>
              <div className="space-y-4">
                <button
                  onClick={() => setFormData(prev => ({ ...prev, userType: 'recruiter' }))}
                  className="w-full flex items-center justify-between p-4 border-2 border-blue-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Image src="/images/feature/service.png" alt="recruiter" width={24} height={24} />
                    <span className="font-medium text-gray-900">Tôi là nhà tuyển dụng</span>
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <Link 
                  href="https://www.topcv.vn/sign-up"
                  className="w-full flex items-center justify-between p-4 border-2 border-green-200 rounded-lg hover:border-green-400 hover:bg-green-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Image src="/images/feature/suggestion.png" alt="candidate" width={24} height={24} />
                    <span className="font-medium text-gray-900">Tôi là ứng viên tìm việc</span>
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Slider dùng chung */}
        <div className="hidden lg:block fixed top-0 right-0 h-screen w-[40vw] min-w-[480px] z-20 bg-white shadow-lg m-0 p-0">
          <AuthSlider />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Left: Form đăng ký */}
      <div className="min-h-screen lg:mr-[40vw] lg:min-w-0 flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8 py-8 overflow-y-auto bg-white">
        <div className="w-full max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-4">
            <Image src="/images/topcv-logo-cropped.png" alt="TopCV" width={140} height={45} className="mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-green-600 mb-2">Đăng ký tài khoản Nhà tuyển dụng</h2>
            <p className="text-base text-gray-700 mb-4">Cùng tạo dựng lợi thế cho doanh nghiệp bằng trải nghiệm công nghệ tuyển dụng ứng dụng sâu AI & Hiring Funnel.</p>
          </div>
          {/* Quy định box */}
          <div className="border border-green-500 rounded-lg p-5 mb-6 bg-white">
            <h3 className="text-lg font-bold text-green-600 mb-2">Quy định</h3>
            <p className="mb-2 text-gray-700">Để đảm bảo chất lượng dịch vụ, TopCV <span className="text-red-500 font-semibold">không cho phép một người dùng tạo nhiều tài khoản khác nhau.</span></p>
            <p className="mb-2 text-gray-700">Nếu phát hiện vi phạm, TopCV sẽ ngừng cung cấp dịch vụ tới tất cả các tài khoản trùng lặp hoặc chặn toàn bộ truy cập tới hệ thống website của TopCV.</p>
            <p className="mb-2 text-gray-700">Sau khi đăng ký tài khoản nhà tuyển dụng (NTD) và cung cấp các thông tin cần thiết, NTD có thể được hỗ trợ hiển thị tin tuyển dụng cơ bản (standard), ngoại trừ một số vị trí nhất định. Số lượng tin đăng và cách thức hiển thị phụ thuộc vào quy định của TopCV tại từng thời điểm.</p>
            <div className="flex gap-8 mt-4">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a2 2 0 011.7 1l1.54 2.57a2 2 0 001.7 1H19a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" /></svg>
                <span className="text-green-600 font-semibold">(024) 71079799</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a2 2 0 011.7 1l1.54 2.57a2 2 0 001.7 1H19a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" /></svg>
                <span className="text-green-600 font-semibold">0862 691929</span>
              </div>
            </div>
          </div>
          {/* Form section */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Tài khoản</h3>
            <button
              type="button"
              className="w-full flex justify-center items-center py-3 px-4 mb-2 border border-transparent rounded-lg text-white bg-blue-500 hover:bg-blue-600 font-semibold text-base transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Đăng ký bằng Google
            </button>
            <div className="relative mb-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-base">
                <span className="px-2 bg-white text-gray-500">Hoặc bằng email</span>
              </div>
            </div>
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-base font-semibold text-gray-800 mb-1">Email đăng nhập <span className="text-red-500">*</span></label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-base"
                placeholder="Email"
              />
              <p className="mt-1 text-sm text-red-500">Trường hợp bạn đăng ký tài khoản bằng email không phải email tên miền công ty, một số dịch vụ trên tài khoản có thể sẽ bị giới hạn quyền mua hoặc sử dụng.</p>
            </div>
            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-base font-semibold text-gray-800 mb-1">Mật khẩu <span className="text-red-500">*</span></label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-3 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-base"
                  placeholder="Mật khẩu ( từ 6 đến 25 ký tự )"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L15 15m0 0l6-6M9 12a3 3 0 106 0 3 3 0 00-6 0z" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 616 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268-2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-base font-semibold text-gray-800 mb-1">Nhập lại mật khẩu <span className="text-red-500">*</span></label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-3 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-base"
                  placeholder="Nhập lại mật khẩu"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L15 15m0 0l6-6M9 12a3 3 0 106 0 3 3 0 00-6 0z" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 616 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268-2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            {/* Thông tin nhà tuyển dụng */}
            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">Thông tin nhà tuyển dụng</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="block text-base font-semibold text-gray-800 mb-1">Họ và tên <span className="text-red-500">*</span></label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-base"
                  placeholder="Họ và tên"
                />
              </div>
              <div>
                <label className="block text-base font-semibold text-gray-800 mb-1">Giới tính: <span className="text-red-500">*</span></label>
                <div className="flex items-center gap-4 mt-2">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleInputChange} className="form-radio text-green-600" /> Nam
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleInputChange} className="form-radio text-green-600" /> Nữ
                  </label>
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-base font-semibold text-gray-800 mb-1">Số điện thoại cá nhân <span className="text-red-500">*</span></label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-base"
                  placeholder="Số điện thoại cá nhân"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-base font-semibold text-gray-800 mb-1">Công ty <span className="text-red-500">*</span></label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-base"
                  placeholder="Tên công ty"
                />
              </div>
              <div>
                <label htmlFor="province" className="block text-base font-semibold text-gray-800 mb-1">Địa điểm làm việc <span className="text-red-500">*</span></label>
                <select
                  id="province"
                  name="province"
                  required
                  value={formData.province}
                  onChange={handleInputChange}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-base"
                >
                  <option value="">Chọn tỉnh/thành phố</option>
                  {provinces.map((province) => (
                    <option key={province} value={province}>{province}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="district" className="block text-base font-semibold text-gray-800 mb-1">Quận/ huyện</label>
                <select
                  id="district"
                  name="district"
                  required
                  value={formData.district}
                  onChange={handleInputChange}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-base"
                >
                  <option value="">Chọn quận/huyện</option>
                  {districts.map((district) => (
                    <option key={district} value={district}>{district}</option>
                  ))}
                </select>
              </div>
            </div>
            {/* Terms Checkbox (bottom) */}
            <div className="flex items-center mt-4">
              <input
                id="acceptTermsBottom"
                name="acceptTerms"
                type="checkbox"
                required
                checked={formData.acceptTerms}
                onChange={handleInputChange}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="acceptTermsBottom" className="ml-2 text-base text-gray-700">
                Tôi đã đọc và đồng ý với <Link href="/terms" className="text-green-600 font-semibold hover:underline">Điều khoản dịch vụ</Link> và <Link href="/privacy" className="text-green-600 font-semibold hover:underline">Chính sách bảo mật</Link> của TopCV.
              </label>
            </div>
            <button
              type="submit"
              disabled={isLoading || !formData.acceptTerms}
              className="w-full flex justify-center py-3 px-4 border border-transparent text-base font-semibold rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 mt-2"
            >
              Hoàn tất
            </button>
            <div className="text-center mt-4">
              <p className="text-base text-gray-700">
                Đã có tài khoản?{' '}
                <Link href="/login" className="font-semibold text-green-600 hover:underline">
                  Đăng nhập ngay
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      {/* Right: Slider fixed */}
  <div className="hidden lg:block fixed top-0 right-0 w-[500px] h-screen z-20 bg-white shadow-lg m-0 p-0 items-center justify-center">
        <AuthSlider />
      </div>
    </div>
  )
}
