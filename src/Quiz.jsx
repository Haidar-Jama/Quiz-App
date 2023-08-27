
import React, { useContext, useState } from 'react';
import { QuizContext } from './QuizContext';
import { questions } from './questions';


const Quiz = () => {
  const { state, dispatch } = useContext(QuizContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      dispatch({ type: 'INCREMENT_SCORE' });
    }
   
    setCurrentQuestion(currentQuestion + 1);
  };

  const renderOptions = () => {
    const question = questions[currentQuestion];
    return question.options.map((option, index) => (
      <button className=  'bg-yellow-400 ml-6 py-2 px-3  flex-col items-center rounded-md hover:bg text-blue-900 text-base mt-5' key={index} onClick={() => handleAnswer(option === question.correctAnswer)}>
        {option}
      </button>
    ));
  };

  return ( 
    <div className=' item-center justify-center w-screen h-screen bg-blue-900 text-white pt-60 ' >
      <div className='text-center'>
          <><h1 className='text-3xl pb-3 uppercase' >Quiz App</h1></>
          
      
      {currentQuestion < questions.length ? (
        <>
          <h2 className='text-xl' >{questions[currentQuestion].question}</h2>
          {renderOptions()}
        </>
      ) : (
        <><p className='text-5xl mb-2' > Score: {state.score} </p>
        <p cl>Quiz completed!</p></>
      )}</div>
    </div>
  );
};

export default Quiz;
