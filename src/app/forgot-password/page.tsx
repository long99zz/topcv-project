import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quên mật khẩu - TopCV',
  description: 'Đặt lại mật khẩu tài khoản TopCV của bạn một cách nhanh chóng và an toàn',
}

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ForgotPasswordForm />
    </div>
  )
}
