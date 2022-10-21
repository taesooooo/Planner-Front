import styled from 'styled-components';
import PlannerItem from './PlannerItem';
import ShareItem from './ShareItem';

const ShareListBlock = styled.div`
  padding: 1rem;
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

const Planners = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ShareList = () => {
  return (
    <ShareListBlock>
      <TitleBox>
        <Title>다른 이용자들의 플래너</Title>
      </TitleBox>
      <Planners>
        <ShareItem />
        <ShareItem />
        <ShareItem />
        <ShareItem />
        <ShareItem />
        <ShareItem />
        <ShareItem />
      </Planners>
    </ShareListBlock>
  );
};

export default ShareList;
