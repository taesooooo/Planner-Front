import Planner from '../../components/planner/list/Planner';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import PlannerList from '../../components/planner/list/PlannerList';
import ShareList from '../../components/planner/list/ShareList';

const PlannerListPage = () => {
  return (
    <>
      <Header />
      <Planner>
        <PlannerList />
        <ShareList />
      </Planner>
      <Footer />
    </>
  );
};

export default PlannerListPage;
