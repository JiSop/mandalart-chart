import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

import Color from '../styles/ColorPalette';

const SquareBlock = Styled.div`
  height: 88px;
  width: 88px;
  border: none;
  border-radius: 4px;
  margin: 4px;
  display: flex;
  align-items: center;
  background-color: ${Color.defaultTheme[0]};
  div {
    margin: 8px;
    max-height: 72px;
    width: 72px;
    text-align: center;
    /* font-size: 1rem; */
    /* font-weight: 600; */
    /* letter-spacing: 1.25px; */
  }
`;

const Square = ({ text }) => {
  return (
    <SquareBlock>
      <div>{text}</div>
    </SquareBlock>
  );
};

Square.propTypes = {
  text: PropTypes.string,
};

export default Square;
