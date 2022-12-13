import './App.css';
import { Route } from 'react-router-dom';
import PlannerListPage from './pages/planner/PlannerListPage';
import PlannerInfoPage from './pages/planner/PlannerInfoPage';
import PlannerEditPage from './pages/planner/PlannerEditPage';

const App = () => {
  return (
    <>
      <Route path="/PlannerList" component={PlannerListPage} />
      <Route path="/PlannerInfo" component={PlannerInfoPage} />
      <Route path="/PlannerEdit" component={PlannerEditPage} />
    </>
  );
};

export default App;
