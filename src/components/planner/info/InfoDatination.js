import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const InfoDatinationBlock = styled.div`
  width: 100%;
  margin: 0 auto 10px;
  display: flex;
`;

const HiddenBox = styled.div`
  overflow: hidden;
  width: calc(100% - 6.8rem);
`;

const DateButtons = styled.div`
  display: flex;
  /* width: 15.4rem; */
  width: 100%;
  /* transform: translateX(16rem); */
`;

const DateButton = styled.div`
  position: relative;
  border-radius: 50px;
  border: 0.2rem solid #cdd9ac;
  width: 100%;
  flex-basis: 18.7%;
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
  width: 4rem;
  height: 0.2rem;
  background-color: #cdd9ac;
  position: absolute;
  top: 23px;
  left: -3px;
  z-index: -1;
`;

const SwipeButton = styled.div`
  border-radius: 50px;
  border: 0.2rem solid #cdd9ac;
  width: 3rem;
  height: 3rem;
  background-color: #cdd9ac;
  color: white;
  font-size: 1.5rem;
  text-align: center;
  line-height: 3rem;

  &:hover {
    cursor: pointer;
  }
`;

const InfoDatination = () => {
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
    dateRef.current.style = 'transform: translateX(-' + 57.087 * currentIndex + 'px)';
    dateRef.current.style.transition = 'all 0.5s ease-in-out';
  }, [currentIndex]);

  return (
    <InfoDatinationBlock>
      <SwipeButton onClick={handlePrev}>
        <FontAwesomeIcon icon={faCaretLeft} />
      </SwipeButton>
      <HiddenBox>
        <DateButtons ref={dateRef}>
          {date.map((item, i) => (
            <DateButton ref={buttonRef} key={i}>
              <ButtonLine />
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
