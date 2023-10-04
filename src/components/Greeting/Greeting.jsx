import "./Greeting.css"

const Greeting = ({ onClose }) => {
    return (
        <>

            <div className="greetingbox">
                <div className="greetingheadingbox">
                    <div className='greetingbgheading'>GREETINGS</div>
                    <div className='greetingheading'>GREETINGS</div>
                </div>
                <div className="greetincontent">
                    Jaypee Institute of Information Technology (JIIT) presents the 6th edition of The Joust- Literary Festival of JIIT, to be held 4th and 5th of November at Jaypee Institute of Information Technology, Sector 62, Noida. We at the Joust believe that literary events are an excellent platform for students to discuss and deliberate upon the issues that are pertinent to the real world and enhance their soft skills.
                    We host our 6th edition of The Joust not only with a gleam of hope but also nurturing with its unfaltering confidence that this literary would facilitate an atmosphere conducive to a holistic learning experience about pressing global issues and developing international relations through collaboration.<br /><br />

                    We are thrilled to extend our warmest invitation to you for a celebration of words, ideas, and creativity that promises to be a literary journey like no other. As we embark on this remarkable literary adventure, we invite you to join us and be a part of the magic that unfolds within the pages of books, the minds of authors, and the hearts of readers.<br /><br />
                    Warm regards<br /><br />
                    Team Joust<br /><br />
                    Jaypee Institute of Information Technology<br /><br />
                    Noida, Sector 62

                </div>
            </div>
            
        </>
    )
}

export default Greeting;