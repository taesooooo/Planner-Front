import styled from 'styled-components';

const PlannerInfoBlock = styled.div`
  margin: 100px auto 0;
  display: flex;
  width: 100%;
  height: 100%;
  @media all and (min-width: 768px) {
    max-width: 800px;
    min-width: 450px;
  }
  @media all and (min-width: 960px) {
    max-width: 1250px;
    min-width: 930px;
  }
`;

const PlannerInfo = ({ children }) => {
  return <PlannerInfoBlock>{children}</PlannerInfoBlock>;
};

export default PlannerInfo;
