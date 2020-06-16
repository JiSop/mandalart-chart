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
  p {
    margin: 0px;
    margin-left: 8px;
    margin-right: 8px;
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
    props.index &&
    css`
      order: ${props.index};
    `}
`;

const StyledTextarea = styled.textarea`
  padding: 0px;
  resize: none;
  outline: none;
  overflow: hidden;
  border: none;
  border-radius: 4px;
  width: 72px;
  margin: 0px;
  margin-left: 8px;
  margin-right: 8px;
  background-color: inherit;
  text-align: center;
  word-break: keep-all;
  color: ${Color.fontColor};
`;

// const StyledDiv = styled.div`
//   width: 72px;
//   max-height: 72px;
//   margin: 8px;
//   color: ${Color.fontColor};
//   background-color: inherit;
//   ${Typo.subGoalPlan};
// `;

const Square = ({ role, index, text, gIndex, onChangePlan }) => {
  return (
    <SquareBlock role={role} index={index}>
      {onChangePlan && (
        <StyledTextarea
          value={text}
          name={index}
          index={index}
          placeholder="세부&#13;&#10;계획"
          onChange={e => onChangePlan(e, gIndex)}
          maxLength="16"
        />
      )}
      {!onChangePlan && <p>{text}</p>}
    </SquareBlock>
  );
};

Square.propTypes = {
  role: PropTypes.string,
  index: PropTypes.number,
  text: PropTypes.string,
  gIndex: PropTypes.number,
  onChangePlan: PropTypes.func,
};

export default React.memo(Square);
