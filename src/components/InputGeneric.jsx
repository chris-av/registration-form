import React from 'react';
import styled from 'styled-components';

import TextB from 'styles/TextB';


const InputGeneric = ({ theme, handler, name }) => {
  return (
    <Container>
      <div className="textb">
        <input type="text" required placeholder={`${name}`} onChange={handler} name={`${name}`}/>
      </div>
    </Container>
  );
}


const Container = styled(TextB)`
  padding: 10px 0;
`;

export default InputGeneric;

