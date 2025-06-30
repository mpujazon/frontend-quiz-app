import { useLocation, useNavigate } from "react-router-dom"
import Subject from "../../components/Subject/Subject";
import ThemeToggle from '/src/components/ThemeToggle/ThemeToggle';
import ButtonSubmit from "../../components/ButtonSubmit/ButtonSubmit";

import './Score.scss';

const Score = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {subject, score, questions} = location.state || [];

    const handleClick = () => {
        navigate('/');
    }

    return (
        <>
            <header className="header">
                <Subject name={subject}></Subject>
                <ThemeToggle></ThemeToggle>
            </header>
            <main className="score-main-container">
                <p className="score-title">
                    Quiz completed
                    <br/>
                    <strong>You scored...</strong>
                </p>
                <div className="score-container">
                    <div clas>
                        <Subject name={subject}></Subject>
                        <p className="score">{score}</p>
                        <p className="questions-number">out of {questions}</p>
                    </div>
                    <br />
                    <ButtonSubmit text="Play Again" onClick={handleClick}/>
                </div>
            </main>
        </>
    )
}
export default Score