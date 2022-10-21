import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import PlannerItem from './PlannerItem';

const PlannerListBlock = styled.div`
  padding: 1rem;
  margin-bottom: 5rem;
  overflow-x: hidden;
  width: 100%;
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideStatus, setSlideStatus] = useState(false);
  const [slideStartX, setSlideStartX] = useState();
  const [slideGap, setSlideGap] = useState();
  const [currentTransition, setCurrentTransition] = useState();
  const TOTAL_SLIDES = 6;
  const SLIDE_STANDARD = 128;

  const plannerRef = useRef();

  const slideStart = useCallback((clientX) => {
    setSlideStartX(clientX);
    setSlideStatus(true);
    // setCurrentTransition(window.getComputedStyle(plannerRef.current).transition);
    // plannerRef.current.style.transition = 'initial';
  }, []);

  const slideMove = useCallback(
    (clientX) => {
      if (slideStatus) {
        setSlideGap(slideStartX - clientX);
        if (currentIndex >= TOTAL_SLIDES - 1 && slideGap > 0) {
          setSlideGap(0);
        } else if (currentIndex <= 0 && slideGap < 0) {
          setSlideGap(0);
        }
        plannerRef.current.style = 'transform: translateX(-' + 256 * currentIndex + slideGap + 'px)';
        plannerRef.current.style.transition = 'all 0.5s ease-in-out';
        console.log(11);
      }
    },
    [currentIndex, slideStartX, slideStatus, slideGap],
  );

  // currentIndex가 변하면서 무한 반복됨.??
  const slideEnd = useCallback(() => {
    if (slideGap >= SLIDE_STANDARD) {
      setCurrentIndex(currentIndex + 1);
    } else if (slideGap <= -SLIDE_STANDARD) {
      setCurrentIndex(currentIndex - 1);
    }
    console.log(3);
    plannerRef.current.style = 'transform: translateX(-' + 256 * currentIndex + 'px)';
    plannerRef.current.style.transition = 'all 0.5s ease-in-out';
    setSlideGap(0);
    setSlideStatus(false);
  }, [currentIndex, slideGap]);

  useEffect(() => {
    setCurrentIndex(currentIndex === TOTAL_SLIDES - 1 ? currentIndex : currentIndex + 1);
    setCurrentIndex(currentIndex === 0 ? 0 : currentIndex - 1);
  }, [currentIndex]);

  useEffect(() => {
    let refValue = null;
    if (plannerRef) {
      plannerRef.current.addEventListener('mousedown', (e) => {
        slideStart(e.clientX);
      });
      refValue = plannerRef.current;
      return () => {
        if (refValue) {
          refValue.removeEventListener('mousedown', slideStart);
        }
      };
    }
  }, [slideStart]);
  useEffect(() => {
    let refValue = null;
    if (plannerRef) {
      plannerRef.current.addEventListener('mousemove', (e) => {
        slideMove(e.clientX);
      });
      refValue = plannerRef.current;
      return () => {
        if (refValue) {
          refValue.removeEventListener('mousemove', slideMove);
        }
      };
    }
  }, [slideMove]);
  useEffect(() => {
    let refValue = null;
    if (plannerRef) {
      plannerRef.current.addEventListener('mouseup', () => {
        slideEnd();
      });
      refValue = plannerRef.current;
      return () => {
        if (refValue) {
          refValue.removeEventListener('mouseup', slideEnd);
        }
      };
    }
  }, [slideEnd]);

  return (
    <PlannerListBlock>
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
