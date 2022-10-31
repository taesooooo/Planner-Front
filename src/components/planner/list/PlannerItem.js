import styled from 'styled-components';
import palette from '../../../lib/styles/palette';

const PlannerItemBlock = styled.li`
  width: 100%;
  height: 100%;
  flex-basis: 22.5%;
  flex-shrink: 0;
  margin-left: 0.5%;
  background-color: white;
  border: 1px solid ${palette.ivory[0]};
  border-radius: 0.5rem;
  box-shadow: 3px 3px 7px 1px ${palette.gray[1]};
  padding: 3px;
  user-select: none;
`;
const TitleBox = styled.div`
  /* user-select: none; */
  height: 60px;
  border: 1px solid red;
  margin: 0;
  padding: 0;
`;
const Title = styled.p`
  margin: 0 0 10px 0;
  font-weight: bold;
`;
const Date = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: gray;
`;

const SimpleMap = styled.div`
  border: 1px solid blue;
  height: 18vw;
`;

const PlannerItem = ({children}) => {
  return (
      <PlannerItemBlock>
        <SimpleMap />
        <TitleBox>
          <Title>{children}</Title>
          <Date>2020년 11월 11일 ~ 2022년 17월 29일</Date>
        </TitleBox>
      </PlannerItemBlock>
  );
};

export default PlannerItem;
