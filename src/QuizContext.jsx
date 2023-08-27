
import React, { createContext, useReducer } from 'react';

export const QuizContext = createContext();

const initialState = {
  score: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT_SCORE':
      return {
        ...state,
        score: state.score + 1,
      };
    default:
      return state;
  }
};

export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
