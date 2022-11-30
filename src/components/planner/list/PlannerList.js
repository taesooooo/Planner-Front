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
    width: 738px;
  }
  @media all and (min-width: 960px) {
    width: 930px;
  }
  @media all and (min-width: 1280px) {
    width: 1250px;
  }
`;

const HiddenBox = styled.div`
  overflow: hidden;
  z-index: 1;
`;

const Planners = styled.ul`
  display: flex;
  padding: 10px 0;
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
  box-shadow: 3px 3px 7px 1px rgb(0, 0, 0, 30%);
  /* padding: 3px; */
  /* user-select: none; */
  &:hover {
    cursor: pointer;
  }
  
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
  const hiddenBoxRef = useRef();
  const plannersRef = useRef();
  const itemRef = useRef();

  let isSlide = false; // 슬라이더 이벤트 실행 조건
  let startX = 0; // 마우스 클릭한 x 좌표
  let currentX = 0; // 마우스 이동한 x 좌표
  let moveX = 0; // 현재 x 좌표 + 마우스 이동할 x 좌표
  let sliderX = 0; // 슬라이더 x 좌표
  const TOTAL_SLIDE = 8;

  // 슬라이드 마우스 다운
  const sliderStart = (e) => {
    startX = e.clientX;
    isSlide = true;
  };

  // 슬라이드 마우스 이동
  const sliderMove = (e) => {
    if (isSlide) {
      currentX = e.clientX;
      moveX = sliderX + currentX - startX;

      plannersRef.current.style.transform = ' translateX(' + moveX + 'px)';
      plannersRef.current.style.transitionDuration = ' 0s';
    }
  };

  // 슬라이드 마우스 업
  const sliderEnd = (e) => {
    let itemSize = plannersRef.current.scrollWidth / TOTAL_SLIDE;
    sliderX = Math.round(moveX / itemSize) * itemSize;
 
    if (sliderX > 0) {
      sliderX = 0;
    } else if (sliderX < plannersRef.current.clientWidth - plannersRef.current.scrollWidth) {
      sliderX = hiddenBoxRef.current.clientWidth - plannersRef.current.scrollWidth;
    }

    plannersRef.current.style.transform = 'translateX(' + sliderX + 'px)';
    plannersRef.current.style.transitionDuration = ' 1s';
    isSlide = false;
  };

  // 너비 변경시 슬라이더 조절 
  const sliderResize = () => {
    if (sliderX > 0) {
      sliderX = 0;
    } else if (sliderX < plannersRef.current.clientWidth - plannersRef.current.scrollWidth) {
      sliderX = hiddenBoxRef.current.clientWidth - plannersRef.current.scrollWidth;
    }
    plannersRef.current.style.transform = 'translateX(' + sliderX + 'px)';
    plannersRef.current.style.transitionDuration = '0s';
  };

  useEffect(() => {
    let refValue = plannersRef.current;
    refValue.addEventListener('mousedown', sliderStart);
    window.addEventListener('mousemove', sliderMove);
    window.addEventListener('mouseup', sliderEnd);
    window.addEventListener('resize', sliderResize);

    return () => {
      refValue.removeEventListener('mousedown', sliderStart);
      window.removeEventListener('mousemove', sliderMove);
      window.removeEventListener('mouseup', sliderEnd);
      window.removeEventListener('resize', sliderResize);
    };
  });

  return (
    <PlannerListBlock>
      <Container>
        <TitleBox>
          <Title>나의 플래너</Title>
          <Button>플래너 생성</Button>
        </TitleBox>
        <HiddenBox ref={hiddenBoxRef}>
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
