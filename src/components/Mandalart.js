import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import GoalGrid from './GoalGrid';
import MainGoalGrid from './MainGoalGrid';

const MandalartBlock = Styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const Mandalart = ({ mandalart }) => {
  const { mainGoal, subGoals } = mandalart;
  return (
    <MandalartBlock>
      <MainGoalGrid mainGoal={mainGoal} subGoals={subGoals} />
      {subGoals.map((subGoal, i) => (
        <GoalGrid subGoal={subGoal} index={i} key={i} />
      ))}
    </MandalartBlock>
  );
};

Mandalart.propTypes = {
  mandalart: PropTypes.object,
};

export default Mandalart;
