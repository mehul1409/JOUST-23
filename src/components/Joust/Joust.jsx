import "./Joust.css"
import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Joust = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (
        <>
            <div className="joustsectionbg" id="joust">
                <div className="facts" data-Aos="fade-up">
                    <p className="fact">FACTS</p> <br />
                    <div className="factbox">
                    <span className="spanf">8</span><br />
                    Events <br />
                    </div>
                    <div className="factbox">
                    <span className="spanf">500</span><br />
                    Participants <br />
                    </div>
                    <div className="factbox">
                    <span className="spanf">50k+</span><br />
                    Prize Pool
                    </div>
                </div>
                <div className="joustsection">
                    <div className="joustbox">
                        <div className="bgjoust">WHAT IS JOUST ?</div>
                    </div>
                    <div className="joustcontent">The Joust is Parola's Literary Fest, a continuing legacy featuring various forms of literature and art. Over the years, Joust has proven itself as a top-notch platform for debating and discussing ideas, issues, and opinions, attracting intellectuals and fostering deep conversations. The Joust gives students a platform to discover how deep they can go about an issue that has affected the society they're a part of. It also helps them find their own potential and skills on how to go about talking about the issues, writing about them, and coming up with the best possible solutions for those problems. Joining Joust means immersing yourself in a vibrant atmosphere of literary exploration, where you can connect with fellow dreamers, thinkers, and poets, and gain lifelong memories that shape your academic journey.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Joust;