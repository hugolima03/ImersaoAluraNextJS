/* eslint-disable react/prop-types */
import React from 'react';

import LoadingWidget from '../../public/components/LoadingWidget';
import QuizBackground from '../../public/components/QuizBackground';
import GithubCorner from '../../public/components/GitHubCorner';
import BackgroundMask from '../../public/components/BackgroundMask';
import QuizContainer from '../../public/components/QuizContainer';
import QuestionWidget from '../../public/components/QuestionWidget';
import ResultWidget from '../../public/components/ResultWidget';

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage({ externalQuestions, externalBg }) {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [results, setResults] = React.useState([]);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const totalQuestions = externalQuestions.length;
  const bg = externalBg;

  function addResult(result) {
    setResults([...results, result]);
  }

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 2 * 1000);
  }, []);

  function handleSubmitQuiz() {
    const nexQuestion = questionIndex + 1;
    if (nexQuestion < totalQuestions) {
      setCurrentQuestion(questionIndex + 1);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={bg}>
      <BackgroundMask>
        {screenState === screenStates.RESULT && (
          <ResultWidget results={results} />
        )}
        {screenState === screenStates.LOADING && <LoadingWidget />}
        <QuizContainer>
          {screenState === screenStates.QUIZ && (
            <QuestionWidget
              question={externalQuestions[questionIndex]}
              totalQuestions={externalQuestions.length}
              questionIndex={questionIndex}
              onSubmit={handleSubmitQuiz}
              addResult={addResult}
            />
          )}
        </QuizContainer>
        <GithubCorner projectUrl="https://github.com/hugolima03" />
      </BackgroundMask>
    </QuizBackground>
  );
}
