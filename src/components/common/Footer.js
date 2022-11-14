import styled from 'styled-components';

const FooterBlock = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
  flex: 1;
  position: relative;
  top: 50px;
  /* margin-top: 50px; */
  /* transform: translateY(100%); */
  background-color: lightblue;
`;
const Logo = styled.div`
  font-size: 2rem;
  margin: 0 50px 0 10%;
`;

const Info = styled.div``;
const Footer = () => {
  return (
    <FooterBlock>
      <Logo>한국다봄</Logo>
      <Info>
        <p>Phone: 010-****-****, 010-****-****</p>
        <p>Email: B*******@gmail.com, l******@gmail.com</p>
      </Info>
    </FooterBlock>
  );
};

export default Footer;
