import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import Square from './Square';

const MainGoalGridBlock = Styled.div`
  height: 288px;
  width: 288px;
  margin: 4px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  order: 5;
`;

const MainGoalGrid = ({ mainGoal, subGoals }) => {
  return (
    <MainGoalGridBlock>
      <Square text={mainGoal} type="goal" index={4} />
      {subGoals.map((subGoal, i) => (
        <Square
          text={subGoal.goal}
          type="subGoal"
          index={i}
          key={subGoal.goal + i}
        />
      ))}
    </MainGoalGridBlock>
  );
};

MainGoalGrid.propTypes = {
  mainGoal: PropTypes.string,
  subGoals: PropTypes.array,
};

export default MainGoalGrid;
