import styled from 'styled-components';
import InfoItinerary from './InfoItinerary';
import InfoMap from './InfoMap';
import InfoPostList from './InfoPostList';

const PlannerInfoBlock = styled.div`
  margin: 75px auto;
  width: 80%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  border: 1px solid red;
`;

const PlannerInfo = () => {
  return (
    <PlannerInfoBlock>
      <InfoMap />
      <InfoItinerary />
      <InfoPostList />
    </PlannerInfoBlock>
  );
};

export default PlannerInfo;
