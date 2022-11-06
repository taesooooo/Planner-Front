import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ShareListBlock = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 50px;
`;

const Container = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 100%;
  margin: 10px auto;
  @media all and (min-width: 768px) {
    width: calc(100% - 40px);
    padding: 0 20px;
  }
  @media all and (min-width: 960px) {
    width: 930px;
    padding: 0;
  }
  @media all and (min-width: 1280px) {
    width: 1250px;
    padding: 0;
  }
`;

const HiddenBox = styled.div`
  border: 1px solid blue;
  margin: 0 auto;
  overflow: hidden;
  z-index: 1;
  @media all and (max-width: 768px) {
    margin-left: 15px;
  }
  @media all and (min-width: 768px) {
    width: calc(100% - 40px);
  }
  @media all and (min-width: 1025px) {
    width: 100%;
  }
  z-index: 1;
`;

const Shares = styled.ul`
  width: 840px;
  height: 100%;
  margin: 0 auto;
  padding: 0;
  display: inline-block;
  @media all and (min-width: 768px) {
    width: 100%;
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

const ShareItem = styled.li`
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

const ShareList = () => {
  const sharesBoxRef = useRef();
  const sharesRef = useRef();
  const itemRef = useRef();

  let currentPosition = 0; // 이전에 이동한 좌표
  let sliderStatus = false; // mouseMove 실행 조건
  let sliderStartX = 0; // mousedown: 마우스 다운된 좌표
  let sliderMoving = 0; // mousemove: 이전 좌표 + 현재 마우스가 이동한 좌표
  let sliderGap = 0; // mousemove - mousedown 좌표
  const TOTAL_SLIDERS = 6;

  /**
   * 마지막 슬라이드 여백 처리
   * 보이는 슬라이드 고정
   */

  // 슬라이드 마우스 다운
  const sliderStart = (e) => {
    sliderStartX = e.clientX;
    sliderStatus = true;
  };

  // 슬라이드 마우스 이동
  const sliderMove = (e) => {
    if (sliderStatus) {
      sliderGap = e.clientX - sliderStartX;
      sliderMoving = currentPosition + e.clientX - sliderStartX;

      sharesRef.current.style.transform = ' translateX(' + sliderMoving + 'px)';
      sharesRef.current.style.transitionDuration = ' 0s';
    }
  };

  // 슬라이드 마우스 업
  const sliderEnd = () => {
    let itemMargin = sharesRef.current.offsetWidth * 0.005;
    let sharesBoxSize = sharesBoxRef.current.getBoundingClientRect().width;
    let itemSize = itemRef.current.offsetWidth + itemMargin;
    let sliderEndX = Math.round(sliderGap / itemSize) * itemSize + currentPosition; // 최종 이동할 좌표

    if (sliderEndX > 0) {
      sliderEndX = 0;
    } else if (sliderEndX < sharesBoxSize - sharesRef.current.scrollWidth) {
      sliderEndX = sharesBoxSize - sharesRef.current.scrollWidth;
    }
    // } else if (sliderEndX < -itemSize * (TOTAL_SLIDERS - 2)) {
    //   sliderEndX = -(itemSize * (TOTAL_SLIDERS - 2));
    // }

    sharesRef.current.style.transform = 'translateX(' + sliderEndX + 'px)';
    sharesRef.current.style.transitionDuration = ' 1s';
    currentPosition = sliderEndX;
    sliderStatus = false;
  };

  useEffect(() => {
    let refValue = sharesRef.current;
    refValue.addEventListener('mousedown', sliderStart);
    window.addEventListener('mousemove', sliderMove);
    window.addEventListener('mouseup', sliderEnd);

    return () => {
      refValue.removeEventListener('mousedown', sliderStart);
      window.removeEventListener('mousemove', sliderMove);
      window.removeEventListener('mouseup', sliderEnd);
    };
  });

  return (
    <ShareListBlock>
      <Container>
        <TitleBox>
          <Title>다른 이용자들의 플래너</Title>
        </TitleBox>
        <HiddenBox ref={sharesBoxRef}>
          <Shares ref={sharesRef}>
            <ShareItem ref={itemRef}>
              <SimpleMap />
              <InfoBox>
                <Name>1</Name>
                <Date>2020년 11월 11일 ~ 2022년 17월 29일</Date>
              </InfoBox>
            </ShareItem>
            <ShareItem>
              <SimpleMap />
              <InfoBox>
                <Name>2</Name>
                <Date>2020년 11월 11일 ~ 2022년 17월 29일</Date>
              </InfoBox>
            </ShareItem>
            <ShareItem>
              <SimpleMap />
              <InfoBox>
                <Name>3</Name>
                <Date>2020년 11월 11일 ~ 2022년 17월 29일</Date>
              </InfoBox>
            </ShareItem>
            <ShareItem>
              <SimpleMap />
              <InfoBox>
                <Name>4</Name>
                <Date>2020년 11월 11일 ~ 2022년 17월 29일</Date>
              </InfoBox>
            </ShareItem>
            <ShareItem>
              <SimpleMap />
              <InfoBox>
                <Name>5</Name>
                <Date>2020년 11월 11일 ~ 2022년 17월 29일</Date>
              </InfoBox>
            </ShareItem>
            <ShareItem>
              <SimpleMap />
              <InfoBox>
                <Name>6</Name>
                <Date>2020년 11월 11일 ~ 2022년 17월 29일</Date>
              </InfoBox>
            </ShareItem>
            <ShareItem>
              <SimpleMap />
              <InfoBox>
                <Name>7</Name>
                <Date>2020년 11월 11일 ~ 2022년 17월 29일</Date>
              </InfoBox>
            </ShareItem>
            <ShareItem>
              <SimpleMap />
              <InfoBox>
                <Name>8</Name>
                <Date>2020년 11월 11일 ~ 2022년 17월 29일</Date>
              </InfoBox>
            </ShareItem>
          </Shares>
        </HiddenBox>
      </Container>
    </ShareListBlock>
  );
};

export default ShareList;
