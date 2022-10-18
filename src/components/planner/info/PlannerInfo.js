import styled from 'styled-components';

const PlannerInfoBlock = styled.div`
  margin: 75px auto;
  width: 80%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  border: 1px solid red;
`;

const PlannerInfo = ({ children }) => {
  return <PlannerInfoBlock>{children}</PlannerInfoBlock>;
};

export default PlannerInfo;
