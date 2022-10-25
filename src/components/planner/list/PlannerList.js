import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import PlannerItem from './PlannerItem';

const PlannerListBlock = styled.div`
  padding: 1rem;
  margin-bottom: 5rem;
  overflow-x: hidden;
  width: 100%;
  border: 1px solid blue;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
`;

const Planners = styled.div`
  display: flex;
  border: 1px solid lightblue;
  width: calc(6 * 256px);
`;

const Button = styled.button`
  width: 7rem;
  height: 3rem;
  background-color: lightblue;
  border: none;
  border-radius: 0.5rem;
  font-weight: bold;
  color: white;
`;

const PlannerList = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [slideStatus, setSlideStatus] = useState(false);
  // const [slideStartX, setSlideStartX] = useState();
  // const [slideGap, setSlideGap] = useState();
  // const [currentTransition, setCurrentTransition] = useState();
  const plannerRef = useRef();
  const blockRef = useRef();

  let currentPosition = 0;
  let slideStatus = false;
  let slideStartX = 0;
  let slideGap = 0;
  const TOTAL_SLIDES = 6;
  const SLIDE_STANDARD = 128;
  const screenWidth = blockRef.current.clientWidth;

  // 슬라이드 마우스 다운
  const slideStart = (e) => {
    slideStartX = e.clientX;
    slideStatus = true;
    console.log('start');
    // setCurrentTransition(window.getComputedStyle(plannerRef.current).transition);
    // plannerRef.current.style.transition = 'initial';
  };

  // 슬라이드 마우스 이동
  const slideMove = (e) => {
    if (slideStatus) {
      slideGap = slideStartX - e.clientX;

      // if (currentIndex >= TOTAL_SLIDES - 1 && slideGap > 0) {
      //   slideGap = 0;
      // } else if (currentIndex <= 0 && slideGap < 0) {
      //   slideGap = 0;
      // }
      plannerRef.current.style = 'transform: translateX(-' + currentPosition + slideGap + 'px)';
      // plannerRef.current.style = 'transform: translateX(-' + 256 * currentIndex + 'px)';
      plannerRef.current.style.transition = 'all 0s ease-in-out';
      console.log('move');
    }
  };
  // 슬라이드 마우스 업
  const slideEnd = () => {
    // if (slideGap >= SLIDE_STANDARD) {
    //   console.log('a1: ' + currentIndex);
    //   currentIndex = currentIndex === TOTAL_SLIDES - 1 ? 5 : currentIndex + 1;
    //   console.log('a2: ' + currentIndex);
    // } else if (slideGap <= -SLIDE_STANDARD) {
    //   console.log('b1: ' + currentIndex);
    //   currentIndex = currentIndex <= 0 ? 0 : currentIndex - 1;
    //   console.log('b2: ' + currentIndex);
    // }
    let sum = currentPosition + slideGap;

    plannerRef.current.style = 'transform: translateX(-' + slideGap + 'px)';
    // plannerRef.current.style = 'transform: translateX(-' + currentIndex * 256 + slideGap + 'px)';
    plannerRef.current.style.transition = 'all s ease-in-out';

    slideStatus = false;
    slideGap = 0;
    console.log('end');
  };

  useEffect(() => {});

  useEffect(() => {
    let refValue = plannerRef.current;
    refValue.addEventListener('mousedown', slideStart);
    refValue.addEventListener('mousemove', slideMove);
    refValue.addEventListener('mouseup', slideEnd);

    return () => {
      refValue.removeEventListener('mousedown', slideStart);
      refValue.removeEventListener('mousemove', slideMove);
      refValue.removeEventListener('mouseup', slideEnd);
    };
  });

  return (
    <PlannerListBlock ref={blockRef}>
      <TitleBox>
        <Title>나의 플래너</Title>
        <Button>플래너 생성</Button>
      </TitleBox>
      <Planners ref={plannerRef}>
        <PlannerItem />
        {/* <PlannerItem />
        <PlannerItem />
        <PlannerItem />
        <PlannerItem />
        <PlannerItem /> */}
      </Planners>
    </PlannerListBlock>
  );
};

export default PlannerList;
