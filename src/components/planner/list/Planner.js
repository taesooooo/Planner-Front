import styled from 'styled-components';

const PlannerBlock = styled.div`
  margin: 100px auto;
  width: 80%;
  height: auto;
  min-height: 100%;
  padding-bottom: 170px;
`;

const Planner = ({ children }) => {
  return <PlannerBlock>{children}</PlannerBlock>;
};

export default Planner;
