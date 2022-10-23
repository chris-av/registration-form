import React, { useState } from 'react';
import styled from 'styled-components';

import TextB from 'styles/TextB';

const InputPassword = ({ theme, handler }) => {
  const [ showPass, setShowPass ] = useState(false);

  const toggleShow = () => setShowPass(prevState => !prevState);

  return (
    <Container>
      <div className="textb">
        <input type={showPass ? 'text' : 'password' } required placeholder="password" onChange={handler} name="password"/>
        <div className={`show-password fas ${showPass ? "fa-eye" : "fa-eye-slash" }`} onClick={toggleShow}></div>
      </div>
    </Container>
  );
}


const Container = styled(TextB)`
  .show-password {
    position: absolute;
    right: 20px;
    line-height: 70px;
    color: #9d9d9d;
    cursor: pointer;
    user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
  }
`;


export default InputPassword;

