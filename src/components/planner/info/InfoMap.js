import { useRef } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

const MapBlock = styled.div`
  border: 1px solid blue;
  width: 50rem;
  height: 40rem;
`;

const Map = styled.div`
  width: 50rem;
  /* min-width: 200px; */
  height: 40rem;
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
