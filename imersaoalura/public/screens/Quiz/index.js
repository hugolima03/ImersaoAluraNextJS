import React from 'react';

import db from '../../../db.json';

import LoadingWidget from '../../components/LoadingWidget';
import QuizBackground from '../../components/QuizBackground';
import GithubCorner from '../../components/GitHubCorner';
import BackgroundMask from '../../components/BackgroundMask';
import QuizContainer from '../../components/QuizContainer';
import QuestionWidget from '../../components/QuestionWidget';
import ResultWidget from '../../components/ResultWidget';

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [results, setResults] = React.useState([]);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const totalQuestions = db.questions.length;

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
    <QuizBackground backgroundImage={db.bg}>
      <BackgroundMask>
        {screenState === screenStates.RESULT && (
          <ResultWidget results={results} />
        )}
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
        <GithubCorner projectUrl="https://github.com/hugolima03" />
      </BackgroundMask>
    </QuizBackground>
  );
}
