import LoginForm from '@/components/auth/LoginForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Đăng nhập - TopCV',
  description: 'Đăng nhập vào tài khoản TopCV để khám phá hàng ngàn cơ hội việc làm hấp dẫn',
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <LoginForm />
    </div>
  )
}
