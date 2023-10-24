import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contactus.css";
// import FAQ from "../FAQ/FAQ";

const Contactus = () => {
  const form = useRef();
  const [emailValue, setEmailValue] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_odtllgr",
        "template_102rdn7",
        form.current,
        "Z7-AsAn8nfZluuX1l"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setEmailValue("");
  };

  return (
    <>
      <div className="contactsection" id="contactus">
        <div className="FaqDiv">
          <div className="reach">VENUE - JIIT NOIDA, SECTOR-62 <br /> (NOIDA ELECTRONIC CITY)
          </div>
          {/* <FAQ /> */}
          <a href="https://www.google.com/maps/place/JAYPEE+INSTITUTE+OF+INFORMATION+TECHNOLOGY/@28.6312137,77.3657586,16z/data=!4m6!3m5!1s0x390ce551491b3ce7:0x7335d9fcfd4d9db0!8m2!3d28.631209!4d77.3709084!16zL20vMDlqcXJt?entry=ttu" target="_blank">
            <img src="/images/location.jpg" className="location" alt="" />
          </a>
        </div>
        <div className="SubscribeDiv">
          <div className="leftcontent">Subscribe To Get Greeting & Latest Updates</div>
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
      </div>
    </>
  );
};

export default Contactus;
