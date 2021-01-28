import { useState } from 'react';
import Lottie from 'react-lottie';
import styled from 'styled-components';
import animationData from './41791-loading-wrong.json';

const WrongAnswerBase = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;

  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.6);

  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h2 {
    font-family: 'Poppins', sans-serif;
  }

  @media screen and (max-width: 500px) {
    display: contents;

    div {
      margin-left: -29px;
      margin-top: 25px;
    }
  }
`;

function WrongAnswer() {
  const [animationState] = useState({
    isStoped: false,
    isPaused: false,
  });
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <WrongAnswerBase>
      <div>
        <Lottie
          options={defaultOptions}
          width={300}
          height={300}
          isStopped={animationState.isStoped}
          isPaused={animationState.isPaused}
        />
      </div>
    </WrongAnswerBase>
  );
}

export default WrongAnswer;
