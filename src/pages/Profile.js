import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { dummyUser } from '../data/dummyData'
import AlertModal from '../components/AlertModal'
import ConfirmModal from '../components/ConfirmModal'
import './Profile.css'

function Profile() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: dummyUser.email,
    hospitalName: dummyUser.hospitalName,
    hospitalAddress: dummyUser.hospitalAddress,
    hospitalEmail: dummyUser.hospitalEmail,
    hospitalPhone: dummyUser.hospitalPhone,
    marketingAgree: dummyUser.marketingAgree
  })
  const [alertModal, setAlertModal] = useState({ isOpen: false, title: '', message: '' })
  const [confirmModal, setConfirmModal] = useState({ isOpen: false, title: '', message: '', onConfirm: null })

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setFormData({
      ...formData,
      [e.target.name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // 더미: 정보 수정 처리
    setAlertModal({ isOpen: true, title: '수정 완료', message: '정보가 수정되었습니다.' })
  }

  const handleWithdraw = () => {
    setConfirmModal({
      isOpen: true,
      title: '회원 탈퇴',
      message: '정말 탈퇴하시겠습니까? 모든 데이터가 삭제됩니다.',
      onConfirm: () => {
        navigate('/login')
      }
    })
  }

  return (
    <div className="profile-page">
      <Header />
      <div className="profile-container">
        <form onSubmit={handleSubmit} className="profile-form">
          <div className="form-section">
            <h2>계정 정보</h2>
            <div className="form-group">
              <label htmlFor="email">이메일</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                disabled
                className="disabled-input"
              />
              <span className="help-text">이메일은 변경할 수 없습니다.</span>
            </div>
          </div>

          <div className="form-section">
            <h2>병원 정보</h2>
            <div className="form-group">
              <label htmlFor="hospitalName">병원명</label>
              <input
                type="text"
                id="hospitalName"
                name="hospitalName"
                value={formData.hospitalName}
                onChange={handleChange}
                required
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
              />
            </div>
          </div>

          <div className="form-section">
            <h2>마케팅 수신 동의</h2>
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

          <div className="form-actions">
            <button type="submit" className="btn-primary">정보 수정</button>
            <button type="button" className="btn-danger" onClick={handleWithdraw}>
              회원 탈퇴
            </button>
          </div>
        </form>
      </div>

      <AlertModal
        isOpen={alertModal.isOpen}
        onClose={() => setAlertModal({ isOpen: false, title: '', message: '' })}
        title={alertModal.title}
        message={alertModal.message}
      />
      <ConfirmModal
        isOpen={confirmModal.isOpen}
        onClose={() => setConfirmModal({ isOpen: false, title: '', message: '', onConfirm: null })}
        onConfirm={confirmModal.onConfirm || (() => {})}
        title={confirmModal.title}
        message={confirmModal.message}
      />
    </div>
  )
}

export default Profile

