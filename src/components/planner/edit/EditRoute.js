import styled from 'styled-components';
import EditCalendar from './EditCalendar';
import EditRouteItem from './EditRouteItem';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';


const EditRouteBlock = styled.div`
  width: 450px;
  background-color: beige;
  height: calc(100%-5rem);
`;

const RouteBox = styled.div`
  display: flex;
`;

const RouteList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  margin-top: -50px;
`;

const RouteLine = styled.div`
  background-color: lightblue;
  width: 0.5rem;
  height: calc(3 * 90px + 2 * 40px);
  margin: 0.5rem 0;
  position: absolute;
  z-index: 99;
`;

const ItemBlock = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EditTransOption = styled.select`
  border-radius: 0.5rem;
  border: 0.2rem solid lightblue;
  width: 80px;
  height: 40px;
  z-index: 1;
`;

const InfoForm = styled.form`
  padding: 10px;
  width: calc(100% - 20px);
  display: flex;
  flex-direction: column;
  background-color: lightblue;
`;

const Title = styled.input`
  height: 40px;
  margin-bottom: 10px;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 0 10px;
  &:focus {
    outline: none;
  }
`;

const DateBox = styled.div`
  margin-bottom: 10px;
  display: flex;
  height: 100%;
  /* padding: 0 5px; */
  /* border: 1px solid red; */
  background-color: white;
  border-radius: 5rem;
  line-height: 30px;
  font-weight: bold;
  div {
    z-index: 999;
  }
`;
const StyledDatePicker = styled(DatePicker)`
  text-align: center;
  font-weight: bold;
  width: 165px;
  height: 30px;
  border-radius: 5rem;
  border: none;
  &:focus {
    outline: none;
  }
`;

const Participants = styled.select`
  width: 120px;
  height: 32px;
  border: none;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
`;

const Funds = styled.input`
  width: 160px;
  height: 30px;
  border: none;
  border-radius: 10px;
  padding: 0 10px;
  &:focus {
    outline: none;
  }
`;

const FlexDiv = styled.div`
  margin-bottom: 10px;
  display: flex;
  height: 100%;
  /* border: 1px solid red; */
  justify-content: space-evenly;
`;

const EditRoute = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const OPTIONS = [
    { value: 'plane', name: '비행기' },
    { value: 'train', name: '기차' },
    { value: 'bus', name: '버스' },
    { value: 'taxi', name: '택시' },
    { value: 'bicycle', name: '오토바이' },
    { value: 'personwalking', name: '걷기' },
  ];

  return (
    <EditRouteBlock>
      <InfoForm>
        <Title />
        <DateBox>
          <StyledDatePicker selected={startDate} onChange={(date) => setStartDate(date)} minDate={new Date()} />
          -
          <StyledDatePicker selected={endDate} onChange={(date) => setEndDate(date)} minDate={startDate} />
        </DateBox>
        <FlexDiv>
          <Funds placeholder="여행 자금" />
          <Participants />
        </FlexDiv>
      </InfoForm>
      <RouteBox>
        <EditCalendar />
        <RouteList>
          <RouteLine />
          <ItemBlock>
            <EditTransOption>
              {OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.name}
                </option>
              ))}
            </EditTransOption>
            <EditRouteItem type="delete" />
          </ItemBlock>
          <ItemBlock>
            <EditTransOption>
              {OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.name}
                </option>
              ))}
            </EditTransOption>
            <EditRouteItem type="delete" />
          </ItemBlock>
          <ItemBlock>
            <EditTransOption>
              {OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.name}
                </option>
              ))}
            </EditTransOption>
            <EditRouteItem type="delete" />
          </ItemBlock>
        </RouteList>
      </RouteBox>
    </EditRouteBlock>
  );
};

export default EditRoute;
