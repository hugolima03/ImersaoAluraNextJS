import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const ResultWidgetBase = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: 0 auto;
  background-color: #1c1814;

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
    font-size: 14px;
    font-weight: 400;
  }
`;

const niceResult = styled.div``;

function ResultWidget({ results }) {
  const router = useRouter();
  return (
    <ResultWidgetBase>
      <niceResult>
        <h1>
          PARABÈNS
          {` ${router.query.name.toUpperCase()}`}
          !
        </h1>
        <p>
          Você acertou
          {results.filter((x) => x).length}
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
  );
}

ResultWidget.propTypes = {
  results: PropTypes.arrayOf.isRequired,
};

export default ResultWidget;
