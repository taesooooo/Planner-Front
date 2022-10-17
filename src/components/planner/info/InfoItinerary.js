import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBus } from '@fortawesome/free-solid-svg-icons';
// import { faTaxi } from '@fortawesome/free-solid-svg-icons'; // 택시
// import { faPlane } from '@fortawesome/free-solid-svg-icons'; // 비행기
// import { faPersonWalking } from '@fortawesome/free-solid-svg-icons'; // 도보
// import { faBicycle } from '@fortawesome/free-solid-svg-icons'; // 자전거 or 오토바이
// import { faTrainSubway } from '@fortawesome/free-solid-svg-icons'; // 지하철 or 기차
import { faCar } from '@fortawesome/free-solid-svg-icons'; // 자가용 or 렌터카

const ItineraryBlock = styled.div`
  border: 1px solid green;
  width: 20rem;
  height: 40rem;
  text-align: center;
`;

const Route = styled.div`
  border: 1px solid blue;
  /* height: 100%; */
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RouteSpotBox = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  margin: 20px 0;
`;

const RouteSpotName = styled.div`
  background-color: white;
`;

const RouteSpot = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: navy;
  margin-top: 5px;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  width: 2rem;
  height: 2rem;
`;

const InfoItinerary = () => {
  return (
    <ItineraryBlock>
      <p>2020년 11월 11일 ~ 2022년 7월 29일</p>
      <Route>
        <RouteSpotBox>
          <RouteSpotName>숙소</RouteSpotName>
          <RouteSpot />
        </RouteSpotBox>
        <StyledFontAwesomeIcon icon={faCar} />
        <RouteSpotBox>
          <RouteSpotName>한라산</RouteSpotName>
          <RouteSpot />
        </RouteSpotBox>
      </Route>
    </ItineraryBlock>
  );
};

export default InfoItinerary;
