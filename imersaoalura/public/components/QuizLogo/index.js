import styled from "styled-components";
import db from "../../../db.json";

import React from "react";

function Logo({ className }) {
  return <img src={db.quizLogo} width="320"/>;
}

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;
