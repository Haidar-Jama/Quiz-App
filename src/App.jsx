
import React from 'react';
import { QuizProvider } from './QuizContext';
import Quiz from './Quiz';

const App = () => {
  return (
    <QuizProvider >
      <Quiz  />
    </QuizProvider>
  );
};

export default App;
