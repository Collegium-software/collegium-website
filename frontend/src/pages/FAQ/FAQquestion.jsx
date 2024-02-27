import "../FAQ/FAQquestion.css"

const FAQquestion = (props) => {
  const { questionNumber, question, answer } = props;

  return ( 
    <div className="question-container">
      <h1>{questionNumber}</h1>
      <h3>{question}</h3>
      <p>{answer}</p>


    </div>

   );
}
 
export default FAQquestion;