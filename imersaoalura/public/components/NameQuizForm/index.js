import styled from 'styled-components';

const NameQuizForm = styled.form`
  input {
    display: block;
    width: 100%;
    height: 38px;
    margin-bottom: 25px;
    background-color: transparent;
    outline: none;
    color: white;

    border: 1px solid gray;
    padding: 0 15px;
    border-radius: 3.5px;
  }
  input::placeholder {
    font-family: 'Poppins', sans-serif;
  }

  button {
    display: block;
    width: 100%;
    height: 36px;
    border: none;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 3.5px;

    color: #fff;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    text-align: center;

    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;

    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  }

  button:disabled {
    background-color: gray;
  }
`;

export default NameQuizForm;
