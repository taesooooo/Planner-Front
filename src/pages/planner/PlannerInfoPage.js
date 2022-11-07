import PlannerInfo from '../../components/planner/info/PlannerInfo';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import InfoMap from '../../components/planner/info/InfoMap';
import InfoRoute from '../../components/planner/info/InfoRoute';
import InfoPostListContainer from '../../containers/planner/info/InfoPostListContainer';
import InfoPostList from '../../components/planner/info/InfoPostList';
import InfoDatination from '../../components/planner/info/InfoDatination';

const PlannerInfoPage = () => {
  return (
    <>
      <Header />
      <PlannerInfo>
        <InfoMap />
        <InfoRoute />
      </PlannerInfo>
        <InfoPostList />
        {/* <InfoPostListContainer /> */}
      <Footer />
    </>
  );
};

export default PlannerInfoPage;
