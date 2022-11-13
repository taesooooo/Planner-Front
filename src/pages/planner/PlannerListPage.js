import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import PlannerList from '../../components/planner/list/PlannerList';
import ShareList from '../../components/planner/list/ShareList';
import ListPagination from '../../components/planner/list/ListPagination';

const PlannerListPage = () => {
  return (
    <>
      <Header />
      <PlannerList />
      <ShareList />
      <ListPagination />
      <Footer />
    </>
  );
};

export default PlannerListPage;
