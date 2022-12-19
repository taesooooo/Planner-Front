import { useState } from 'react';
import styled from 'styled-components';
import InfoPostItem from './InfoPostItem';

const InfoPostListBlock = styled.div`
  margin: 50px auto 0;
  width: 100%;
  height: 100%;
  min-width: 640px;
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
  width: 80%;
  margin: 30px auto;
  border: 1px solid lightgray;
  border-radius: 0.5rem;
  padding: 1rem;
`;

const PostListBlockTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PostList = styled.div``;

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

const ItemBox = styled.div`
  /* border: 1px solid red; */
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

  return (
    <InfoPostListBlock>
      <InfoBlock>
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
      </InfoBlock>
      <PostListBlock>
        <PostListBlockTitle>
          <h3>Memo</h3>
          <Button>ADD</Button>
        </PostListBlockTitle>
        <PostList>
          <ItemBox>
            {Total.map((i) => {
              return <InfoPostItem index={i} key={i} />;
            })}
          </ItemBox>
        </PostList>
      </PostListBlock>
    </InfoPostListBlock>
  );
};

export default InfoPostList;
