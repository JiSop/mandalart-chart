import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Color from '../styles/ColorPalette';
import Typo from '../styles/Typo';

const SquareBlock = styled.div`
  height: 88px;
  width: 88px;
  border: none;
  border-radius: 4px;
  margin: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  word-break: keep-all;
  color: ${Color.fontColor};
  background-color: ${Color.defaultTheme[0]};
  ${Typo.subGoalPlan}
  p, textarea {
    margin: 0px;
    margin-left: 8px;
    margin-right: 8px;
    width: 72px;
  }
  textarea {
    padding: 0px;
    resize: none;
    outline: none;
    overflow: hidden;
    border: none;
    border-radius: 4px;
    background-color: inherit;
    text-align: center;
    word-break: keep-all;
    color: ${Color.fontColor};
  }
  ${props =>
    props.role === 'goal' &&
    css`
      background-color: ${Color.defaultTheme[2]};
      ${Typo.goal};
    `}
  ${props =>
    props.role === 'subGoal' &&
    css`
      background-color: ${Color.defaultTheme[1]};
      ${Typo.subGoal};
    `}
  ${props =>
    props.gridIndex &&
    css`
      order: ${props.gridIndex};
    `}
`;

const Square = ({
  role,
  text,
  squareIndex,
  onChange,
  placeholder,
  maxLength,
}) => {
  return onChange ? (
    <SquareBlock role={role} gridIndex={squareIndex}>
      <textarea
        value={text}
        onChange={onChange}
        maxLength={maxLength}
        placeholder={placeholder}
        name={squareIndex}
      />
    </SquareBlock>
  ) : (
    <SquareBlock role={role} gridIndex={squareIndex}>
      <p>{text}</p>
    </SquareBlock>
  );
};

// Square.defaultProps = {
//   squareIndex: 4,
// };

Square.propTypes = {
  role: PropTypes.string,
  squareIndex: PropTypes.number,
  text: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  maxLength: PropTypes.string,
};

export default React.memo(Square);
