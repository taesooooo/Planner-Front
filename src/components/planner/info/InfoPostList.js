import styled from 'styled-components';
import InfoEditItem from './InfoEditItem';
import InfoPostItem from './InfoPostItem';

const InfoPostListBlock = styled.div`
  margin: 50px auto 0;
  width: 100%;
  height: 100%;
  min-width: 640px;
`;

const InfoBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
`;

const Info = styled.div`
  width: 100%;
  font-weight: bold;
  display: flex;
  p {
    margin-left: 1rem;
    border: 1px solid lightblue;
    border-radius: 1rem;
    padding: 1rem;
  }
`;

const PostListBlock = styled.div`
  width: 80%;
  margin: auto;
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

const EditPlannerButton = styled(Button)`
  border-radius: 1rem;
  width: 10rem;
  height: 3rem;
  font-size: 1.1rem;
`;
/**
 * 1. 메모 생성 버튼 => editItem이 생성됨.
 * 2. editItem 입력 후 확인 버튼 => editItem 자리에 postItem이 생성됨.
 * 3. postItem의 edit버튼 => postItem 자리에 editItem이 생성되고 나머진 2와 동일.
 * 4. postItem의 max버튼 => postItem의 text만큼 높이가 변경됨.
 */
const InfoPostList = () => {
  return (
    <InfoPostListBlock>
      <InfoBlock>
        <Info>
          <p>플래너 이름: 제주도 한바퀴</p>
          <p>일정: 2022년 08월 17일 ~ 2022년 08월 28일</p>
          <p>참여 인원: 4명</p>
          <p>여행 자금: 3000000원</p>
        </Info>
        <EditPlannerButton>플래너 수정</EditPlannerButton>
      </InfoBlock>
      <PostListBlock>
        <PostListBlockTitle>
          <h3>Memo</h3>
          <Button>ADD</Button>
        </PostListBlockTitle>
        <PostList>
          <InfoEditItem />
          <InfoPostItem />
        </PostList>
      </PostListBlock>
    </InfoPostListBlock>
  );
};

export default InfoPostList;
