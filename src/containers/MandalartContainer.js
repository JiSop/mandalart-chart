import React from 'react';
import Mandalart from '../components/Mandalart';
import { useSelector, useDispatch } from 'react-redux';
import { changePlan } from '../reducks/mandalart';

function MandalartContainer() {
  const dispatch = useDispatch();
  const { mainGoal, subGoals } = useSelector(({ mandalart }) => ({
    mainGoal: mandalart.mainGoal,
    subGoals: mandalart.subGoals,
  }));
  const onChangePlan = (e, id) => {
    const { value, name } = e.target;
    if (/\n/g.test(value)) return;
    dispatch(changePlan({ id, name, value }));
  };
  return (
    <Mandalart
      mainGoal={mainGoal}
      subGoals={subGoals}
      onChangePlan={onChangePlan}
    />
  );
}

export default MandalartContainer;
