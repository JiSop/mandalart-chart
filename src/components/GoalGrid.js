import React from 'react';
import Styled from 'styled-components';

import Square from './Square';

const GoalGridBlock = Styled.div`
  height: 288px;
  margin: 4px;
  display: flex;
  flex-direction: column;
`;

const GridRow = Styled.div`
  width: 288px;
  display: flex;
`;

const GoalGrid = () => {
  return (
    <GoalGridBlock>
      <GridRow>
        <Square text="1" />
        <Square text="2" />
        <Square text="3" />
      </GridRow>
      <GridRow>
        <Square text="4" type="subGoal" />
        <Square text="5" type="goal" />
        <Square text="6" />
      </GridRow>
      <GridRow>
        <Square text="7" />
        <Square text="8" />
        <Square text="9" />
      </GridRow>
    </GoalGridBlock>
  );
};

export default GoalGrid;
