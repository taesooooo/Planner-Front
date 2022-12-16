import styled from 'styled-components';

const PlannerEditBlock = styled.div`
  display: flex;
`;

const PlannerEdit = ({children}) => {
  return (
    <PlannerEditBlock>
      {children}
    </PlannerEditBlock>
  );
};

export default PlannerEdit;
