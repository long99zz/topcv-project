import RegisterForm from '@/components/auth/RegisterForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Đăng ký - TopCV',
  description: 'Tạo tài khoản TopCV miễn phí để tiếp cận hàng ngàn cơ hội việc làm từ các nhà tuyển dụng uy tín',
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <RegisterForm />
    </div>
  )
}
