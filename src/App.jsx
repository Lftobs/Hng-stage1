import './App.css'
import Home from './pages/Home'
import ContactPage from './pages/ContactPage'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'



function App() {

  return (
    <>
    
      
      <Router>
        <Routes >
          <Route index element={<Home />} />  
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </Router>
     
    </>
  )
}

export default App
