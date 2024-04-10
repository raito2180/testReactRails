import { FaCopy } from "react-icons/fa";

const AnswerSection = ({storedValues}) => {
  return (
    <>
      <hr className="hr-line" />
      <div className="answer-container">
        {storedValues.map((value, index) => {
          return (
        <div className="answer-section" key={index}>
          <p className="question">{value.question}</p>
          <p className="answer">{value.answer}</p>
          <div className="copy-icon">
            <FaCopy />
          </div>
        </div>
          );  
         })}
      </div>
    </>
  )
}

export default AnswerSection;