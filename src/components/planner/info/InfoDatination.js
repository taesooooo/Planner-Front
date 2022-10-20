import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const InfoDatinationBlock = styled.div`
  /* justify-content: center; */
  /* box-shadow: inset 1rem 0 3rem 0.5rem rgba(256, 256, 256, 0.7); */
  width: 20.8rem;
  display: flex;
  margin: auto;
`;
// 양사이드만 뿌옇게 안되나?
const DateBlock = styled.div`
  overflow: hidden;
  border-radius: 0.5rem;
  width: 80%;
  height: 3rem;
`;

const DateButtons = styled.div`
  display: flex;
  width: calc(16 * 3rem);
  /* transform: translateX(16rem); */
`;

const DateButton = styled.div`
  border-radius: 0.5rem;
  width: 3rem;
  height: 3rem;
  text-align: center;
  line-height: 3rem;
  font-weight: bold;
  color: gray;
  background-color: lightblue;
  float: left;
  & + & {
    margin-left: 0.1rem;
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

const SwipeButton = styled.div`
  border-radius: 0.5rem;
  width: 3rem;
  height: 3rem;
  background-color: lightgray;
  font-size: 1.5rem;
  text-align: center;
  line-height: 3rem;
  margin: 0 0.1rem;
  &:hover {
    cursor: pointer;
  }
`;

const InfoDatination = () => {
  const [date, setDate] = useState([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const TOTAL_SLIDES = date.length;
  const dateRef = useRef();

  const handlePrev = () => {
    if (currentIndex === 0) {
      return;
    }
    setCurrentIndex(currentIndex - 1);
  };
  const handleNext = () => {
    if (currentIndex === TOTAL_SLIDES - 5) {
      return;
    }
    setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    dateRef.current.style = 'transform: translateX(-' + 3 * currentIndex + 'rem)';
    dateRef.current.style.transition = 'all 0.5s ease-in-out';
  }, [currentIndex]);

  return (
    <InfoDatinationBlock>
      <SwipeButton onClick={handlePrev}>
        <FontAwesomeIcon icon={faCaretLeft} />
      </SwipeButton>
      <DateBlock>
        <DateButtons ref={dateRef}>
          {date.map((item, i) => (
            <DateButton key={i}>11/{item}</DateButton>
          ))}
        </DateButtons>
      </DateBlock>
      <SwipeButton onClick={handleNext}>
        <FontAwesomeIcon icon={faCaretRight} />
      </SwipeButton>
    </InfoDatinationBlock>
  );
};

export default InfoDatination;
