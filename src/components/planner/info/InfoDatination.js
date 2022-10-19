import { faBorderNone } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const InfoDatinationBlock = styled.div`
  /* border: 1px solid green; */
  height: 4rem;
  display: flex;
  /* justify-content: space-around; */
  padding: 0;
`;

const DateButton = styled.div`
  border: 1px solid lightblue;
  border-radius: 1rem;
  width: 3.8rem;
  height: 3.8rem;
  text-align: center;
  line-height: 3.8rem;
  font-weight: bold;
  color: gray;
  background-color: lightblue;

  & + & {
    margin-left: 0.1rem;
  }
  &:hover {
    cursor: pointer;
    background-color: lightcoral;
  }
  ${(props) =>
    props.blur &&
    css`
      opacity: 0.3;
      &:hover {
        cursor: default;
        background-color: lightblue;
      }
    `};
`;

const InfoDatination = () => {
  const [date, setDate] = useState([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]);
  const [dateBlock, setDateBlock] = useState(x);
  const [dateItem, setDateItem] = useState();
  useEffect(() => {
    setDateItem(date.slice());
  });

  return (
    <InfoDatinationBlock>
      {dateItem.map((item) => (
        <DateButton>{item}</DateButton>
      ))}
      <DateButton blur={true}>11/10</DateButton>
      <DateButton>11/12</DateButton>
      <DateButton>11/13</DateButton>
      <DateButton blur={true}>11/14</DateButton>
    </InfoDatinationBlock>
  );
};

export default InfoDatination;
