import { useRef } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

const MapBlock = styled.div`
  width: 55%;
  height: 600px;
  padding: 0 10px;
  position: relative;
`;

const Map = styled.div`
  height: 100%;
  width: 100%;
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
    </MapBlock>
  );
};

export default InfoMap;
