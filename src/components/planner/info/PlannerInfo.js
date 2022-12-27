
import styled from 'styled-components';

const PlannerInfoBlock = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 50px;
`;

const Container = styled.div`
  margin: 0 auto;
  @media all and (min-width: 768px) {
    width: 738px;
  }
  @media all and (min-width: 960px) {
    width: 930px;
  }
  @media all and (min-width: 1280px) {
    width: 1024px;
  }
`;

const PlannerInfo = ({ children }) => {
  return (
    <PlannerInfoBlock>
      <Container>{children}</Container>
    </PlannerInfoBlock>
  );
};

export default PlannerInfo;
