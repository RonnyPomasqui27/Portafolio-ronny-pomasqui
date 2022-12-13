import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Portafolio from './pages/Portafolio'
import Resumen from './pages/Resumen'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/resumen' element={<Resumen/>}/>
        <Route path='/portafolio' element={<Portafolio/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App
