import styled from 'styled-components';
import EditRoute from './EditRoute';
import EditList from './EditList';
import EditMap from './EditMap';

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
