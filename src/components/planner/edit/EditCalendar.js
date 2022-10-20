import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const EditCalendarBlock = styled.div`
  margin: 0.5rem 0.5rem 0 0;
`;

const Calendar = styled.div`
  border: 1px solid lightblue;
  width: 50px;
  height: 50px;
  border-radius: 0.1rem;
  text-align: center;
  line-height: 50px;
  & + & {
    margin: 0.1rem 0;
  }
  &:hover {
    cursor: pointer;
    border-width: 1px 0 1px 1px;
  }
`;

const PlusButton = styled.div`
  cursor: pointer;
  border: 1px solid lightblue;
  width: 50px;
  height: 50px;
  border-radius: 0.1rem;
  text-align: center;
  line-height: 50px;
`;

const EditCalendar = () => {
  return (
    <EditCalendarBlock>
      <Calendar>11/11</Calendar>
      <Calendar>11/12</Calendar>
      <Calendar>11/13</Calendar>
      <PlusButton>
        <FontAwesomeIcon icon={faPlus} />
      </PlusButton>
    </EditCalendarBlock>
  );
};

export default EditCalendar;
