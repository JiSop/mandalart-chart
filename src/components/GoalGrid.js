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

const GoalGrid = ({ id, goal, plans }) => {
  return (
    <GoalGridBlock index={id}>
      <Square text={goal} type="subGoal" index={4} />
      {plans.map((plan, i) => (
        <Square text={plan} index={i} key={i} />
      ))}
    </GoalGridBlock>
  );
};

GoalGrid.propTypes = {
  id: PropTypes.number,
  goal: PropTypes.string,
  plans: PropTypes.array,
};

export default GoalGrid;
