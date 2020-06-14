import React from 'react';
import Mandalart from '../components/Mandalart';
import { useSelector } from 'react-redux';

function MandalartContainer() {
  const { mainGoal, subGoals } = useSelector(({ mandalart }) => ({
    mainGoal: mandalart.mainGoal,
    subGoals: mandalart.subGoals,
  }));

  return <Mandalart mainGoal={mainGoal} subGoals={subGoals} />;
}

export default MandalartContainer;
