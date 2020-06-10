import React from 'react';
import PropTypes from 'prop-types';
import Styled, { css } from 'styled-components';

import Color from '../styles/ColorPalette';
import Typo from '../styles/Typo';

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
    width: 72px;
    max-height: 72px;
    margin: 8px;
    text-align: center;
    color: ${Color.fontColor};
    ${Typo.subGoalPlan};
  }
  ${props =>
    props.type === 'goal'
      ? css`
          background-color: ${Color.defaultTheme[2]};
          div {
            ${Typo.goal};
          }
        `
      : props.type === 'subGoal'
      ? css`
          background-color: ${Color.defaultTheme[1]};
          div {
            ${Typo.subGoal};
          }
        `
      : ''}
  ${props =>
    props.index &&
    css`
      order: ${props.index};
    `}
`;

const Square = props => {
  const { text, type, index } = props;
  return (
    <SquareBlock type={type} index={index}>
      <div>{text}</div>
    </SquareBlock>
  );
};

Square.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  index: PropTypes.number,
};

export default React.memo(Square);
