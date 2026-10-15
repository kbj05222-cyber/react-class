import { Link } from 'react-router-dom'
import './Grade.css'

function Grade() {

    const navigate = useNavigate()
    const name = '김범준'
    const studentID = '20221234'
    const department = '멀티미디어학과'

    return (
        <main className=grade-page">
        <section className="greade-card">
            <p className="grade-label">MY GRADE</p>
            <h1>개인 성적 조회</h1>
            <div className="stdent-into">
                <p>
                    <span>이름</span>
                    <strong>{name}</strong>
                </p>

                <p>
                    <span>학번</span>
                    <strong>{studentID}</strong>
                </p>

                <p>
                    <span>학과</span>
                    <strong>{studentID}</strong>
                </p>

                <p>
                    <span>학과</span>
                    <strong>{department}</strong>
                </p>
            </div>

    )
}

export default Grade