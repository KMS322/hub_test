import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './Register.css'

function Register() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    hospitalName: '',
    hospitalAddress: '',
    hospitalEmail: '',
    hospitalPhone: '',
    marketingAgree: false
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // 더미: 회원가입 처리
    console.log('Register:', formData)
    navigate('/login')
  }

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setFormData({
      ...formData,
      [e.target.name]: value
    })
  }

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-header">
          <h1>회원가입</h1>
        </div>
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-section">
            <h3>계정 정보</h3>
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
            <div className="form-group">
              <label htmlFor="passwordConfirm">비밀번호 확인</label>
              <input
                type="password"
                id="passwordConfirm"
                name="passwordConfirm"
                value={formData.passwordConfirm}
                onChange={handleChange}
                required
                placeholder="비밀번호를 다시 입력하세요"
              />
            </div>
          </div>

          <div className="form-section">
            <h3>병원 정보</h3>
            <div className="form-group">
              <label htmlFor="hospitalName">병원명</label>
              <input
                type="text"
                id="hospitalName"
                name="hospitalName"
                value={formData.hospitalName}
                onChange={handleChange}
                required
                placeholder="병원명을 입력하세요"
              />
            </div>
            <div className="form-group">
              <label htmlFor="hospitalAddress">병원주소</label>
              <input
                type="text"
                id="hospitalAddress"
                name="hospitalAddress"
                value={formData.hospitalAddress}
                onChange={handleChange}
                required
                placeholder="병원주소를 입력하세요"
              />
            </div>
            <div className="form-group">
              <label htmlFor="hospitalEmail">병원 이메일</label>
              <input
                type="email"
                id="hospitalEmail"
                name="hospitalEmail"
                value={formData.hospitalEmail}
                onChange={handleChange}
                required
                placeholder="병원 이메일을 입력하세요"
              />
            </div>
            <div className="form-group">
              <label htmlFor="hospitalPhone">병원 전화번호</label>
              <input
                type="tel"
                id="hospitalPhone"
                name="hospitalPhone"
                value={formData.hospitalPhone}
                onChange={handleChange}
                required
                placeholder="병원 전화번호를 입력하세요"
              />
            </div>
          </div>

          <div className="form-section">
            <h3>마케팅 수신 동의</h3>
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="marketingAgree"
                  checked={formData.marketingAgree}
                  onChange={handleChange}
                />
                <span>마케팅 정보 수신에 동의합니다</span>
              </label>
            </div>
          </div>

          <button type="submit" className="btn-register">회원가입</button>
          <div className="register-footer">
            <span>이미 계정이 있으신가요? </span>
            <Link to="/login">로그인</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register

