import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import InfoPostItem from './InfoPostItem';
import airplaneDay from '../../../lib/img/airplane-day.jpg';
import airplaneNight from '../../../lib/img/airplane-night.jpg';

const InfoPostListBlock = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 600px;
  min-width: 640px;
  display: flex;
  justify-content: center;
`;

const InfoBlock = styled.div`
  display: flex;
  /* justify-content: space-around; */
  /* align-items: center; */
  width: 80%;
  margin: 0 auto;
`;

const Info = styled.div`
  width: auto;
  height: auto;
  display: flex;
  border: 1px solid lightblue;
  border-radius: 1rem;
  padding: 1rem;
  font-weight: bold;
  & + & {
    margin-left: 10px;
  }
  p {
    &:first-child {
      color: gray;
      white-space: nowrap;
    }
    &:last-child {
      margin-left: 5px;
    }
    margin: 0;
  }
`;

const PostListBlock = styled.div`
  width: 50%;
  height: calc(100% - 1rem);
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 0 1rem 1rem;
  
  /* margin: 0 auto; */
  `;

const PostListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PostList = styled.div`
height: 100%;
overflow: hidden;
overflow-y: auto;
`;

const Button = styled.button`
  border-radius: 0.5rem;
  border: none;
  background-color: lightblue;
  color: white;
  width: 5rem;
  height: 2rem;
  margin-left: 1rem;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;

const Ad = styled.div`
  width: 50%;
  height: 100%;
  margin-left: 5px;
  display: none;
  transition: all 0.3s;
  position: relative;
  border-radius: 10px;
  /* background-image: url(./airplane-day.jpg);
  background-size: 100%; */
  /* &:hover {
    background-image: url(./airplane-night.jpg);
  } */
  div {
    width: 100%;
    color: white;
    font-weight: bold;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 0.9rem;
    @media all and (min-width: 960px) {
    font-size: 1.2rem;
    }
  }
  @media all and (min-width: 768px) {
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
    display: block;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

/**
 * (메모는 나의 플래너 정보 페이지에서만 보임)
 * 1. 메모 생성 버튼 => editItem이 생성됨.
 * 2. editItem 입력 후 확인 버튼 => editItem 자리에 postItem이 생성됨.
 * 3. postItem의 edit버튼 => postItem 자리에 editItem이 생성되고 나머진 2와 동일.
 * 4. postItem의 max버튼 => postItem의 text만큼 높이가 변경됨.
 */
const InfoPostList = () => {
  const Total = [1, 2, 3];
  const [isChange, setIsChange] = useState(false);
  const adRef = useRef();

  const onChangeTrue = () => {
    setIsChange(true);
  };
  const onChangeFalse = () => {
    setIsChange(false);
  };

  useEffect(() => {
    let refValue = adRef.current;

    refValue.addEventListener('mouseover', onChangeTrue);
    refValue.addEventListener('mouseout', onChangeFalse);

    return () => {
      refValue.removeEventListener('mouseover', onChangeTrue);
      refValue.removeEventListener('mouseout', onChangeFalse);
    };
  });
  return (
    <InfoPostListBlock>
      {/* <InfoBlock>
        <Info>
          <p>플래너 이름:</p> <p>제주도 한바퀴</p>
        </Info>
        <Info>
          <p>일정:</p> <p>2022년 08월 17일 ~ 2022년 08월 28일</p>
        </Info>
        <Info>
          <p>참여 인원:</p> <p>4명</p>
        </Info>
        <Info>
          <p>여행 자금:</p> <p>3000000원</p>
        </Info>
      </InfoBlock> */}
      <PostListBlock>
        <PostListHeader>
          <h3>Memo</h3>
          <Button>ADD</Button>
        </PostListHeader>
        <PostList>
          {Total.map((i) => {
            return <InfoPostItem index={i} key={i} />;
          })}
        </PostList>
      </PostListBlock>
      {!isChange ? (
        <Ad ref={adRef}>
          <Img src={airplaneDay} alt="airplane-day" />
          <div>
            바쁜 일정 중에 잊는 것들이 있을 수가 있어요. <br />
            여행에 필요한 정보들을 기록해 보세요.
          </div>
        </Ad>
      ) : (
        <Ad ref={adRef}>
          <Img src={airplaneNight} alt="airplane-night" />
          <div>한국다봄을 앱에서도 사용해 보세요.</div>
        </Ad>
      )}
    </InfoPostListBlock>
  );
};

export default InfoPostList;
