import React from 'react';
import Styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Square from './Square';

const GoalGridBlock = Styled.div`
  height: 288px;
  width: 288px;
  margin: 4px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  ${props =>
    props.index &&
    css`
      order: ${props.index};
    `}
`;

const GoalGrid = ({ subGoal, index }) => {
  const { goal, plans } = subGoal;
  return (
    <GoalGridBlock index={index}>
      <Square text={goal} type="subGoal" index={4} />
      {plans.map((plan, i) => (
        <Square text={plan} key={plan + i} index={i} />
      ))}
    </GoalGridBlock>
  );
};

GoalGrid.propTypes = {
  subGoal: PropTypes.object,
  index: PropTypes.number,
};

export default GoalGrid;
