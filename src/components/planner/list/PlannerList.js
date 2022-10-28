import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PlannerItem from './PlannerItem';

const PlannerListBlock = styled.div`
  padding: 0 3rem 2rem 3rem;
  margin: 100px auto 5rem;
  background-color: lightgray;
`;

const Container = styled.div`
  margin: 0 auto;
  min-width: 600px;
  @media all and (min-width: 1200px) {
      width: 1100px;
  }
  @media all and (min-width: 1000px) and (max-width: 1200px) {
    width: 975px;
  }
  @media all and (min-width: 750px) and (max-width: 1000px) {
    width: 725px;
  }
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

const HiddenBox = styled.div`
  overflow: hidden;
  border: 1px solid red;

`;

const Planners = styled.ul`
  display: flex;
  border: 1px solid lightblue;
  width: 100%;
  height: 100%;
  /* width: calc(6 * 270px); */
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
  const plannerRef = useRef();
  const blockRef = useRef();

  let currentPosition = 0;
  let slideStatus = false; // mouseMove 실행 여부
  let slideStartX = 0; // 마우스 다운 좌표
  let slideMoving = 0; // 마우스 이동한 좌표
  let slideGap = 0; // 마우스 업 좌표
  const TOTAL_SLIDES = 6;
  const ITEM_SIZE = 270;

  /**
   * 당기는 애니메이션
   * 마우스 나가면 드래그 종료
   * 플래너아이템 단위로 이동
   * 마지막 아이템은 끝에 고정
   * 아이템들 비율=> 1:1:1:1:0.3 고정
   */

  // 슬라이드 마우스 다운
  const slideStart = (e) => {
    slideStartX = e.clientX;
    slideStatus = true;
  };

  // 슬라이드 마우스 이동
  const slideMove = (e) => {
    if (slideStatus) {
      slideGap = e.clientX - slideStartX;
      slideMoving = currentPosition + e.clientX - slideStartX;
      plannerRef.current.style = 'transform: translateX(' + slideMoving + 'px)';
      // plannerRef.current.style = 'transform: translateX(' + currentPosition + slideMoving + 'px)'; // 왜?? 말이안됨
      plannerRef.current.style.transitionDuration = ' 0s';

      // const currentX = plannerRef.current.getBoundingClientRect();
      // const screenWidth = blockRef.current.clientWidth;
      // if (currentX.x > 100 || currentX.x < -(TOTAL_SLIDES * screenWidth)) {
      //   plannerRef.current.style.transitionDuration = '3s';
      // }
    }
  };
  // 슬라이드 마우스 업
  const slideEnd = () => {
    const currentX = plannerRef.current.getBoundingClientRect();
    // let slideEndX = slideMoving;

    let slideEndX = Math.round(slideGap / ITEM_SIZE) * ITEM_SIZE + currentPosition;

    if (slideEndX > 100) {
      slideEndX = 0;
    } else if (slideEndX < -ITEM_SIZE * (TOTAL_SLIDES - 1)) {
      slideEndX = -(ITEM_SIZE * (TOTAL_SLIDES - 1));
    }

    plannerRef.current.style = 'transform: translateX(' + slideEndX + 'px)';
    plannerRef.current.style.transitionDuration = ' 1s';
    currentPosition = slideEndX;
    slideStatus = false;
  };

  useEffect(() => {
    let refValue = plannerRef.current;
    refValue.addEventListener('mousedown', slideStart);
    refValue.addEventListener('mousemove', slideMove);
    refValue.addEventListener('mouseup', slideEnd);
    // refValue.addEventListener('mouseout', slideEnd);

    return () => {
      refValue.removeEventListener('mousedown', slideStart);
      refValue.removeEventListener('mousemove', slideMove);
      refValue.removeEventListener('mouseup', slideEnd);
      // refValue.removeEventListener('mouseout', slideEnd);
    };
  });

  return (
    <PlannerListBlock ref={blockRef}>
      <Container>
        <TitleBox>
          <Title>나의 플래너</Title>
          <Button>플래너 생성</Button>
        </TitleBox>
        <HiddenBox>
          <Planners ref={plannerRef}>
            <PlannerItem />
            {/* <PlannerItem />
        <PlannerItem />
        <PlannerItem />
        <PlannerItem />
      <PlannerItem /> */}
          </Planners>
        </HiddenBox>
      </Container>
    </PlannerListBlock>
  );
};

export default PlannerList;
