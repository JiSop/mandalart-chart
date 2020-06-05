import React from 'react';
import styled from 'styled-components';

const SquareBlock = styled.div`
  height: 88px;
  width: 88px;
  padding: 8px;
  border: none;
  border-radius: 4px;
  background-color: #ebedf0;
  p {
    margin: 0px;
  }
  /* font-size: 1rem; */
  /* font-weight: 600; */
  /* letter-spacing: 1.25px; */
  /* text-align: center; */
`;

const Square = () => {
  return (
    <SquareBlock>
      <p>text</p>
    </SquareBlock>
  );
};

export default Square;
