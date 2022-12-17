import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import InfoRoute from '../../components/planner/info/InfoRoute';
import InfoPostListContainer from '../../containers/planner/info/InfoPostListContainer';
import InfoPostList from '../../components/planner/info/InfoPostList';
import InfoMenu from '../../components/planner/info/InfoMenu';

const PlannerInfoPage = () => {
  return (
    <>
      <Header />
      <InfoMenu />
      <InfoRoute />
      <InfoPostList />
      {/* <InfoPostListContainer /> */}
      <Footer />
    </>
  );
};

export default PlannerInfoPage;
