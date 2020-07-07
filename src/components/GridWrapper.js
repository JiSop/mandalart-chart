import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const GridWrapperBlock = styled.div`
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

const GridWrapper = ({ children }) => (
  <GridWrapperBlock>{children}</GridWrapperBlock>
);

GridWrapper.propTypes = {
  children: PropTypes.elementType,
};

export default GridWrapper;
