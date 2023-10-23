import './Members.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

 const dataArr = [
     {
         name: "SHRINJAL GUPTA",
         img: "/images/team/Shrinjal.jpg",
         role: "Director ",
         social: ["", "", ""]
     },
     {
         name: "RADHIKA JANGRA",
         img: "/images/team/radhhika.png",
         role: "Chief of executions",
         social: ["", "", ""]
     },
     {
         name: "GAUTAM KUMAR",
         img: "/images/",
         role: "Senior Advisor",
         social: ["", "", ""]
     },
     {
         name: "VANSHAJ JAIMAN",
         img: "/images/team/Vanshaj Sir.jpeg.jpg",
         role: "Senior Advisor",
         social: ["", "", ""]
     },
     {
         name: "RIKA VERMA",
         img: "/images/team/Rika Maam.JPG",
         role: "Senior Advisor",
         social: ["", "", ""]
     },
     {
         name: "MANAS MITTAL",
         img: "/images/team/Manas.jpg",
         role: "Head of Delegate",
         social: ["", "", ""]
     },
     {
         name: "YUUV MITTAL",
         img: "/images/team/Yuuv.jpg",
         role: "Head of Delegate",
         social: ["", "", ""]
     },
     {
         name: "ANIMA SHUKLA",
         img: "/images/team/Anima.jpeg.jpg",
         role: "Head of Delegate",
         social: ["", "", ""]
     },
     {
         name: "MRADUL VARSHNEY",
         img: "/images/team/Mradul.jpeg.jpg",
         role: "Head of Digital Design",
         social: ["", "", ""]
     },
     {
         name: "VAIBHAV KUMAR",
         img: "/images/team/",
         role: "Head of Digital Design",
         social: ["", "", ""]
     },
     {
         name: "SAUMYA BANSAL",
         img: "/images/team/Saumya.jpeg.jpg",
         role: "Head of Digital Design",
         social: ["", "", ""]
     },
     {
         name: "AYUSH SWAMI",
         img: "/images/team/Ayush.jpg",
         role: "Head of Cinematics",
         social: ["", "", ""]
     },
     {
         name: "ASHWIN SETHI",
         img: "/images/team/Ashwin.jpg",
         role: "Head of Creative",
         social: ["", "", ""]
     },
     {
         name: "SHRUTI SINGH",
         img: "/images/team/Shruti.jpg",
         role: "Head of Creative",
         social: ["", "", ""]
     },
     {
         name: "PARTH TANDON",
         img: "/images/team/Parth Sir.jpg",
         role: "Joust Advisor",
         social: ["", "", ""]
     },
     {
         name: "PRARIT AGARWAL",
         img: "/images/team/Prerit Sir.jpg",
         role: "Joust Advisor",
         social: ["", "", ""]
     },
     {
         name: "AMISH MISHRA",
         img: "/images/team/amish Sir.jpg",
         role: "Joust Advisor",
         social: ["", "", ""]
     }
 ];

const chunkArray = (array, chunkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const Members = () => {
  const chunkedData = chunkArray(dataArr, 3);

  return (
    <div className="memberbox">
      <div className="memberdiv">
        <h1>OUR TEAM MEMBERS</h1>
        <div className="underline"></div>
        <h3>Get to know the friendly faces behind the scenes, working together to promote literature and debate.</h3>
      </div>
      <Carousel data-bs-theme="dark">
        {chunkedData.map((chunk, index) => (
          <Carousel.Item key={index}>
            <div className="members">
              {chunk.map((data, innerIndex) => (
                <div className="profile" key={innerIndex}>
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
        ))}
      </Carousel>
    </div>
  );
};

export default Members;
