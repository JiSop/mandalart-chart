import React, { useState } from 'react';
import Styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Square from './Square';
import Modal from './Modal';
import SquareButton from './SquareButton';

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

const GoalGrid = ({ id, goal, plans, onChangePlan }) => {
  const [modal, setModal] = useState(false);
  return (
    <GoalGridBlock index={id}>
      <SquareButton role="subGoal" onClick={() => setModal(true)}>
        {goal}
      </SquareButton>
      {modal && (
        <Modal
          goal={goal}
          plans={plans}
          gIndex={id}
          onChangePlan={onChangePlan}
          setModal={setModal}
        />
      )}
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
  onChangePlan: PropTypes.func,
};

export default React.memo(GoalGrid);
