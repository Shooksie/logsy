import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface GridManagementProps {}

const StyledGridManagement = styled.div`
  color: pink;
`;

export function GridManagement(props: GridManagementProps) {
  return (
    <StyledGridManagement>
      <h1>Welcome to grid-management!</h1>
    </StyledGridManagement>
  );
}

export default GridManagement;
