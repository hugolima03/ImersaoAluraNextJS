import React from 'react';

import db from '../db.json';

import LoadingWidget from '../public/components/LoadingWidget';
import QuizBackground from '../public/components/QuizBackground';
import GithubCorner from '../public/components/GitHubCorner';
import BackgroundMask from '../public/components/BackgroundMask';
import QuizContainer from '../public/components/QuizContainer';
import QuestionWidget from '../public/components/QuestionWidget';
import ResultWidget from '../public/components/ResultWidget';

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.RESULT);
  const [results, setResults] = React.useState([]);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const totalQuestions = db.questions.length;

  function addResult(result) {
    setResults([...results, result]);
  }

  React.useEffect(() => {
    setTimeout(() => {
      // setScreenState(screenStates.QUIZ);
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
    <QuizBackground backgroundImage={db.bg}>
      <BackgroundMask>
        {screenState === screenStates.LOADING && <LoadingWidget />}
        <QuizContainer>
          {screenState === screenStates.QUIZ && (
            <QuestionWidget
              question={db.questions[questionIndex]}
              totalQuestions={db.questions.length}
              questionIndex={questionIndex}
              onSubmit={handleSubmitQuiz}
              addResult={addResult}
            />
          )}
        </QuizContainer>
        {screenState === screenStates.RESULT && (
          <ResultWidget results={results} />
        )}
        <GithubCorner projectUrl="https://github.com/hugolima03" />
      </BackgroundMask>
    </QuizBackground>
  );
}
