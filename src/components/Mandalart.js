import React from 'react';

import GoalGrid from './GoalGrid';

const Mandalart = () => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <GoalGrid />
        <GoalGrid />
        <GoalGrid />
      </div>
      <div style={{ display: 'flex' }}>
        <GoalGrid />
        <GoalGrid />
        <GoalGrid />
      </div>
      <div style={{ display: 'flex' }}>
        <GoalGrid />
        <GoalGrid />
        <GoalGrid />
      </div>
    </>
  );
};

export default Mandalart;
