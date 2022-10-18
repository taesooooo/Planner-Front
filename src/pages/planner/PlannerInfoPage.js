import PlannerInfo from '../../components/planner/info/PlannerInfo';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import InfoMap from '../../components/planner/info/InfoMap';
import InfoItinerary from '../../components/planner/info/InfoItinerary';
import InfoPostListContainer from '../../containers/planner/info/InfoPostListContainer';
import InfoPostList from '../../components/planner/info/InfoPostList';

const PlannerInfoPage = () => {
  return (
    <>
      <Header />
      <PlannerInfo>
        <InfoMap />
        <InfoItinerary />
        <InfoPostList />
        {/* <InfoPostListContainer /> */}
      </PlannerInfo>
      <Footer />
    </>
  );
};

export default PlannerInfoPage;
