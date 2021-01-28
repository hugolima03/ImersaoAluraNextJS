import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Confetti from 'react-confetti';
import useWindowSize from '@rooks/use-window-size';

const ResultWidgetBase = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  max-width: 320px;
  height: 100vh;
  margin: 0 auto;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  overflow: hidden;

  h1,
  h2,
  h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 42x;
    font-weight: 700;
    line-height: 1.5;
    margin-bottom: 0;
  }
  p {
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 400;
  }
`;

const niceResult = styled.div``;

function ResultWidget({ results }) {
  const router = useRouter();
  const name = router.query.name.toUpperCase();
  const { width, height } = useWindowSize();

  return (
    <>
      <Confetti
        width={width}
        height={height}
        recycle={false}
      />
      <ResultWidgetBase>
        <niceResult>
          <h1>
            PARABÉNS
            <br />
            {` ${name}`}
            🎉🥳!
          </h1>
          <p>
            Você acertou
            {' '}
            {results.filter((x) => x).length}
            {' '}
            perguntas
          </p>
          <ul>
            {results.map((result, index) => (
              <li key={`result__${result}`}>
                #
                {index + 1}
                Resultado:
                {result === true ? 'Acertou' : 'Errou'}
              </li>
            ))}
          </ul>
        </niceResult>
      </ResultWidgetBase>
    </>
  );
}

ResultWidget.propTypes = {
  results: PropTypes.arrayOf.isRequired,
};

export default ResultWidget;
