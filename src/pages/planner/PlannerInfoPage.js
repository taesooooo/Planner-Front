import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import InfoRoute from '../../components/planner/info/InfoRoute';
import InfoPostListContainer from '../../containers/planner/info/InfoPostListContainer';
import InfoPostList from '../../components/planner/info/InfoPostList';
import InfoMenu from '../../components/planner/info/InfoMenu';
// import PlannerInfo from '../../components/planner/info/PlannerInfo';

const PlannerInfoPage = () => {
  return (
    <>
      <Header />
        <InfoRoute />
        <InfoMenu />
        <InfoPostList />
        {/* <InfoPostListContainer /> */}
      
      <Footer />
    </>
  );
};

export default PlannerInfoPage;
