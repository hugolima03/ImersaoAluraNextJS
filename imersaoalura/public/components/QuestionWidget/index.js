import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import Widget from '../Widget';
import Button from '../Button';
import AlternativesForm from '../AlternativesForm';
import CorrectAnswer from '../CorrectAnswer';
import WrongAnswer from '../WrongAnswer';

function QuestionWidget({
  question, totalQuestions, questionIndex, onSubmit, addResult,
}) {
  const router = useRouter();
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const [isQuestSubmited, setIsQuestionSubmited] = React.useState(false);
  const isCorrect = selectedAlternative === question.answer;
  const questionId = `question__${questionIndex}`;
  const hasAlternativeSelected = selectedAlternative !== undefined;
  return (
    <Widget>
      <Widget.Header>
        <h1>
          Olá
          {` ${router.query.name}`}
          !
          <br />
          Pergunta
          {` ${questionIndex + 1} `}
          de
          {` ${totalQuestions}`}
        </h1>
      </Widget.Header>
      <img
        alt="descricao"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>
        <AlternativesForm
          onSubmit={(event) => {
            event.preventDefault();
            setIsQuestionSubmited(true);
            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setIsQuestionSubmited(false);
              setSelectedAlternative(undefined);
            }, 3 * 1000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;
            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestSubmited && alternativeStatus}
              >
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}
          <Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Button>
          {isQuestSubmited && isCorrect && <CorrectAnswer />}
          {isQuestSubmited && !isCorrect && <WrongAnswer />}
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
}

QuestionWidget.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  question: PropTypes.object.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  questionIndex: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
  addResult: PropTypes.func.isRequired,
};

export default QuestionWidget;
