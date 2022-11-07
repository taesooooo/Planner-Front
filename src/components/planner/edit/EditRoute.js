import styled from 'styled-components';
import EditCalendar from './EditCalendar';
import EditRouteItem from './EditRouteItem';
import EditTransportOption from './EditTransportOption';

const EditRouteBlock = styled.div`
width: 450px;
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
        <EditCalendar />
        <RouteList>
          <RouteLine />
          <EditRouteItem type="delete" />
          <EditTransportOption />
          <EditRouteItem type="delete" />
          <EditTransportOption />
          <EditRouteItem type="delete" />
        </RouteList>
    </EditRouteBlock>
  );
};

export default EditRoute;
