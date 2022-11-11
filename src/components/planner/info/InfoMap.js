import { useRef } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

const MapBlock = styled.div`
  width: 60%;
  padding: 0 10px;
  position: relative;
`;

const Map = styled.div`
  height: 100%;
  width: 100%;
`;

const ButtonBox = styled.div`
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 20px;
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`
  border-radius: 10px;
  color: white;
  background-color: lightblue;
  border: none;
  width: 120px;
  height: 40px;
  font-weight: bold;
  &+&{
    margin-top: 10px;
  }
`;

const InfoMap = () => {
  const { kakao } = window;
  const container = useRef(null);
  const options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3,
  };
  useEffect(() => {
    new kakao.maps.Map(container.current, options);
    return () => {};
  }, []);

  return (
    <MapBlock>
      <Map id="map" ref={container} />
      <ButtonBox>
        <Button>플래너 수정</Button>
        <Button>플래너 삭제</Button>
      </ButtonBox>
    </MapBlock>
  );
};

export default InfoMap;
