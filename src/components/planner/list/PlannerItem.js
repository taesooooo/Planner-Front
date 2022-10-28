import styled from 'styled-components';
import palette from '../../../lib/styles/palette';

const PlannerItemBlock = styled.li`
  flex-basis: 22.5%;
  margin: 0.5%;
  background-color: white;
  border: 1px solid ${palette.ivory[0]};
  border-radius: 0.5rem;
  box-shadow: 3px 3px 7px 1px ${palette.gray[1]};
  padding: 3px;
  user-select: none;
`;
const TitleBox = styled.div`
  /* user-select: none; */
  padding: 0 0.5rem;
  /* height: 85px; */
  border: 1px solid red;
`;
const Title = styled.p`
  /* font-size: 1.2rem; */
  font-weight: bold;
`;
const Date = styled.p`
  font-size: 0.8rem;
  color: gray;
`;

const SimpleMap = styled.div`
  /* width: 256px;
  height: 240px; */
  @media all and (min-width: 1200px) {
    width: 256px;
    height: 240px;
  }
  @media all and (min-width: 1000px) and (max-width: 1200px) {
    width: 200px;
    height: 180px;
  }
  @media all and (min-width: 750px) and (max-width: 1000px) {
    width: 150px;
    height: 130px;
  }
  @media all and (max-width: 750px) {
    width: 100px;
    height: 80px;
  }
`;

const PlannerItem = () => {
  return (
    <>
      <PlannerItemBlock>
        <SimpleMap />
        <TitleBox>
          <Title>1</Title>
          <Date>2020년 11월 11일 ~ 2022년 17월 29일</Date>
        </TitleBox>
      </PlannerItemBlock>
      <PlannerItemBlock>
        <SimpleMap />
        <TitleBox>
          <Title>2</Title>
          <Date>2020년 11월 11일 ~ 2022년 17월 29일</Date>
        </TitleBox>
      </PlannerItemBlock>
      <PlannerItemBlock>
        <SimpleMap />
        <TitleBox>
          <Title>3</Title>
          <Date>2020년 11월 11일 ~ 2022년 17월 29일</Date>
        </TitleBox>
      </PlannerItemBlock>
      <PlannerItemBlock>
        <SimpleMap />
        <TitleBox>
          <Title>4</Title>
          <Date>2020년 11월 11일 ~ 2022년 17월 29일</Date>
        </TitleBox>
      </PlannerItemBlock>
      <PlannerItemBlock>
        <SimpleMap />
        <TitleBox>
          <Title>5</Title>
          <Date>2020년 11월 11일 ~ 2022년 17월 29일</Date>
        </TitleBox>
      </PlannerItemBlock>
      <PlannerItemBlock>
        <SimpleMap />
        <TitleBox>
          <Title>6</Title>
          <Date>2020년 11월 11일 ~ 2022년 17월 29일</Date>
        </TitleBox>
      </PlannerItemBlock>
    </>
  );
};

export default PlannerItem;
