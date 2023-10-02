import React, { useState } from 'react';
import './Competitions.css';

const Competitions = () => {
    const [activeContent, setActiveContent] = useState('content1');

    const handleImageClick = (dataId) => {
        setActiveContent(dataId);
    };

    const dataArr = [
        {
            name: "UNHRC",
            imgSrc: "/images/1.jpg",
            social: ["https://www.instagram.com/parola.literaryhub", "https://www.linkedin.com/company/parola-the-literary-hub/", "https://www.facebook.com/Parola.LiteraryHub/"]

        }, {
            name: "THE PRESS",
            imgSrc: "/images/3.jpg",
            social: ["https://www.instagram.com/parola.literaryhub", "https://www.linkedin.com/company/parola-the-literary-hub/", "https://www.facebook.com/Parola.LiteraryHub/"]
        },
        {
            name: "CEREBRATE",
            imgSrc: "/images/4.jpg",
            social: ["https://www.instagram.com/parola.literaryhub", "https://www.linkedin.com/company/parola-the-literary-hub/", "https://www.facebook.com/Parola.LiteraryHub/"]
        },
        {
            name: "PENNED",
            imgSrc: "/images/5.jpg",
            social: ["https://www.instagram.com/parola.literaryhub", "https://www.linkedin.com/company/parola-the-literary-hub/", "https://www.facebook.com/Parola.LiteraryHub/"]
        },
        {
            name: "VERSES",
            imgSrc: "/images/6.jpg",
            social: ["https://www.instagram.com/parola.literaryhub", "https://www.linkedin.com/company/parola-the-literary-hub/", "https://www.facebook.com/Parola.LiteraryHub/"]
        },
        {
            name: "AIPPM",
            imgSrc: "/images/7.jpg",
            social: ["https://www.instagram.com/parola.literaryhub", "https://www.linkedin.com/company/parola-the-literary-hub/", "https://www.facebook.com/Parola.LiteraryHub/"]
        },
        {
            name: "UNEP",
            imgSrc: "/images/8.jpg",
            social: ["https://www.instagram.com/parola.literaryhub", "https://www.linkedin.com/company/parola-the-literary-hub/", "https://www.facebook.com/Parola.LiteraryHub/"]
        },
        {
            name: "तर्कसंग्राम",
            imgSrc: "/images/2.jpg",
            social: ["https://www.instagram.com/parola.literaryhub", "https://www.linkedin.com/company/parola-the-literary-hub/", "https://www.facebook.com/Parola.LiteraryHub/"]
        }

    ]

    return (
        <div className="membersection">
            <div className="compete">COMPETITIONS</div>
            <div className="container">
                <div className="icon">
                    {dataArr.map((data,i) => (
                        <div
                            key={i}
                            className={`imgbox ${activeContent === `content${i}` ? 'active' : ''}`}
                            style={{ "--i": i }}
                            data-id={`content${i}`}
                            onMouseEnter={() => handleImageClick(`content${i}`)}

                        >
                            <img src={data.imgSrc} alt="" />
                        </div>
                    ))}
                </div>
                <div className="content">
                    {dataArr.map((data,index) => (
                        <div
                            key={index}
                            className={`contentbox ${activeContent === `content${index}` ? 'active' : ''}`}
                            id={`content${index}`}
                        >
                            <div class="contentbox active" id="content1">
                                <div class="card">
                                    <div class="imgbox">
                                        <img src={data.imgSrc} alt="img" />
                                    </div>
                                    <div class="textbox">
                                        <h2>{data.name}<br />
                                            <span>{data.role}</span>
                                        </h2>
                                        <ul class="socialmedia">
                                            <li><a href={data.social[0]} target='_blank'><i className="fa-brands fa-instagram"></i></a></li>
                                            <li><a href={data.social[1]} target='_blank'><i className="fa-brands fa-linkedin"></i></a></li>
                                            <li><a href={data.social[2]} target='_blank'><i className="fa-brands fa-facebook"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                       
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Competitions;
