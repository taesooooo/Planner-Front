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
  /* margin-top: -50px; */
`;

const RouteLine = styled.div`
  background-color: lightblue;
  width: 0.5rem;
  height: 153px;
  position: absolute;
  top: -10px;
  /* z-index: 1; */
`;

const ItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
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
  font-size: 1.3rem;
  padding: 0 10px;
  &:focus {
    outline: none;
  }
`;

const DateBox = styled.div`
  margin-bottom: 10px;
  display: flex;
  height: 100%;
  background-color: white;
  border-radius: 10px;
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
  text-align: center;
  font-size: 14px;
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
  text-align: right;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
`;

const EditRoute = () => {
  const TOTAL = [0, 1, 2];
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date().setDate(new Date().getDate + 1));

  const TRANSOPTIONS = [
    { value: 'none', name: '선택' },
    { value: 'plane', name: '비행기' },
    { value: 'train', name: '기차' },
    { value: 'bus', name: '버스' },
    { value: 'taxi', name: '택시' },
    { value: 'bicycle', name: '오토바이' },
    { value: 'walking', name: '도보' },
  ];

  const MEMBEROPTIONS = [
    { value: 'none', name: '선택' },
    { value: 'one', name: '1명' },
    { value: 'two', name: '2명' },
    { value: 'three', name: '3명' },
    { value: 'four', name: '4명' },
  ];

  return (
    <EditRouteBlock>
      <InfoForm>
        <Title placeholder="플래너 이름" />
        <DateBox>
          <StyledDatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            minDate={new Date()}
            dateFormat="yyyy. MM. dd"
          />
          -
          <StyledDatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            minDate={startDate}
            dateFormat="yyyy. MM. dd"
          />
        </DateBox>
        <FlexDiv>
          <Funds placeholder="여행 자금" />
          <Participants>
            {MEMBEROPTIONS.map((option) => {
              return (
                <option key={option.value} value={option.value}>
                  {option.name}
                </option>
              );
            })}
          </Participants>
        </FlexDiv>
      </InfoForm>
      <RouteBox>
        <EditCalendar />
        <RouteList>
          {TOTAL.map((i) => {
            return (
              <ItemBlock>
                <RouteLine />
                <EditTransOption>
                  {TRANSOPTIONS.map((option) => {
                    return (
                      <option key={option.value} value={option.value}>
                        {option.name}
                      </option>
                    );
                  })}
                </EditTransOption>
                <EditRouteItem type="delete" />
              </ItemBlock>
            );
          })}
        </RouteList>
      </RouteBox>
    </EditRouteBlock>
  );
};

export default EditRoute;
