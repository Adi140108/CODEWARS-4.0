import React, { useState } from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "Is there a registration fee?",
      answer: "Yes, participation in CodeWars 4.0 needs minimal registration fees ."
    },
    {
      question: "Who can participate?",
      answer: "The event is open to all students from any branch or year who have a knack for coding or want to test their skills."
    },
    {
      question: "Do I need to be an expert in coding?",
      answer: "Not at all! The rounds are designed to test logic and problem-solving skills across different difficulty levels. Beginners are encouraged to participate and learn."
    },
    {
      question: "What is the team size?",
      answer: "You can participate solo or in a team of up to 2 members."
    },
    {
      question: "What platforms will be used?",
      answer: "Round 1 will be on Menti, while Rounds 2 and 3 will be conducted on a specific coding platform which will be announced on the day of the event."
    },
    {
      question: "What should I bring?",
      answer: "Bring your laptop and charger. Internet connectivity will be provided, but having your own backup is recommended."
    },
    {
      question: "Is it necessary to register online?",
      answer: "No, online registration is not mandatory. You can also do on-spot registration at the venue on the day of the event."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="icon">{activeIndex === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .section-padding {
          padding: 100px 0;
          background-color: transparent;
        }

        .faq-container {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .faq-item {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .faq-item:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--primary-color);
        }

        .faq-item.active {
          border-color: var(--primary-color);
          background: rgba(0, 243, 255, 0.02);
        }

        .faq-question {
          padding: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .faq-question h3 {
          font-size: 1.1rem;
          color: #fff;
          margin: 0;
          font-weight: 500;
        }

        .icon {
          font-size: 1.5rem;
          color: var(--primary-color);
          font-weight: 700;
          min-width: 24px;
          text-align: center;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-out;
          padding: 0 1.5rem;
        }

        .faq-item.active .faq-answer {
          max-height: 200px;
          padding-bottom: 1.5rem;
        }

        .faq-answer p {
          color: #aaa;
          line-height: 1.6;
          margin: 0;
        }
      `}</style>
    </section>
  );
};

export default FAQ;
