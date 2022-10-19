import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

const InfoDatinationBlock = styled.div`
  margin: auto;
  width: 85%;
  height: 4rem;
  display: flex;
  /* justify-content: center; */
  overflow-x: hidden;
  border-radius: 0.5rem;
  /* box-shadow: inset 1rem 0 3rem 0.5rem rgba(256, 256, 256, 0.7); */
`;
// 양사이드만 뿌옇게 안되나?

const DateButtons = styled.div`
  display: flex;
  width: calc(16 * 4rem);
  transform: translateX(6.5rem);
`;

const DateButton = styled.div`
  border-radius: 1rem;
  width: 4rem;
  height: 4rem;
  text-align: center;
  line-height: 4rem;
  font-weight: bold;
  color: gray;
  background-color: lightblue;
  float: left;
  & + & {
    margin-left: 0.1rem;
  }
  &:hover {
    cursor: pointer;
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
  const TOTAL_SLIDES = 5;
  const [currentIndex, setCurrentIndex] = useState(3);
  const dateRef = useRef();

  const handleSwipe = (direction) => {
    setCurrentIndex(currentIndex + direction);
  };

  const [date, setDate] = useState([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);
  // const [dateBlock, setDateBlock] = useState(x);
  // const [dateItem, setDateItem] = useState();
  useEffect(() => {
    // dateRef.current.style = 'transform: translateX(-' + 4 * (currentIndex - 1) + 'rem)';
  });

  return (
    <InfoDatinationBlock>
      <DateButtons ref={dateRef}>
        {date.map((item, i) => (
          <DateButton key={i}>11/{item}</DateButton>
        ))}
        {/* <DateButton blur={true}>11/10</DateButton>
        <DateButton>11/11</DateButton>
        <DateButton>11/12</DateButton>
        <DateButton>11/13</DateButton>
        <DateButton blur={true}>11/14</DateButton> */}
      </DateButtons>
    </InfoDatinationBlock>
  );
};

export default InfoDatination;
