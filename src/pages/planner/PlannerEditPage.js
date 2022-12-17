import EditList from '../../components/planner/edit/EditList';
import EditMap from '../../components/planner/edit/EditMap';
import EditRoute from '../../components/planner/edit/EditRoute';

const PlannerEditPage = () => {
  return (
    <>
      <EditRoute />
      <EditMap />
      <EditList />
    </>
  );
};

export default PlannerEditPage;
