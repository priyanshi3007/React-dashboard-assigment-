// src/components/ChartContainer.js
import React from 'react';
import styled from 'styled-components';

const ChartContainerWrapper = styled.div`
  background: #2e2e2e;
  border-radius: 15px;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 600px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    width: 45%;
  }

  @media (min-width: 1200px) {
    width: 30%;
  }
`;

const Title = styled.h2`
  color: #4ecca3;
  text-align: center;
  margin-bottom: 20px;
`;

const ChartContainer = ({ title, children }) => (
  <ChartContainerWrapper>
    <Title>{title}</Title>
    {children}
  </ChartContainerWrapper>
);

export default ChartContainer;
