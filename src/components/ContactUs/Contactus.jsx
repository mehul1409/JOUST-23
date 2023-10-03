import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contactus.css';

const Contactus = () => {
  const form = useRef();
  const [emailValue, setEmailValue] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_odtllgr', 'template_102rdn7', form.current, 'Z7-AsAn8nfZluuX1l')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setEmailValue('');
  };

  return (
    <div className="contactsection" id="contactus">
      <div className="leftcontent">Subscribe To Get Latest Updates</div>
      <div className="rightcontent">
        <form ref={form} onSubmit={sendEmail} className="form">
          <input
            className="emailinput"
            type="email"
            name="user_email"
            placeholder="Drop Your Email Here..."
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
          <input type="submit" value="Subscribe" id="submit" />
        </form>
      </div>
    </div>
  );
};

export default Contactus;
