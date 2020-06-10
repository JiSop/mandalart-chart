import React from 'react';
import { useSelector } from 'react-redux';
import Mandalart from '../components/Mandalart';

function MandalartContainer() {
  const mandalart = useSelector(state => state.mandalart);
  return <Mandalart mandalart={mandalart} />;
}

export default MandalartContainer;
