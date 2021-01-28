import React from 'react';
import PropTypes from 'prop-types';
import Widget from '../Widget';

function ResultWidget({ results }) {
  return (
    <Widget>
      <Widget.Header>Tela de resultado...</Widget.Header>
      <Widget.Content>
        <p>
          Você acertou
          {results.reduce((somatoria) => {

          })}
          perguntas
        </p>
        <ul>
          {results.map((result) => (
            <li>
              #01 Resultado:
              {result === true ? 'Acertou' : 'Errou'}
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
}

ResultWidget.propTypes = {
  results: PropTypes.objectOf.isRequired,
};

export default ResultWidget;
