import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBus } from '@fortawesome/free-solid-svg-icons'; // 버스
import { faTaxi } from '@fortawesome/free-solid-svg-icons'; // 택시
// import { faPlane } from '@fortawesome/free-solid-svg-icons'; // 비행기
// import { faPersonWalking } from '@fortawesome/free-solid-svg-icons'; // 도보
// import { faBicycle } from '@fortawesome/free-solid-svg-icons'; // 자전거 or 오토바이
// import { faTrainSubway } from '@fortawesome/free-solid-svg-icons'; // 지하철 or 기차
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'; // 여행지
import { faBed } from '@fortawesome/free-solid-svg-icons'; // 숙소
// import { faUtensils } from '@fortawesome/free-solid-svg-icons'; // 식당
import InfoDatination from './InfoDatination';
import InfoMap from './InfoMap';

const InfoRouteBlock = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  margin: 0 auto;
  display: flex;
`;

const RouteBox = styled.div`
  width: 40%;
  height: 600px;
  border: 1px solid lightblue;
  border-radius: 1rem;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const RouteList = styled.div``;

const RouteItem = styled.div`
  border: 0.2rem solid lightblue;
  width: 70%;
  align-items: center;
  display: flex;
  margin: 20px 0;
  padding: 1rem 1rem;
  border-radius: 1rem;
  background-color: white;
`;

const TransItem = styled.div`
  display: flex;
  border: 0.2rem solid lightblue;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  font-weight: bold;
  font-size: 0.8rem;
  background-color: white;
`;

const SpotItem = styled.div``;
const RouteSpotName = styled.div`
  white-space: nowrap;
  display: inline-block;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
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

const InfoRoute = () => {
  const TOTAL = [0, 1, 2];
  return (
    <InfoRouteBlock>
      <InfoMap />
      <RouteBox>
        <InfoDatination />
        <RouteList>
          {/* <RouteLine /> */}
          {TOTAL.map((i) => {
            return (
              <RouteItem key={i}>
                <TransItem>
                  <StyledFontAwesomeIcon icon={faTaxi} />
                  Taxi
                </TransItem>
                <SpotItem>
                  <StyledFontAwesomeIcon icon={faBed} />
                  <RouteSpotName>해적선 숙소</RouteSpotName>
                </SpotItem>
              </RouteItem>
            );
          })}
        </RouteList>
      </RouteBox>
    </InfoRouteBlock>
  );
};

export default InfoRoute;
