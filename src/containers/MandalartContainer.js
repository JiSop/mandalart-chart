import React from 'react';
import Mandalart from '../components/Mandalart';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeMainGoal,
  changeSubGoal,
  changePlan,
} from '../reducks/mandalart';

function MandalartContainer() {
  const dispatch = useDispatch();
  const { mainGoal, subGoals } = useSelector(({ mainGoal, subGoals }) => ({
    mainGoal,
    subGoals,
  }));

  const onChangeMainGoal = e => {
    const { value } = e.target;
    if (/\n/g.test(value)) return;
    dispatch(changeMainGoal(value));
  };
  const onChangeSubGoal = (e, index) => {
    const { value } = e.target;
    if (/\n/g.test(value)) return;
    dispatch(changeSubGoal({ index, value }));
  };
  const onChangePlan = (e, id) => {
    const { value, name } = e.target;
    if (/\n/g.test(value)) return;
    dispatch(changePlan({ id, name, value }));
  };
  return (
    <Mandalart
      mainGoal={mainGoal}
      subGoals={subGoals}
      onChangeMainGoal={onChangeMainGoal}
      onChangeSubGoal={onChangeSubGoal}
      onChangePlan={onChangePlan}
    />
  );
}

export default MandalartContainer;
