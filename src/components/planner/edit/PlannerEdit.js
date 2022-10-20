import styled from 'styled-components';
import EditRoute from './EditRoute';
import EditList from './EditList';
import EditMap from './EditMap';

const PlannerEditBlock = styled.div`
  display: flex;
`;

const PlannerEdit = () => {
  return (
    <PlannerEditBlock>
      <EditRoute />
      <EditMap />
      <EditList />
    </PlannerEditBlock>
  );
};

export default PlannerEdit;
