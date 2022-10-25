import './App.css'
import Links from './components/Links'
import Nav from './components/Nav'
import Footer from './components/Footer'


function App() {

  return (
    <>

    <Nav id={['profile__img', 'twitter', 'slack']} />
    <Links id={['Twitter', 'btn__zuri', 'books', 'book__python', 'book__design']}/>
    <Footer /> 
      
    </>

  )
}

export default App
