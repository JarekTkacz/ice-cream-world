import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../pages/contact.css';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'


export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_32sxdza', 'template_suc9eqc', form.current, 'Pp1JMgECKUH8BGeHe')
      .then((result) => {
          console.log(result.text);
          console.log("Message sent!");
    }, (error) => {
          console.log(error.text);
    });
  };
  
    return (
    <div className='contact_main'>
        <Navbar />
        <div className='form_main'>

    <form className='form' ref={form} onSubmit={sendEmail}>
      <label className='label'>Name</label>
      <input className='input' type="text" name="user_name" />
      <label className='label'>Email</label>
      <input className='input' type="email" name="user_email" />
      <label className='label'>Message</label>
      <textarea className='textarea' name="message" />
      <input className='input' type="submit" value="Send" />
    </form>

        </div>
        <Footer />
    </div>

  );
};

export default Contact;