import React from 'react';
import { useEffect } from 'react';
import './Competitions.css';
import Aos from 'aos';
import 'aos/dist/aos.css'


const Competitions = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (
        <div className="competitionbox " id="competition" data-Aos="fade-right">
            <div className="headingbox">
                    <div className='headingc'>COMPETITIONS</div>
            </div>
            {/* <div className="competitiondiv">Explore our thrilling competitions, where words become battlegrounds and ideas take center stage.</div> */}
            <div className="competitions" >
                <div className="name">
                    <img src="images/unep.png" alt="" />
                    <h4>UNITED NATIONS ENVIRONMENT PROGRAMME</h4>
                </div>
                <div className="name">
                    <img src="images/UNHRC.png" alt="" />
                    <h4>UNITED NATIONS HUMAN RIGHTS COUNCIL</h4>
                </div>
                <div className="name">
                    <img src="images/aippm.png" alt="" />
                    <h4>ALL INDIA POLITICAL PARTIES MEET </h4>
                </div>
                <div className="name">
                    <img src="images/press.png" alt="" />
                    <h4>THE INTERNATIONAL PRESS CONFRENCE</h4>
                </div>
                <div className="name">
                    <img src="images/debate.png" alt="" />
                    <h4>TARKSANGRAM - A TWO DAY MULTI-FORMAT HINDI DEBATE</h4>
                </div>
                <div className="name">
                    <img src="images/person BLUE.png" alt="" />
                    <h4>CEREBRATE - ENGLISH CONVENTIONAL DEBATE</h4>
                </div>
                <div className="name">
                    <img src="images/poetry.png" alt="" />
                    <h4>SLAMMED!!! - A POETRY COMPETITION</h4>
                </div>
                <div className="name">
                    <img src="images/creative.png" alt="" />
                    <h4>PENNED - CREATIVE WRITING COMPETITION</h4>
                </div>
            </div>
        </div>
    );
};

export default Competitions;
