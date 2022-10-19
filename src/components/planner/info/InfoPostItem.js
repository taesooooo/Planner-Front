import styled from 'styled-components';

const PostItem = styled.div`
  border: 1px solid lightblue;
  border-radius: 5px;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const PostItemTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Number = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  margin-right: 1rem;
`;

const Title = styled.p`
  font-weight: bold;
`;

const Date = styled.p`
  color: lightgray;
  font-size: 0.8rem;
`;

const Text = styled.div`
  display: none;
  /* border: 1px solid lightgray;
  border-radius: 1rem; */
  padding: 1rem;
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
    background-color: blueviolet;
  }
`;

const InfoPostItem = () => {
  return (
    <PostItem>
      <PostItemTitleBox>
        <TitleInfo>
          <Number>1</Number>
          <div>
            <Title>공지사항</Title>
            <Date>2022. 08. 19. PM 13:24:31</Date>
          </div>
        </TitleInfo>
        <div>
          <Button>Max</Button>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </div>
      </PostItemTitleBox>
      <Text>
        PostText입니다.PostText입니다.PostText입니다.PostText입니다.PostText입니다.PostText입니다.PostText입니다.PostText입니다.PostText입니다.PostText입니다.PostText입니다.PostText입니다.PostText입니다.PostText입니다.
      </Text>
    </PostItem>
  );
};

export default InfoPostItem;
