import React, { useState } from "react";
import "./FAQ.css"; // Import your CSS file

const questions = [
  {
    id: 1,
    question: "Popular Articles",
    answer:
      "Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.",
  },
  {
    id: 2,
    question: "Fix problems & request removals",
    answer:
      "Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.",
  },
  {
    id: 3,
    question: "Browse the web",
    answer:
      "Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.",
  },
  {
    id: 4,
    question: "Search on your phone or tablet",
    answer:
      "Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.",
  },
];

function FAQ() {
  return (
    <div className="FAQcontainer">
      <div className="heading">How can we help you?</div>
      <section className="faq">
        {questions.map((item) => (
          <Question
            key={item.id}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </section>
    </div>
  );
}

const Question = (props) => {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <div className="question-wrapper" onClick={handleClick}>
      <div className="question" id={props.id}>
        <h4>{props.question}</h4>
        <button onClick={handleClick}>
          <svg
            className={isActive ? "active" : ""}
            viewBox="0 0 320 512"
            width="100"
            title="angle-down"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
          </svg>
        </button>
      </div>
      <div className={isActive ? "answer active" : "answer"}>
        {props.answer}
      </div>
    </div>
  );
};

export default FAQ;
