import './Competitions.css'

const dataArr = [
    {
        name:"mehul bansal",
        img:"/images/1.jpg",
        role:"coordinator",
        social:["","",""]
    },
    {
        name:"siddanth",
        img:"/images/mehul.jpg",
        role:"sub-coordinator",
        social:["","",""]
    },
    {
        name:"demo",
        img:"/images/mehul.jpg",
        role:"demo",
        social:["","",""]
    },
    {
        name:"demo",
        img:"/images/mehul.jpg",
        role:"demo",
        social:["","",""]
    },
    {
        name:"demo",
        img:"/images/mehul.jpg",
        role:"demo",
        social:["","",""]
    }
]

const Competitions = () => {
    return (
        <>
            <div className="competitionbox">
                <div className="competitiondiv">
                    <div className="headingbox">
                    <div className='bgheading'>COMPETITIONS</div>
                    <div className='heading'>COMPETITIONS</div>
                    </div>
                    <div className="cunderline"></div>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ratione numquam necessitatibus blanditiis fuga esse.</h3>
                </div>
                <div className="competitions">
                {dataArr.map((data, index) => (
                        <div className="contentbox" key={index}>
                            <img src={data.img} alt="" />
                            <div className="competitionscontent">
                            <div className='competitionname'>{data.name}</div>
                            <div className='competitionabout'>{data.role}</div>
                            <ul>
                                <li><a href={data.social[0]}><i className="fa-brands fa-instagram"></i></a></li>
                                <li><a href={data.social[1]}><i className="fa-brands fa-linkedin"></i></a></li>
                                <li><a href={data.social[2]}><i className="fa-brands fa-github"></i></a></li>
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