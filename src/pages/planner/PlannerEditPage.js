import EditList from '../../components/planner/edit/EditList';
import EditMap from '../../components/planner/edit/EditMap';
import EditRoute from '../../components/planner/edit/EditRoute';
import PlannerEdit from '../../components/planner/edit/PlannerEdit';

const PlannerEditPage = () => {
  return (
    <PlannerEdit>
      <EditRoute />
      <EditMap />
      <EditList />
    </PlannerEdit>
  );
};

export default PlannerEditPage;
