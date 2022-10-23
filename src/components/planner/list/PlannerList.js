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

  // 슬라이드 클릭 다운
  const slideStart = (clientX) => {
    setSlideStartX(clientX);
    setSlideStatus(true);
    console.log('start');
    // setCurrentTransition(window.getComputedStyle(plannerRef.current).transition);
    // plannerRef.current.style.transition = 'initial';
  };

  useEffect(() => {
    let refValue = plannerRef.current;
    refValue.addEventListener('mousedown', (e) => {
      slideStart(e.clientX);
      console.log('use start');
    });
    return () => {
      refValue.removeEventListener('mousedown', function () {
        slideStart();
        console.log('return start');
      });
    };
  }, []);

  // 슬라이드 이동
  const slideMove = useCallback(
    (clientX) => {
      if (slideStatus) {
        setSlideGap(slideStartX - clientX);
        if (currentIndex >= TOTAL_SLIDES - 1 && slideGap > 0) {
          setSlideGap(0);
          // setCurrentIndex(currentIndex - 1);
        } else if (currentIndex <= 0 && slideGap < 0) {
          setSlideGap(0);
          // setCurrentIndex(currentIndex + 1);
        }
        // plannerRef.current.style = 'transform: translateX(-' + 256 * currentIndex + slideGap + 'px)';
        // plannerRef.current.style.transition = 'all 0.5s ease-in-out';
        console.log('move');
      }
    },
    [currentIndex, slideGap, slideStartX, slideStatus],
  );

  useEffect(() => {
    let refValue = plannerRef.current;
    if (slideStatus) {
      refValue.addEventListener('mousemove', (e) => {
        slideMove(e.clientX);
        console.log('use move');
      });
    }
    return () => {
      refValue.removeEventListener('mousemove', function () {
        slideMove();
        console.log('return move');
      });
    };
  }, [slideMove, slideStatus]);

  // 슬라이드 클릭 업
  const slideEnd = useCallback(() => {
    if (slideGap >= SLIDE_STANDARD) {
      setCurrentIndex(currentIndex + 1);
      setCurrentIndex(currentIndex === TOTAL_SLIDES - 1 ? currentIndex : currentIndex + 1);
    } else if (slideGap <= -SLIDE_STANDARD) {
      setCurrentIndex(currentIndex - 1);
      setCurrentIndex(currentIndex === 0 ? 0 : currentIndex - 1);
    }
    // plannerRef.current.style = 'transform: translateX(-' + 256 * currentIndex + 'px)';
    // plannerRef.current.style.transition = 'all 0.5s ease-in-out';
    setSlideStatus(false);
    setSlideGap(0);
    console.log('end');
  }, [currentIndex, slideGap]);

  useEffect(() => {
    let refValue = plannerRef.current;
    refValue.addEventListener('mouseup', () => {
      slideEnd();
      console.log('use end');
    });
    return () => {
      refValue.removeEventListener('mouseup', function () {
        slideEnd();
        console.log('return end');
      });
    };
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
