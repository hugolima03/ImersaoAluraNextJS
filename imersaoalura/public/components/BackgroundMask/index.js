import styled from 'styled-components';

const BackgroundMask = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background: linear-gradient(to left, rgba(255,0,0,0) 10%,rgba(0,0,0,.8) 50%);
  flex: 1;
  @media screen and (max-width: 500px) {
    height: 100%;
    background-image: none;
    &:after {
      content: "";
      background-size: cover;
    background-position: center;
      background-image:
        linear-gradient(transparent, ${({ theme }) => theme.colors.mainBg}),
        url(${({ backgroundImage }) => backgroundImage});
      display: block;
      width: 100%;
      height: 210px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;

export default BackgroundMask;
