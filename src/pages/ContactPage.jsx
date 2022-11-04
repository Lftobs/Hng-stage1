import React from 'react'
import Contact from '../components/Contact'

function ContactPage() {
  return (
    <>
        <Contact id={['first_name', 'last_name', 'email', 'message', 'btn__submit']} />
    </>
  )
}

export default ContactPage