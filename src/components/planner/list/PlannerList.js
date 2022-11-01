import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const PlannerListBlock = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 0 2rem 0;
  margin-top: 100px;
  background-color: lightgray;
`;

const Container = styled.div`
  padding: 0 15px 0 15px;
  margin: 0 auto;
  @media all and (min-width: 768px) {
    width: 750px;
  }
  @media all and (min-width: 992px) {
    width: 970px;
  }
  @media all and (min-width: 1200px) {
    width: 1170px;
  }
`;

const HiddenBox = styled.div`
  overflow: hidden;
  z-index: 1;
`;

const Planners = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
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

const Button = styled.button`
  width: 7rem;
  height: 3rem;
  background-color: lightblue;
  border: none;
  border-radius: 0.5rem;
  font-weight: bold;
  color: white;
`;

const PlannerItem = styled.li`
  width: 100%;
  height: 100%;
  flex-basis: 22.5%;
  flex-shrink: 0;
  margin-left: 0.5%;
  background-color: white;
  border: 1px solid ivory;
  border-radius: 0.5rem;
  box-shadow: 3px 3px 7px 1px lightgray;
  /* padding: 3px; */
  user-select: none;
  &:hover {
    cursor: pointer;
  }
`;
const InfoBox = styled.div`
  user-select: none;
  height: 60px;
  margin: 0;
  padding: 3px;
  border-top: 1px solid lightgray;
`;
const Name = styled.p`
  margin: 0 0 10px 0;
  font-weight: bold;
`;
const Date = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: gray;
`;

const SimpleMap = styled.div`
  height: 18vw;
`;

const PlannerList = () => {
  const plannersRef = useRef();
  const itemRef = useRef();

  let currentPosition = 0; // 이전에 이동한 좌표
  let slideStatus = false; // mouseMove 실행 조건
  let slideStartX = 0; // mousedown: 마우스 다운된 좌표
  let slideMoving = 0; // mousemove: 이전 좌표 + 현재 마우스가 이동한 좌표
  let slideGap = 0; // mousemove - mousedown 좌표
  const TOTAL_SLIDES = 6;

  /**
   * 마지막 슬라이드 여백 처리
   * 보이는 슬라이드 고정
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

      plannersRef.current.style = 'transform: translateX(' + slideMoving + 'px)';
      plannersRef.current.style.transitionDuration = ' 0s';
    }
  };
  
  // 슬라이드 마우스 업
  const slideEnd = () => {
    let itemMargin = plannersRef.current.offsetWidth * 0.005;
    let itemSize = itemRef.current.offsetWidth + itemMargin;
    let slideEndX = Math.round(slideGap / itemSize) * itemSize + currentPosition; // 최종 이동할 좌표
    
    if (slideEndX > 0) {
      slideEndX = 0;
    } else if (slideEndX < -itemSize * (TOTAL_SLIDES - 2)) {
      slideEndX = -(itemSize * (TOTAL_SLIDES - 2));
    }

    plannersRef.current.style = 'transform: translateX(' + slideEndX + 'px)';
    plannersRef.current.style.transitionDuration = ' 1s';
    currentPosition = slideEndX;
    slideStatus = false;
  };

  useEffect(() => {
    let refValue = plannersRef.current;
    refValue.addEventListener('mousedown', slideStart);
    window.addEventListener('mousemove', slideMove);
    window.addEventListener('mouseup', slideEnd);

    return () => {
      refValue.removeEventListener('mousedown', slideStart);
      window.removeEventListener('mousemove', slideMove);
      window.removeEventListener('mouseup', slideEnd);
    };
  });

  return (
    <PlannerListBlock>
      <Container>
        <TitleBox>
          <Title>나의 플래너</Title>
          <Button>플래너 생성</Button>
        </TitleBox>
        <HiddenBox>
          <Planners ref={plannersRef}>
            <PlannerItem ref={itemRef}>
              <SimpleMap />
              <InfoBox>
                <Name>1</Name>
                <Date>2020년 11월 11일 ~ 2022년 17월 29일</Date>
              </InfoBox>
            </PlannerItem>
            <PlannerItem>
              <SimpleMap />
              <InfoBox>
                <Name>2</Name>
                <Date>2020년 11월 11일 ~ 2022년 17월 29일</Date>
              </InfoBox>
            </PlannerItem>
            <PlannerItem>
              <SimpleMap />
              <InfoBox>
                <Name>3</Name>
                <Date>2020년 11월 11일 ~ 2022년 17월 29일</Date>
              </InfoBox>
            </PlannerItem>
            <PlannerItem>
              <SimpleMap />
              <InfoBox>
                <Name>4</Name>
                <Date>2020년 11월 11일 ~ 2022년 17월 29일</Date>
              </InfoBox>
            </PlannerItem>
            <PlannerItem>
              <SimpleMap />
              <InfoBox>
                <Name>5</Name>
                <Date>2020년 11월 11일 ~ 2022년 17월 29일</Date>
              </InfoBox>
            </PlannerItem>
            <PlannerItem>
              <SimpleMap />
              <InfoBox>
                <Name>6</Name>
                <Date>2020년 11월 11일 ~ 2022년 17월 29일</Date>
              </InfoBox>
            </PlannerItem>
            <PlannerItem>
              <SimpleMap />
              <InfoBox>
                <Name>7</Name>
                <Date>2020년 11월 11일 ~ 2022년 17월 29일</Date>
              </InfoBox>
            </PlannerItem>
            <PlannerItem>
              <SimpleMap />
              <InfoBox>
                <Name>8</Name>
                <Date>2020년 11월 11일 ~ 2022년 17월 29일</Date>
              </InfoBox>
            </PlannerItem>
          </Planners>
        </HiddenBox>
      </Container>
    </PlannerListBlock>
  );
};

export default PlannerList;
