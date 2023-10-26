import "./Events.css";
import { Modal } from "react-responsive-modal";
import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Events = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const onOpenModal1 = () => setOpen1(true);
  const onCloseModal1 = () => setOpen1(false);
  const onOpenModal2 = () => setOpen2(true);
  const onCloseModal2 = () => setOpen2(false);
  const onOpenModal3 = () => setOpen3(true);
  const onCloseModal3 = () => setOpen3(false);
  const onOpenModal4 = () => setOpen4(true);
  const onCloseModal4 = () => setOpen4(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="eventsection" id="events">
        <div className="eventheadingbox">
          {/* <div className="eventbgheading">EVENTS</div> */}
          <div className="eventheading">OUR EVENTS</div>
        </div>
        <div className="eventdetails" data-Aos="fade-up">
          It is an educational simulation and extracurricular activity in which
          students typically role-play as delegates to the United Nations and
          simulate UN committees and other international organizations. The goal
          of Model United Nations is to provide students with an opportunity to
          learn about diplomacy, international relations, and the workings of
          the United Nations while also developing skills in public speaking,
          negotiation, research, and critical thinking.
        </div>
        <div className="eventboxsection">
          <div className="eventbox" data-Aos="fade-right">
            <div className="left">    
                <img
                  src="./images/UNHRC.png"
                  alt=""
                  className="unhrcimg"
                  onClick={onOpenModal1}
                />
              <Modal
                open={open1}
                onClose={onCloseModal1}
                center
                styles={{
                  modal: {
                    maxHeight: "90%",
                    overflowY: "auto",
                    padding: "0",
                  },
                  closeButton: {
                    height: "30px",
                    backgroundColor: "#FFC72C",
                    border: "0",
                    outline: "0",
                  },
                }}
                closeOnOverlayClick={false}
              >
                <div className="agendabox">
                  <div className="agenda">
                    <div className="eventname">
                      UNITED NATIONS HUMAN RIGHTS COUNCIL
                    </div>
                    <div className="eventcontent">
                      Drafting a framework for safeguarding Uyghur
                      Muslims in China.
                    </div>
                    <div className="line"></div>
                  </div>
                  <div className="judgepanel">
                    <div className="panel">Adjudication Panel:</div>
                    <div className="judges">
                      <div className="judgebox">
                        <img src="images/judge/vimal-mishra.jpg" alt="" />
                        <div>Mr. Vimal Mishra</div>
                      </div>
                      <div className="judgebox">
                        <img src="images/judge/hitensir.jpg" alt="" />
                        <div>Mr. Hiten Chadha</div>
                      </div>
                      <div className="judgebox">
                        <img src="images/judge/praseemsir.jpg" alt="" />
                        <div>Mr. Praseem Jaiswal</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
            <div className="right">
              <div className="eventname">
                UNITED NATIONS HUMAN RIGHTS COUNCIL
              </div>
              <div className="eventcontent">
                AGENDA:Drafting a framework for safeguarding Uyghur
                Muslims in China.
              </div>
            </div>
          </div>
          <div className="eventbox alternateeventbox" data-Aos="fade-up">
            <div className="right">
              <div className="eventname">ALL INDIA POLITICAL PARTY MEET</div>
              <div className="eventcontent">
                AGENDA:Deliberation on the suggested electoral reforms in india
                in light of General Elections 2024.
              </div>
            </div>
            <div className="left">
              <img src="./images/aippm.png" alt="" onClick={onOpenModal2} />
              <Modal
                open={open2}
                onClose={onCloseModal2}
                center
                styles={{
                  modal: {
                    maxHeight: "90%",
                    overflowY: "auto",
                    padding: "0",
                  },
                  closeButton: {
                    height: "30px",
                    backgroundColor: "#FFC72C",
                    border: "0",
                    outline: "0",
                  },
                }}
                closeOnOverlayClick={false}
              >
                <div className="agendabox">
                  <div className="agenda">
                    <div className="eventname">
                      ALL INDIA POLITICAL PARTY MEET
                    </div>
                    <div className="eventcontent">
                      Deliberation on the suggested electoral reforms in india
                      in light of General Elections 2024.
                    </div>
                    <div className="line"></div>
                  </div>
                  <div className="judgepanel">
                    <div className="panel">Adjudication Panel:</div>
                    <div className="judges">
                      <div className="judgebox">
                        <img src="images/judge/abhinavsir.jpg" alt="" />
                        <div>Abhinav Narayan Jha</div>
                      </div>
                      <div className="judgebox">
                        <img src="images/judge/jinymaam.jpg" alt="" />
                        <div>Jiny Jawa</div>
                      </div>
                      <div className="judgebox">
                        <img src="images/judge/sankalpsir.jpg" alt="" />
                        <div>Sankalp Bharadwaj</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
          <div className="eventbox" data-Aos="fade-right">
            <div className="left">
              <img src="./images/unep.png" alt="" onClick={onOpenModal3} />
              <Modal
                open={open3}
                onClose={onCloseModal3}
                center
                styles={{
                  modal: {
                    maxHeight: "90%",
                    overflowY: "auto",
                    padding: "0",
                  },
                  closeButton: {
                    height: "30px",
                    backgroundColor: "#FFC72C",
                    border: "0",
                    outline: "0",
                  },
                }}
                closeOnOverlayClick={false}
              >
                <div className="agendabox">
                  <div className="agenda">
                    <div className="eventname">
                      UNITED NATIONS ENVIRONMENT PROGRAMME
                    </div>
                    <div className="eventcontent">
                      Deliberation upon sustainable extraction of metals and
                      minerals with special emphasis on criminalizing ‘ecocide’
                      in the forest ecosystem.
                    </div>
                    <div className="line"></div>
                  </div>
                  <div className="judgepanel">
                    <div className="panel">Adjudication Panel:</div>
                    <div className="judges">
                      <div className="judgebox">
                        <img src="images/judge/vinayak.JPG" alt="" />
                        <div>Vinayak</div>
                      </div>
                      <div className="judgebox">
                        <img src="images/judge/arshia.jpg" alt="" />
                        <div>Arshia Mehta</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
            <div className="right">
              <div className="eventname">
                UNITED NATIONS ENVIRONMENT PROGRAMME
              </div>
              <div className="eventcontent">
                AGENDA:Deliberation upon sustainable extraction of metals and
                minerals with special emphasis on criminalizing ‘ecocide’ in the
                forest ecosystem.
              </div>
            </div>
          </div>
          <div className="eventbox alternateeventbox" data-Aos="fade-up   ">
            <div className="right">
              <div className="eventname">INTERNATIONAL PRESS</div>
              <div className="eventcontent">
                AGENDA:The International Press in the JOUST'23 Will have
                Photographers and Reporters.
              </div>
            </div>
            <div className="left">
              <img src="./images/ip.png" alt="" onClick={onOpenModal4} />
              <Modal
                open={open4}
                onClose={onCloseModal4}
                center
                styles={{
                  modal: {
                    maxHeight: "90%",
                    overflowY: "auto",
                    padding: "0",
                  },
                  closeButton: {
                    height: "30px",
                    backgroundColor: "#FFC72C",
                    border: "0",
                    outline: "0",
                  },
                }}
                closeOnOverlayClick={false}
              >
                <div className="agendabox">
                  <div className="agenda">
                    <div className="eventname">INTERNATIONAL PRESS</div>
                    <div className="eventcontent">
                      The International Press in the JOUST'23 Will have
                      Photographers and Reporters.
                    </div>
                    <div className="line"></div>
                  </div>
                  <div className="judgepanel">
                    <div className="panel">Adjudication Panel:</div>
                    <div className="judges">
                      <div className="judgebox">
                        <img src="images/judge/vanyamaam.jpg" alt="" />
                        <div>Ms. Vanya Maken</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
