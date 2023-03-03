import styled from 'styled-components';
import EditCalendar from './EditCalendar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import EditRouteList from './EditRouteList';
import { useEffect } from 'react';

const EditRouteBlock = styled.div`
    width: 370px;
    background-color: #f5f5f5;
    height: 750px;
    float: left;
`;

const InfoForm = styled.form`
    padding: 10px 15px;
    width: calc(100% - 30px);
    display: flex;
    flex-direction: column;
    background-color: #cdd9ac;
    input::placeholder {
        color: lightgray;
    }
`;

const Title = styled.input`
    height: 40px;
    margin-bottom: 10px;
    border: none;
    border-radius: 10px;
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
    z-index: 999;
    input {
        position: absolute;
        left: 50%;
        transform: translate(-50%, -70%);
    }
`;

const StyledDatePicker = styled(DatePicker)`
    text-align: center;
    width: 220px;
    height: 20px;
    border-radius: 5rem;
    border: none;
    margin: 0 auto;
    &:focus {
        outline: none;
    }
`;

const FlexDiv = styled.div`
    display: flex;
    height: 100%;
    justify-content: space-between;
`;

const Funds = styled.input`
    width: 90px;
    height: 30px;
    border: none;
    border-radius: 10px;
    padding: 0 10px;
    &:focus {
        outline: none;
    }
`;

const People = styled.input`
    width: 35px;
    height: 30px;
    border: none;
    border-radius: 10px;
    padding: 0 10px;

    &:focus {
        outline: none;
    }
`;

const Category = styled.select`
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 10px;
    text-align: center;
    &:invalid {
        color: lightgray;
    }
    &:focus {
        outline: none;
    }
    option:disabled {
        display: none;
    }
`;

const RouteBox = styled.div`
    display: flex;
`;

const EditRoute = ({ planner, onChangePlannerTitle, onChangePlannerDateStart, onChangePlannerDateEnd }) => {
    const { title, planDateStart, planDateEnd } = planner;

    // api 추가 전 date
    const [dateRange, setDateRange] = useState([new Date(planDateStart), new Date(planDateEnd)]);
    const [startDate, endDate] = dateRange;

    // 날짜 포맷 함수
    const letsFormat = (d) => {
        const date = new Date(d);
        return (
            date.getFullYear() +
            '-' +
            ('0' + (date.getMonth() + 1)).slice(-2) +
            '-' +
            ('0' + date.getDate()).slice(-2) +
            ' ' +
            ('0' + date.getHours()).slice(-2) +
            ':' +
            ('0' + date.getMinutes()).slice(-2) +
            ':' +
            ('0' + date.getSeconds()).slice(-2)
        );
    };

    // datePicker의 날짜와 planner의 날짜를 각각 나눔.
    const onChangeDates = (dates) => {
        const [start, end] = dates;
        setDateRange(dates);
        if (start && end) {
            const startData = letsFormat(start);
            const endData = letsFormat(end);
            onChangePlannerDateStart(startData);
            onChangePlannerDateEnd(endData);
        }
        console.log(new Date(planDateStart));
        console.log(planDateStart);
    };

    return (
        <EditRouteBlock>
            <InfoForm>
                <Title
                    placeholder="플래너 이름"
                    onChange={(e) => {
                        onChangePlannerTitle(e.target.value);
                    }}
                    value={title}
                />
                <DateBox>
                    <StyledDatePicker
                        selectsRange={true}
                        startDate={startDate}
                        endDate={endDate}
                        // startDate={planner.planDateStart}
                        // endDate={planner.planDateEnd}
                        minDate={new Date()}
                        onChange={onChangeDates}
                        // 왜 dates를 안 줘도 될까?
                        // onChange={(dates) => {
                        //     onChangeDates(dates);
                        // }}
                        dateFormat=" yyyy. MM. dd "
                        placeholderText="여행 기간"
                    />

                    {/* api 추가 전  date */}
                    {/* <StyledDatePicker
                        selectsRange={true}
                        startDate={startDate}
                        endDate={endDate}
                        minDate={new Date()}
                        onChange={(dates) => {
                            setDateRange(dates);
                        }}
                        dateFormat=" yyyy. MM. dd "
                        placeholderText="여행 종료일"
                    /> */}
                </DateBox>
                <FlexDiv>
                    <Funds placeholder="여행 자금" />
                    <People placeholder="인원" />
                    <Category required defaultValue="">
                        <option value="" disabled>
                            선택
                        </option>
                        <option value="alone">혼자</option>
                        <option value="couple">연인</option>
                        <option value="friend">친구</option>
                        <option value="family">가족</option>
                    </Category>
                </FlexDiv>
            </InfoForm>
            <RouteBox>
                <EditCalendar />
                <EditRouteList planner={planner} />
            </RouteBox>
        </EditRouteBlock>
    );
};

export default EditRoute;
