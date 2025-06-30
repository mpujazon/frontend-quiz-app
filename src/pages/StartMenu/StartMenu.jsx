import './StartMenu.scss';

import { Link } from 'react-router-dom';

import Subject from '/src/components/Subject/Subject';
import ThemeToggle from '/src/components/ThemeToggle/ThemeToggle';
import Card from '/src/components/Card/Card';

function StartMenu() {
    return (
        <>
            <header className="header"> 
                <Subject name={null}></Subject>
                <ThemeToggle></ThemeToggle>
            </header>
            <main className='main-container'>
                <div className='main-text'>
                <h1>Welcome to the <strong>Frontend Quiz!</strong></h1>
                <p><em>Pick a subject to get started.</em></p>
                </div>
                <div className='subject-cards'>
                <Link to="/html" className='link-button'>
                    <Card element={<Subject name='HTML'/>}/>
                </Link>
                <Link to="/css" className='link-button'>
                    <Card element={<Subject name='CSS'/>}/>
                </Link>
                <Link to="/javascript" className='link-button'>
                    <Card element={<Subject name='Javascript'/>}/>
                </Link>
                <Link to="/accessibility" className='link-button'>
                    <Card element={<Subject name='Accessibility'/>}/>
                </Link>
                </div>
            </main>
        </>
    )
}
export default StartMenu