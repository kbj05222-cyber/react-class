import { Navigate, useNavigate } from 'react-router-dom'
import './App.css'
import profileImg from './assets/photo.png'
import { QRCodeSVG } from 'qrcode.react'

function App() {
  const name = '김형욱'
  const studentId = 'A00464'
  const department = '멀티미디어학과 교수'
  const goal = '사용하기 편하고 보기 좋은 웹 화면 만들기'
  const qrData = '이름: ' + name + '\n학번: ' + studentId + '\n학과: ' + department

  const navigate = useNavigate()
  const isLogin = localStorage.getItem('isLogin')

  if (isLogin !== 'true') {
    return <Navigate to="/" replace />
  }

  const handleLogout = () => {
    localStorage.removeItem('isLogin')
    navigate('/')
  }

  return (
    <main className="page">
      <section className="profile-card">
        <span className="status"> LIVE</span>
        <img src={profileImg} alt="프로필 사진" className="avatar-img" />
        <p className="eyebrow">HELLO REACT</p>
        <h1>{name}</h1>
        <p className="student-id">학번 : {studentId}</p>
        <p className="department">{department}</p>
        <div className="divider"></div>
        <p className="goal">목표: {goal}</p>
        <div className="tags">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
        </div>
        <div className="qr-area">
          <QRCodeSVG value={qrData} size={150} />
          <p>학생 QR</p>
        </div>
        <button onClick={() => navigate('/grade')}>성적 보기</button>
        <div style={{ height: '15px' }}></div>
        <button onClick={handleLogout}>로그아웃</button>
      </section>
    </main>
  )
}

export default App