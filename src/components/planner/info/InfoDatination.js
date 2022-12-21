import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const InfoDatinationBlock = styled.div`
  width: calc(100% - 10px);
  margin: 0 auto;
  padding: 5px;
  display: flex;
  align-items: center;
  border-bottom: 0.2rem solid #cdd9ac;
  border-radius: 10px;
  /* box-shadow: 0px 3px 7px 1px rgb(0, 0, 0, 30%) */
`;

const HiddenBox = styled.div`
  overflow: hidden;
  width: calc(100% - 6.8rem);
  position: relative;
`;

const DateButtons = styled.div`
  display: flex;
  /* width: 15.4rem; */
  width: 100%;
  /* transform: translateX(16rem); */
`;

const DateButton = styled.div`
  border-radius: 50px;
  border: 0.2rem solid #cdd9ac;
  width: 100%;
  flex-basis: 21%;
  flex-shrink: 0;
  /* width: 3rem;
  height: 3rem; */
  text-align: center;
  line-height: 3rem;
  font-weight: bold;
  /* color: white; */
  background-color: white;
  float: left;
  margin: 0 0.1rem;
`;

const ButtonLine = styled.div`
  width: 100%;
  height: 0.2rem;
  background-color: #cdd9ac;
  position: absolute;
  top: 26px;
  z-index: -1;
`;

const SwipeButton = styled.div`
  border-radius: 50px;
  border: 0.2rem solid #cdd9ac;
  width: 3rem;
  height: 3rem;
  background-color: white;
  /* color: white; */
  font-size: 1.5rem;
  text-align: center;
  line-height: 3rem;

  &:hover {
    cursor: pointer;
  }
`;

const InfoDatination = ({shadow}) => {
  const [date, setDate] = useState([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const TOTAL_SLIDES = date.length;
  const dateRef = useRef();
  const buttonRef = useRef();

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
    console.log(buttonRef.current.clientWidth);
    dateRef.current.style = 'transform: translateX(-' + 58 * currentIndex + 'px)';
    dateRef.current.style.transition = 'all 0.5s ease-in-out';
  }, [currentIndex]);

 

  return (
    <InfoDatinationBlock>
      <SwipeButton onClick={handlePrev}>
        <FontAwesomeIcon icon={faCaretLeft} />
      </SwipeButton>
      <HiddenBox>
        <ButtonLine />
        <DateButtons ref={dateRef}>
          {date.map((item, i) => (
            <DateButton ref={buttonRef} key={i}>
              11/{item}
            </DateButton>
          ))}
        </DateButtons>
      </HiddenBox>
      <SwipeButton onClick={handleNext}>
        <FontAwesomeIcon icon={faCaretRight} />
      </SwipeButton>
    </InfoDatinationBlock>
  );
};

export default InfoDatination;
