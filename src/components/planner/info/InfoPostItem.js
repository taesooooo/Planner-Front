import styled from 'styled-components';

const InfoPostItemBlock = styled.div``;

const PostItem = styled.div`
  border: 1px solid lightblue;
  border-radius: 5px;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 3rem;
`;

const Number = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  margin-right: 1rem;
`;
const PostItemTitleBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Title = styled.p`
  font-weight: bold;
`;

const Date = styled.p`
  color: lightgray;
  font-size: 0.8rem;
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

const InfoPostItem = () => {
  return (
    <InfoPostItemBlock>
      <PostItem>
        <PostItemTitleBox>
          <Number>1</Number>
          <div>
            <Title>공지사항</Title>
            <Date>2022. 08. 19. PM 13:24:31</Date>
          </div>
        </PostItemTitleBox>
        <div>
          <Button>Max</Button>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </div>
      </PostItem>
    </InfoPostItemBlock>
  );
};

export default InfoPostItem;
