import React from 'react'
import Links from '../components/Links'
import Nav from '../components/Nav'
import Footer from '../components/Footer'


function Home() {
  return (
    <>
        <Nav id={['profile__img', 'twitter', 'slack']} />
        <Links id={['Twitter', 'btn__zuri', 'books', 'book__python', 'book__design', 'contact']}/>
        <Footer />
    </>
  )
}

export default Home