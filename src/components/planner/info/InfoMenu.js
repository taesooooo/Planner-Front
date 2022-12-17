import styled from 'styled-components';

const InfoMenuBlock = styled.div`
  border: 1px solid red;
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

const InfoMenu = () => {
  return (
    <InfoMenuBlock>

    </InfoMenuBlock>
  )
}

export default InfoMenu;