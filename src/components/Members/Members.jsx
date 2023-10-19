import './Members.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const dataArr = [
    {
        name: "siddanth1",
        img: "/images/mehul.jpg",
        role: "sub-coordinator",
        social: ["", "", ""]
    },
    {
        name: "siddanth2",
        img: "/images/mehul.jpg",
        role: "sub-coordinator",
        social: ["", "", ""]
    },
    {
        name: "siddanth3",
        img: "/images/mehul.jpg",
        role: "sub-coordinator",
        social: ["", "", ""]
    },
    {
        name: "siddanth4",
        img: "/images/mehul.jpg",
        role: "sub-coordinator",
        social: ["", "", ""]
    },
    {
        name: "siddanth5",
        img: "/images/mehul.jpg",
        role: "sub-coordinator",
        social: ["", "", ""]
    },
    {
        name: "siddanth6",
        img: "/images/mehul.jpg",
        role: "sub-coordinator",
        social: ["", "", ""]
    },
    {
        name: "siddanth7",
        img: "/images/mehul.jpg",
        role: "sub-coordinator",
        social: ["", "", ""]
    },
    {
        name: "siddanth8",
        img: "/images/mehul.jpg",
        role: "sub-coordinator",
        social: ["", "", ""]
    },
    {
        name: "siddanth9",
        img: "/images/mehul.jpg",
        role: "sub-coordinator",
        social: ["", "", ""]
    }
]

const Members = () => {
    const startCarousel1 = 0;
    const endCarousel1 = 3;
    const displayedMembers1 = dataArr.slice(startCarousel1, endCarousel1);
    const startCarousel2 = 3;
    const endCarousel2 = 6;
    const displayedMembers2 = dataArr.slice(startCarousel2, endCarousel2);
    const startCarousel3 = 6;
    const endCarousel3 = 9;
    const displayedMembers3 = dataArr.slice(startCarousel3, endCarousel3);



    return (
        <>
            <div className="memberbox">
                <div className="memberdiv">
                    <h1>OUR TEAM MEMBERS</h1>
                    <div className="underline"></div>
                    <h3>Get to know the friendly faces behind the scenes, working together to promote literature and debate.</h3>
                </div>
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <div className="members">
                            {displayedMembers1.map((data, index) => (
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
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className="members">
                            {displayedMembers2.map((data, index) => (
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
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="members">
                            {displayedMembers3.map((data, index) => (
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
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}

export default Members;