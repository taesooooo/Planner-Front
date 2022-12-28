import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ShareListBlock = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 50px;
`;

const Container = styled.div`
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
    width: 1024px;
    padding: 0;
  }
`;

const HiddenBox = styled.div`
  margin: 0 auto;
  overflow: hidden;
  z-index: 1;
  width: calc(100% - 40px);
  padding: 0 20px;

  @media all and (min-width: 768px) {
    width: 100%;
    padding: 0;
  }
  z-index: 1;

`;

const Shares = styled.ul`
  width: 840px;
  height: 100%;
  margin: 0 auto;
  padding: 0 20px 0 0;
  display: inline-block;
  
  @media all and (min-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

const TitleBox = styled.div`
  font-size: 1.3rem;
  margin-left: 20px;
  @media all and (min-width: 768px) {
    margin-left: 0;
  }
`;

const ShareItem = styled.li`
  flex-shrink: 0;
  width: 180px;
  float: left;
  box-shadow: 3px 3px 7px 1px rgb(0, 0, 0, 30%);
  border-radius: 0.5rem;
  margin: 0.5%;
  @media all and (min-width: 768px) {
    width: 24%;
  }
  &:hover {
    cursor: pointer;
    box-shadow: 3px 4px 14px 2px rgb(0, 0, 0, 30%);
    transform: translateY(-3px);
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
  margin: 0 0 8px 0;
  font-size: 0.7rem;
  @media all and (min-width: 768px) {
    font-size: 0.8rem;
  }
  @media all and (min-width: 960px) {
    font-size: 0.9rem;
  }
`;
const Date = styled.p`
  margin: 0;
  font-size: 0.4rem;
  color: gray;
  @media all and (min-width: 768px) {
    font-size: 0.6rem;
  }
  @media all and (min-width: 960px) {
    font-size: 0.7rem;
  }
`;


const SimpleMap = styled.div`
  width: 100%;
  height: 120px;
  border: none;
  margin: auto;
  @media all and (min-width: 960px) {
    height: 160px;
  }
  @media all and (min-width: 1280px) {
    height: 190px;
  }
`;

const SharesScrollBox = styled.div`
  width: calc(100% - 40px);
  height: 4px;
  border-radius: 10px;
  /* margin: 0 auto; */
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: lightgray;
  z-index: 1;
  overflow: hidden;
  @media all and (min-width: 768px) {
    display: none;
  }
`;

const SharesScroll = styled.div`
  background-color: gray;
  width: 70%;
  height: 100%;
  /* z-index: 0; */
`;

const ShareList = () => {
  const hiddenBoxRef = useRef();
  const sharesRef = useRef();
  const itemRef = useRef();
  const scrollBoxRef = useRef();
  const scrollRef = useRef();

  let isSlide = false; // 슬라이더 이벤트 실행 조건
  let startX = 0; // 마우스 클릭한 x 좌표
  let currentX = 0; // 마우스 이동한 x 좌표
  let moveX = 0; // 현재 x 좌표 + 마우스 이동할 x 좌표
  let sliderX = 0; // 슬라이더 x 좌표
  const TOTAL_SLIDE = 4;

  // let scrMoveX = 0; 
  // let scrollX = 0; 

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
      // scrMoveX = scrollX + currentX - startX;

      sharesRef.current.style.transform = ' translateX(' + moveX + 'px)';
      sharesRef.current.style.transitionDuration = '0s';
      // scrollRef.current.style.transform = ' translateX(' + -scrMoveX + 'px)';
      // scrollRef.current.style.transitionDuration = '0s';
    }
  };

  // 슬라이드 마우스 업
  const sliderEnd = (e) => {
    let itemSize = sharesRef.current.scrollWidth / TOTAL_SLIDE;
    sliderX = Math.round(moveX / itemSize) * itemSize;
    // scrollX = scrMoveX;

    if (sliderX > 0) {
      sliderX = 0;
    } else if (sliderX < hiddenBoxRef.current.clientWidth - sharesRef.current.scrollWidth) {
      sliderX = hiddenBoxRef.current.clientWidth - sharesRef.current.scrollWidth;
    }
    sharesRef.current.style.transform = 'translateX(' + sliderX + 'px)';
    sharesRef.current.style.transitionDuration = ' 1s';

    // if (scrollX > 0) {
    //   scrollX = 0;
    // } else if (scrollX < scrollRef.current.scrollWidth - hiddenBoxRef.current.clientWidth) {
    //   scrollX = scrollRef.current.scrollWidth - hiddenBoxRef.current.clientWidth;
    // }
    // scrollRef.current.style.transform = ' translateX(' + -scrollX + 'px)';
    // scrollRef.current.style.transitionDuration = ' 1s';
    
    isSlide = false;
  };

  // 너비 변경시 슬라이더 조절
  const sliderResize = () => {
    if (sliderX > 0) {
      sliderX = 0;
    } else if (sliderX < sharesRef.current.clientWidth - sharesRef.current.scrollWidth) {
      sliderX = hiddenBoxRef.current.clientWidth - sharesRef.current.scrollWidth;
    }
    sharesRef.current.style.transform = 'translateX(' + sliderX + 'px)';
    sharesRef.current.style.transitionDuration = '0s';

    // if (scrollX > 0) {
    //   scrollX = 0;
    // } else if (scrollX < scrollRef.current.scrollWidth - hiddenBoxRef.current.clientWidth) {
    //   scrollX = scrollRef.current.scrollWidth - hiddenBoxRef.current.clientWidth;
    // }
    // scrollRef.current.style.transform = ' translateX(' + -scrollX + 'px)';
    // scrollRef.current.style.transitionDuration = ' 0s';
  };

  useEffect(() => {
    let refValue = sharesRef.current;
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
    <ShareListBlock>
      <Container>
        <TitleBox>
          <p>다른 이용자들의 플래너</p>
        </TitleBox>
        <HiddenBox ref={hiddenBoxRef}>
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
        <SharesScrollBox ref={scrollBoxRef}>
          <SharesScroll ref={scrollRef} />
        </SharesScrollBox>
      </Container>
    </ShareListBlock>
  );
};

export default ShareList;
