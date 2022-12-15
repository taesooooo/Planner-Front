import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const EditCalendarBlock = styled.div`
`;

const Calendar = styled.div`
  background-color: lightgray;
  border: none;
  border-radius: 0.2rem;
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  & + & {
    margin: 0.1rem 0;
  }
  &:hover {
    cursor: pointer;
  }
  &[aria-current] {
    background-color: #f1eee0;
    border-color: #f1eee0;
  }
`;

const EditCalendar = () => {
  return (
    <EditCalendarBlock>
      <Calendar>11/11</Calendar>
      <Calendar aria-current={true ? 'date' : null}>11/12</Calendar>
      <Calendar>11/13</Calendar>
    </EditCalendarBlock>
  );
};

export default EditCalendar;
