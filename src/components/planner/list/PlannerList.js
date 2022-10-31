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
  /* border: 1px solid green; */
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
`;
const InfoBox = styled.div`
  /* user-select: none; */
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
  const blockRef = useRef();
  const plannersRef = useRef();
  const itemRef = useRef();

  let currentIndex = 0;
  let currentPosition = 0;
  let slideStatus = false; // mouseMove 실행 여부
  let slideStartX = 0; // 마우스 다운 좌표
  let slideMoving = 0; // 마우스 이동한 좌표
  let slideGap = 0; // 마우스 업 좌표
  const TOTAL_SLIDES = 6;

  /**
   * 당기는 애니메이션
   * 마우스 나가면 드래그 종료
   * 마지막 슬라이드 여백
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
      // plannerRef.current.style = 'transform: translateX(' + currentPosition + slideMoving + 'px)'; // 왜?? 말이안됨
      plannersRef.current.style.transitionDuration = ' 0s';
    }
  };
  // 슬라이드 마우스 업
  const slideEnd = () => {
    const cur = itemRef.current.getBoundingClientRect();
    console.log(cur);
    const itemWidth = itemRef.current.offsetWidth + plannersRef.current.offsetWidth * 0.005;

    let slideEndX = Math.round(slideGap / itemWidth) * itemWidth + currentPosition;

    if (slideEndX > 0) {
      slideEndX = 0;
    } else if (slideEndX < -itemWidth * (TOTAL_SLIDES - 2)) {
      slideEndX = -(itemWidth * (TOTAL_SLIDES - 2));
    }

    plannersRef.current.style = 'transform: translateX(' + slideEndX + 'px)';
    plannersRef.current.style.transitionDuration = ' 1s';
    currentPosition = slideEndX;
    slideStatus = false;
  };

  useEffect(() => {
    let refValue = plannersRef.current;
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
