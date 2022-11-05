import React from 'react'
import Footer from './Footer'

function Contact(props) {
  return (
    <>
            <section className="contact-sec">
                <div className="top">
                    <h1>Contact Me</h1>
                    <p>Hi there, contact me to ask me about anything you have in mind</p>
        
                </div>
                <form>
                    <div className="name">
                        <div className="a">
                            <label for={props.id[0]} >First name</label>
                            <input type="text" name="" id={props.id[0]} placeholder="Enter your first name"  required />
                        </div>
                            
                        <div className="a">
                            <label for={props.id[1]} >Last name</label>
                            <input type="text" name="" id={props.id[1]} placeholder="Enter your last name" required />
                        </div>

                    </div>
                    <label for={props.id[2]} >Email</label>
                    <input type="email" name="" id={props.id[2]} placeholder="yourname@email.com" required />
                        
                    <label for={props.id[3]}>Message</label>
                    <textarea placeholder="Send a message and I'll reply as soon as possible..."id={props.id[3]} required></textarea>
                    <span className="err-msg">
                        Please enter a message http://tobs.pythonanywhere.com/
                    </span>
                    <div className="checkbx">     
                        <input type="checkbox" name="" id="checkbox" required />
                        <label for="checkbox">You agree to providing your data {name} who may contact you.</label>
                    </div>
                    <button type="submit" id={props.id[4]} >Send message</button>
        
                </form>
            </section>
            <Footer />
        </>
  )
}

export default Contact
