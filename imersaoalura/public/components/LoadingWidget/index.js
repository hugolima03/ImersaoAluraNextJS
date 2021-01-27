// import React from 'react';
import styled from 'styled-components';

// import Widget from '../Widget';

const LoadingWidgetBase = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;

  justify-content: center;
  align-items: center;

  background-color: rgba(63, 81, 181, .5);
`;

function LoadingWidget() {
  return (
    <LoadingWidgetBase>ANIMAÇÃO</LoadingWidgetBase>
  );
}

export default LoadingWidget;
