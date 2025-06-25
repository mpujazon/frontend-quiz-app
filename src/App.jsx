import './styles/App.scss'
import Subject from './components/Subject/Subject'
import ThemeToggle from './components/ThemeToggle/ThemeToggle'
import Card from './components/Card/Card'

function App() {

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
          <Card element={<Subject name='HTML'/>}/>
          <Card element={<Subject name='CSS'/>}/>
          <Card element={<Subject name='Javascript'/>}/>
          <Card element={<Subject name='Accessibility'/>}/>
        </div>
      </main>
    </>
  )
}

export default App
