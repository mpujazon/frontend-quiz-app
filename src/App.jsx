import './styles/App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartMenu from './pages/StartMenu';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<StartMenu/>} />
        <Route path='/test' element={<h1>Say Hi Test!</h1>} />
      </Routes>
    </Router>
  )
}

export default App
