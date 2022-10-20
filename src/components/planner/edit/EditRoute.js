import styled from 'styled-components';
import EditCalendar from './EditCalendar';
import EditRouteItem from './EditRouteItem';
import EditTransportOption from './EditTransportOption';

const EditRouteBlock = styled.div`
  /* padding: 0.5rem; */
  width: 450px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
  height: 5rem;
  border: 0.2rem solid lightblue;
  border-radius: 0.5rem;
`;

const Title = styled.div`
  font-size: 1.4rem;
`;
const Date = styled.div`
  font-size: 1rem;
`;
const Route = styled.div`
  display: flex;
  background-color: beige;
  height: calc(100%-5rem);
`;

const RouteList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
`;

const RouteLine = styled.div`
  background-color: lightblue;
  width: 0.5rem;
  height: calc(3 * 90px + 2 * 40px);
  margin: 0.5rem 0;
  position: absolute;
`;

const EditRoute = () => {
  return (
    <EditRouteBlock>
      <TitleBox>
        <Title>천안 일대기</Title>
        <Date>2020년 11월 11일 ~ 2022년 7월 29일</Date>
      </TitleBox>
      <Route>
        <EditCalendar />
        <RouteList>
          <RouteLine />
          <EditRouteItem type="delete" />
          <EditTransportOption />
          <EditRouteItem type="delete" />
          <EditTransportOption />
          <EditRouteItem type="delete" />
        </RouteList>
      </Route>
    </EditRouteBlock>
  );
};

export default EditRoute;
