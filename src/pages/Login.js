import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './Login.css'

function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // 더미: 로그인 처리
    console.log('Login:', formData)
    navigate('/dashboard')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-logo">
          <h1>생체 모니터링 시스템</h1>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="이메일을 입력하세요"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="비밀번호를 입력하세요"
            />
          </div>
          <button type="submit" className="btn-login">로그인</button>
          <div className="login-footer">
            <span>계정이 없으신가요? </span>
            <Link to="/register">회원가입</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login

