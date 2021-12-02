import React from 'react';
import styled from 'styled-components';


const CompletionBar = ({ complete, total }) => {
  return (
    <Container complete={complete} total={total}>
      <div className="bar"></div>
    </Container>
  );
}


const Container = styled.div`
  display: flex;
  background-color: white;
  border: solid 1px grey;
  width: 100%;
  height: 20px;
  border-radius: 20px;
 
  .bar {
    background-color: blue;
    border-radius: 20px;
    width: ${props => Math.round((props.complete/props.total)*100) }%;
    transition: width 0.5s ease;
  }

`;


export default CompletionBar;

