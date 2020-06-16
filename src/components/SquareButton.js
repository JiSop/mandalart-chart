import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Color from '../styles/ColorPalette';
import Typo from '../styles/Typo';

const StyledButton = styled.button`
  height: 88px;
  width: 88px;
  outline: none;
  border: none;
  border-radius: 4px;
  margin: 4px;
  order: 4;
  cursor: pointer;
  text-align: center;
  word-break: keep-all;
  color: ${Color.fontColor};
  ${Typo.subGoalPlan};
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
`;

/**
 * <SquareButton></SquareButton>
 * @param {object} props
 * @param {string} props.role - goal | subGoal
 */
const SquareButton = props => {
  const { role } = props;
  return <StyledButton {...props} role={role} />;
};

SquareButton.propTypes = {
  role: PropTypes.string,
};

export default React.memo(SquareButton);
