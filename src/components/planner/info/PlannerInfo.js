import styled from 'styled-components';
import InfoItinerary from './InfoItinerary';
import InfoMap from './InfoMap';
import InfoPost from './InfoPost';

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
      <InfoPost />
    </PlannerInfoBlock>
  );
};

export default PlannerInfo;
