import './Members.css'

const dataArr = [
    {
        name:"mehul bansal",
        img:"/images/mehul.jpg",
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
    }
]

const Members = () => {
    return (
        <>
            <div className="memberbox">
                <div className="memberdiv">
                    <h1>OUR TEAM MEMBERS</h1>
                    <div className="underline"></div>
                    <h3>Get to know the friendly faces behind the scenes, working together to promote literature and debate.</h3>
                </div>
                <div className="members">
                {dataArr.map((data, index) => (
                        <div className="profile" key={index}>
                            <div className="profileimgbox">
                            <img src={data.img} alt="" />
                            </div>
                            <div className="profilecontentbox">
                            <div className='name'>{data.name}</div>
                            <div className='role'>{data.role}</div>
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

export default Members;