import React, { useState } from 'react';
import Styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Square from './Square';
import SquareButton from './SquareButton';
import Modal from './Modal';

const GoalGridBlock = Styled.div`
  height: 288px;
  width: 288px;
  margin: 4px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  ${props =>
    props.gridIndex &&
    css`
      order: ${props.gridIndex};
    `}
`;

const GoalGrid = ({
  gridIndex,
  goal,
  plans,
  subGoals,
  onChangeMainGoal,
  onChangeSubGoal,
  onChangePlan,
}) => {
  const [modal, setModal] = useState(false);
  const role = subGoals ? 'goal' : 'subGoal';
  return (
    <GoalGridBlock gridIndex={gridIndex}>
      <SquareButton role={role} onClick={() => setModal(true)}>
        {goal}
      </SquareButton>
      {subGoals &&
        subGoals.map((subGoal, i) => (
          <Square
            role="subGoal"
            text={subGoal.goal}
            squareIndex={i}
            key={subGoal.id}
          />
        ))}
      {plans &&
        plans.map((plan, i) => <Square text={plan} squareIndex={i} key={i} />)}
      {modal && (
        <Modal
          gridIndex={gridIndex}
          goal={goal}
          plans={plans || subGoals}
          setModal={setModal}
          onChangeMainGoal={onChangeMainGoal}
          onChangeSubGoal={onChangeSubGoal}
          onChangePlan={onChangePlan}
        />
      )}
    </GoalGridBlock>
  );
};

// GoalGrid.defaultProps = {
//   gridIndex: 4,
// };

GoalGrid.propTypes = {
  gridIndex: PropTypes.number,
  goal: PropTypes.string,
  plans: PropTypes.array,
  subGoals: PropTypes.array,
  onChangeMainGoal: PropTypes.func,
  onChangeSubGoal: PropTypes.func,
  onChangePlan: PropTypes.func,
};

export default React.memo(GoalGrid);
