import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const EditCalendarBlock = styled.div`
  /* margin-top: 0.5rem; */
`;

const Calendar = styled.div`
  background-color: lightblue;
  border-width: 0.2rem 0 0.2rem 0.2rem;
  border-color: lightblue;
  border-style: solid;
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
    background-color: beige;
    border-color: beige;
  }
`;

const PlusButton = styled.div`
  cursor: pointer;
  border: 0.2rem solid lightblue;
  width: 47px;
  height: 47px;
  text-align: center;
  border-radius: 0.2rem;
  line-height: 47px;
  background-color: white;
`;

const EditCalendar = () => {
  return (
    <EditCalendarBlock>
      <Calendar>11/11</Calendar>
      <Calendar aria-current={true ? 'date' : null}>11/12</Calendar>
      <Calendar>11/13</Calendar>
      <PlusButton>
        <FontAwesomeIcon icon={faPlus} />
      </PlusButton>
    </EditCalendarBlock>
  );
};

export default EditCalendar;
