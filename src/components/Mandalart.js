import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import GoalGrid from './GoalGrid';

const MandalartBlock = Styled.div`
  width: 888px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const Mandalart = ({
  mainGoal,
  subGoals,
  onChangeMainGoal,
  onChangeSubGoal,
  onChangePlan,
}) => {
  return (
    <MandalartBlock>
      <GoalGrid
        gridIndex={4}
        goal={mainGoal}
        subGoals={subGoals}
        onChangeMainGoal={onChangeMainGoal}
        onChangeSubGoal={onChangeSubGoal}
      />
      {subGoals.map((subGoal, i) => (
        <GoalGrid
          gridIndex={i}
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
  onChangeMainGoal: PropTypes.func,
  onChangeSubGoal: PropTypes.func,
  onChangePlan: PropTypes.func,
};

export default React.memo(Mandalart);
