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

const Mandalart = ({ mainGoal, subGoals, onChangePlan }) => {
  return (
    <MandalartBlock>
      <MainGoalGrid mainGoal={mainGoal} subGoals={subGoals} />
      {subGoals.map((subGoal, i) => (
        <GoalGrid
          id={i}
          goal={subGoal.goal}
          plans={subGoal.plans}
          onChangePlan={onChangePlan}
          key={subGoal.id}
        />
      ))}
    </MandalartBlock>
  );
};

Mandalart.propTypes = {
  mainGoal: PropTypes.string,
  subGoals: PropTypes.array,
  onChangePlan: PropTypes.func,
};

export default Mandalart;
