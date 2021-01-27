import { useState } from 'react';
import Lottie from 'react-lottie';
import styled from 'styled-components';
import animationData from './loadingCat.json';

const LoadingWidgetBase = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;

  justify-content: center;
  align-items: center;

  background-color: rgba(63, 81, 181, 0.5);

  div {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h2 {
    display: flex;
    justify-content: center;
    margin-top: 0;
    font-family: 'Poppins', sans-serif;
  }
`;

function LoadingWidget() {
  const [animationState] = useState({
    isStoped: false,
    isPaused: false,
  });
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <LoadingWidgetBase>
      <div>
        <Lottie
          options={defaultOptions}
          width={300}
          height={300}
          isStopped={animationState.isStoped}
          isPaused={animationState.isPaused}
        />
        <h2>Carregando...</h2>
      </div>
    </LoadingWidgetBase>
  );
}

export default LoadingWidget;
