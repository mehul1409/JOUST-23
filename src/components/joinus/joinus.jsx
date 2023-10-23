import './joinus.css'
import React from 'react';
import { useEffect, useState } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Joinus = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    return (
        <>
            <div className="applyas" data-Aos="fade-right">
                <div className='aheading'>APPLY AS</div>
                <div className="applyrole">
                    <a href="">PARTICIPANTS</a>
                    <a href="">CAMPUS AMBASSADOR</a>
                    <a href="">DELIGATION</a>
                </div>
                <p>WHY JOIN US?</p>
                <div className="applycontentbox">
                    <div className="contentapplyus" data-Aos="fade-right">
                        <div className="headingapply">LEGACY OF JOUST</div>
                        <div className="headingcontent">The first edition of Joust was organised in 2015, with the aim to create a new platform for debaters, poets, writers and photographers. The Joust was meant to rekindle the spirit of Jaypee Youth Parliament, and expand its horizons to include other events apart from committee negotiations. The Joust 2016 went a step further, comprising of five major events. The Literary Festival reached its peak in 2017 in its third edition, with 7 events, 300 participants and a stellar Executive Board. We aim to surpass all the previous editions with The Joust 2018.</div>
                    </div>
                    <div className="contentapplyus" data-Aos="fade-right">
                        <div className="headingapply">QUALITY EVENTS</div>
                        <div className="headingcontent">The Joust 2018 comprises of 7 highly engaging events. It will have 4 unique committees, a multi-format Hindi debate, a slam poetry competition, a creative fiction competition and a press event. All the events will be presided over by highly experienced Executive Board members and judges. With exciting prizes for the winners, the Joust has a motto of quality over quantity. This edition is going to set a benchmark of quality debate and discussion with a huge number of debaters, MUNers, poets, writers and photographers from across the country participating.</div>
                    </div>
                    <div className="contentapplyus" data-Aos="fade-right">
                        <div className="headingapply">HOSPITALITY</div>
                        <div className="headingcontent">The Joust has an extremely dedicated and hard working organising committee committed to make the Literary Festival an unparalleld experience for its participants. With over 40 members distributed across 6 major departments, the team has pledged to fully dedicate its time to make this event bigger than ever before, in terms of participation, quality, judges as well as an overall experience. The team has been highly regarded in the past for being helpful and hospitable to the delegates and the team hopes to continue that trend this year as well.</div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Joinus;