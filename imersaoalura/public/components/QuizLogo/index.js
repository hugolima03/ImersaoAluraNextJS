import styled from 'styled-components';
import React from 'react';
import db from '../../../db.json';

function Logo() {
  return <img src={db.quizLogo} width="320" alt="Studio Ghibli" />;
}

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;
