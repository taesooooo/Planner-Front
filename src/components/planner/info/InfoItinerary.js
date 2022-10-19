import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBus } from '@fortawesome/free-solid-svg-icons';
// import { faTaxi } from '@fortawesome/free-solid-svg-icons'; // 택시
// import { faPlane } from '@fortawesome/free-solid-svg-icons'; // 비행기
// import { faPersonWalking } from '@fortawesome/free-solid-svg-icons'; // 도보
// import { faBicycle } from '@fortawesome/free-solid-svg-icons'; // 자전거 or 오토바이
// import { faTrainSubway } from '@fortawesome/free-solid-svg-icons'; // 지하철 or 기차
import { faCar } from '@fortawesome/free-solid-svg-icons'; // 자가용 or 렌터카
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'; // 여행지
import { faBed } from '@fortawesome/free-solid-svg-icons'; // 숙소
// import { faUtensils } from '@fortawesome/free-solid-svg-icons'; // 식당

const ItineraryBlock = styled.div`
  border: 1px solid green;
  width: 20rem;
  height: 40rem;
  text-align: center;
  padding: 1rem;
`;

const Route = styled.div`
  border: 1px solid blue;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RouteSpotBox = styled.div`
  border: 1px solid lightblue;
  width: 15rem;
  align-items: center;
  display: flex;
  margin: 20px 0;
  padding: 1rem 1rem;
  border-radius: 1rem;
  background-color: white;
`;

const RouteTransportBox = styled.div`
  display: flex;
  border: 1px solid lightblue;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  font-weight: bold;
  font-size: 0.8rem;
  background-color: white;
`;

const RouteSpotName = styled.div`
  white-space: nowrap;
  display: inline-block;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const RouteSpot = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: navy;
  margin-top: 5px;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`;

const RouteLine = styled.div`
  background-color: lightblue;
  width: 0.5rem;
  height: calc(2 * 58.6px + 1 * 24.2px);
  z-index: -1;
  margin: 20px 0;
  position: absolute;
`;

const InfoItinerary = () => {
  return (
    <ItineraryBlock>
      <Route>
        <RouteLine />
        <RouteSpotBox>
          <StyledFontAwesomeIcon icon={faBed} />
          <RouteSpotName>해적선 숙소</RouteSpotName>
        </RouteSpotBox>
        <RouteTransportBox>
          <StyledFontAwesomeIcon icon={faCar} />
          Taxi
        </RouteTransportBox>
        <RouteSpotBox>
          <StyledFontAwesomeIcon icon={faLocationDot} />

          <RouteSpotName>한라산</RouteSpotName>
        </RouteSpotBox>
      </Route>
    </ItineraryBlock>
  );
};

export default InfoItinerary;
