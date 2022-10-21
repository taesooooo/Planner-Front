import styled from 'styled-components';
import palette from '../../../lib/styles/palette';

const ShareItemBlock = styled.div`
  width: 13.5rem;
  height: 16rem;
  margin: 0.2rem;
  border: 1px solid ${palette.ivory[0]};
  border-radius: 0.5rem;
  box-shadow: 3px 3px 7px 1px ${palette.gray[1]};
  padding: 0.2rem;
`;
const TitleBox = styled.div`
  padding: 0 0.5rem;
`;
const Title = styled.p`
  font-weight: bold;
  margin: 0;
`;

const SimpleMap = styled.div`
  width: 13.5rem;
  height: 14rem;
`;

const ShareItem = () => {
  return (
    <ShareItemBlock>
      <SimpleMap />
      <TitleBox>
        <Title>동굴 대탐험 1기</Title>
      </TitleBox>
    </ShareItemBlock>
  );
};

export default ShareItem;
