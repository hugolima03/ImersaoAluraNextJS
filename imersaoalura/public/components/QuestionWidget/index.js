import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import Widget from '../Widget';
import Button from '../Button';

function QuestionWidget({ question, totalQuestions, questionIndex, onSubmit }) {
  // const totalQuestions = db.questions.length;
  const router = useRouter();
  const questionId = `question__${questionIndex}`;
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
        <form
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit();
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
              >
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  type="radio"
                  name={questionId}
                />
                {alternative}
              </Widget.Topic>
            );
          })}
          <Button type="submit">Confirmar</Button>
        </form>
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
};

export default QuestionWidget;
