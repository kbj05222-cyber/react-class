import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

function Login() {
  const navigate = useNavigate()
  const dbEmail = 'hukim@chungwoon.ac.kr'
  const dbPassword = '1234'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleLogin = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault()
    }
    if (email === '') {
      setMessage('이메일을 입력하세요.')
      return
    }
    if (password === '') {
      setMessage('비밀번호를 입력하세요.')
      return
    }
    if (email === dbEmail && password === dbPassword) {
      localStorage.setItem('isLogin', 'true')
      navigate('/profile')
    } else {
      setMessage('이메일 또는 비밀번호가 일치하지 않습니다.')
    }
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <p className="login-label">STUDENT LOGIN</p>
        <h1>로그인</h1>
        <p className="login-guide">학교 이메일과 비밀번호를 입력하세요.</p>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>이메일</label>
            <input
              type="email"
              placeholder="이메일 입력"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>비밀번호</label>
            <input
              type="password"
              placeholder="비밀번호 입력"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {message && <p className="login-message">{message}</p>}
          <button type="submit">로그인</button>
        </form>
        <p className="test-account">
          개인정보 담당자<br />
          이메일 : admin@chungwoon.ac.kr<br />
          담당자 : 홍길동<br />
          연락처 : 032-770-8206
        </p>
      </section>
    </main>
  )
}

export default Login