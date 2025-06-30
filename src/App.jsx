import './styles/App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartMenu from './pages/StartMenu/StartMenu';
import Questions from './pages/Questions/Questions';
import Score from './pages/Score/Score';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<StartMenu/>} />
        <Route path='/html' element={<Questions subject='HTML'/>} />
        <Route path='/css' element={<Questions subject='CSS'/>} />
        <Route path='/javascript' element={<Questions subject='Javascript'/>} />
        <Route path='/accessibility' element={<Questions subject='Accessibility'/>} />
        <Route path='/score' element={<Score/>}/>
      </Routes>
    </Router>
  )
}

export default App
