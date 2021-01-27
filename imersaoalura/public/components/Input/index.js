import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputBase = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  border: 1px solid gray;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: transparent;
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: 0;
  margin-bottom: 20px;
`;

function Input({ onChange, placeholder, name }) {
  return (
    <div>
      <InputBase onChange={onChange} placeholder={placeholder} name={name} />
    </div>
  );
}
Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default Input;
