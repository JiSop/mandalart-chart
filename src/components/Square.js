import React from 'react';
import Styled from 'styled-components';

import Color from '../styles/ColorPalette';

const SquareBlock = Styled.div`
  height: 88px;
  width: 88px;
  padding: 8px;
  border: none;
  border-radius: 4px;
  background-color: ${Color.defaultTheme[0]};
  p {
    margin: 0px;
    text-align: center;
    /* font-size: 1rem; */
    /* font-weight: 600; */
    /* letter-spacing: 1.25px; */
  }
`;

const Square = () => {
  return (
    <SquareBlock>
      <p>안녕</p>
    </SquareBlock>
  );
};

export default Square;
