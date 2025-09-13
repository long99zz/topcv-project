'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ForgotPasswordForm: React.FC = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      console.log('Password reset request for:', email)
      setIsLoading(false)
      setIsSuccess(true)
    }, 1000)
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div>
            <Image
              src="/images/topcv-logo.png"
              alt="TopCV Logo"
              width={120}
              height={40}
              className="mx-auto"
            />
            <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Email đã được gửi!
              </h2>
              <p className="text-gray-600 mb-4">
                Chúng tôi đã gửi hướng dẫn đặt lại mật khẩu đến email: <strong>{email}</strong>
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Vui lòng kiểm tra hộp thư và làm theo hướng dẫn để đặt lại mật khẩu của bạn.
              </p>
              <div className="space-y-3">
                <Link
                  href="/login"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Quay lại đăng nhập
                </Link>
                <button
                  onClick={() => {
                    setIsSuccess(false)
                    setEmail('')
                  }}
                  className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Gửi lại email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Logo */}
        <div className="text-center">
          <Image
            src="/images/topcv-logo.png"
            alt="TopCV Logo"
            width={120}
            height={40}
            className="mx-auto"
          />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Quên mật khẩu?
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Nhập email của bạn để nhận hướng dẫn đặt lại mật khẩu
          </p>
        </div>

        {/* Forgot Password Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm"
              placeholder="Nhập email đã đăng ký"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading || !email}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Đang gửi...
                </>
              ) : (
                'Gửi hướng dẫn đặt lại mật khẩu'
              )}
            </button>
          </div>

          {/* Back to Login */}
          <div className="text-center">
            <Link href="/login" className="text-sm text-blue-600 hover:text-blue-500 font-medium">
              ← Quay lại đăng nhập
            </Link>
          </div>
        </form>

        {/* Help Section */}
        <div className="bg-gray-50 rounded-lg p-4 mt-6">
          <h3 className="text-sm font-medium text-gray-900 mb-2">Cần hỗ trợ?</h3>
          <p className="text-xs text-gray-600 mb-2">
            Nếu bạn gặp khó khăn trong việc đặt lại mật khẩu, vui lòng liên hệ với chúng tôi:
          </p>
          <div className="space-y-1 text-xs">
            <p className="text-gray-600">
              📧 Email: <span className="text-blue-600">support@topcv.vn</span>
            </p>
            <p className="text-gray-600">
              📞 Hotline: <span className="text-blue-600">1900 1859</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPasswordForm
