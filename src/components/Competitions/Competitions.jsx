import './Competitions.css'

const dataArr = [
    {
        name:"तर्कसंग्राम",
        img:"/images/2.jpg",
        role:"Hindi Debate ",
        social:["https://www.instagram.com/parola.literaryhub","https://www.linkedin.com/company/parola-the-literary-hub/","https://www.facebook.com/Parola.LiteraryHub/"]
    },
    {
        name:"VERSES",
        img:"/images/6.jpg",
        role:"Slam Poetry",
        social:["https://www.instagram.com/parola.literaryhub","https://www.linkedin.com/company/parola-the-literary-hub/","https://www.facebook.com/Parola.LiteraryHub/"]
    },
    {
        name:"PENNED",
        img:"/images/5.jpg",
        role:"Creative Writing",
        social:["https://www.instagram.com/parola.literaryhub","https://www.linkedin.com/company/parola-the-literary-hub/","https://www.facebook.com/Parola.LiteraryHub/"]
    },
    {
        name:"CEREBRATE",
        img:"/images/4.jpg",
        role:"English Conventional Debate",
        social:["https://www.instagram.com/parola.literaryhub","https://www.linkedin.com/company/parola-the-literary-hub/","https://www.facebook.com/Parola.LiteraryHub/"]
    },
    {
        name:"MUN",
        img:"/images/1.jpg",
        role:"MODEL UNITED NATIONS",
        social:["https://www.instagram.com/parola.literaryhub","https://www.linkedin.com/company/parola-the-literary-hub/","https://www.facebook.com/Parola.LiteraryHub/"]
    }
]

const Competitions = () => {
    return (
        <>
            <div className="competitionbox" id="competition">
                <div className="competitiondiv">
                    <div className="headingbox">
                    <div className='bgheading'>COMPETITIONS</div>
                    <div className='heading'>COMPETITIONS</div>
                    </div>
                    <div className="cunderline"></div>
                    <h3>Explore our thrilling competitions, where words become battlegrounds and ideas take center stage.</h3>
                </div>
                <div className="competitions">
                {dataArr.map((data, index) => (
                        <div className="contentbox" key={index}>
                            <img src={data.img} alt="" />
                            <div className="competitionscontent">
                            <div className='competitionname'>{data.name}</div>
                            <div className='parentcompetitionabout'>
                            <div className='competitionabout'>{data.role}</div>
                            </div>
                            <ul>
                                <li><a href={data.social[0]}><i className="fa-brands fa-instagram"></i></a></li>
                                <li><a href={data.social[1]}><i className="fa-brands fa-linkedin"></i></a></li>
                                <li><a href={data.social[2]}><i className="fa-brands fa-facebook"></i></a></li>
                            </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Competitions;