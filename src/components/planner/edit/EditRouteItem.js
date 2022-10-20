import styled from 'styled-components';

const RouteSpotBlock = styled.div`
  border: 1px solid lightblue;
  /* border-radius: 10%; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 300px;
  height: 90px;
  margin: 0.5rem 0;
`;

const Img = styled.div`
  border-radius: 5%;
  border: 1px solid blue;
  width: 80px;
  height: 80px;
`;

const SpotName = styled.div`
  width: 120px;
  height: 2.4em;
  overflow-y: auto;
  white-space: wrap;
  line-height: 1.2;
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 0.5rem;
  background-color: lightblue;
  color: white;
  font-weight: bold;
  width: 4rem;
  height: 2rem;
`;

const EditRouteItem = ({ type }) => {
  return (
    <RouteSpotBlock>
      <Img />
      <SpotName>천안 사거리</SpotName>
      {type === 'delete' ? <Button>삭제</Button> : <Button>추가</Button>}
    </RouteSpotBlock>
  );
};

export default EditRouteItem;
