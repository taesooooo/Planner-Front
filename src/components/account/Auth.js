import styled from 'styled-components';
import Button from '../common/Button';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

const AuthBlock = styled.div`
  width: 600px;
  height: 500px;
  text-align: center;
  border: 1px solid lightgray;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  width: 20rem;
  height: 2rem;
  text-indent: 10px;
  border-radius: 5px;
  font-size: 0.7rem;
  background-color: ${palette.lightivory[0]};
  &::placeholder {
    color: ${palette.lightblue[0]};
  }
  &:focus {
    color: lightblue;
  }
  & + & {
    margin-top: 0.5rem;
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 2rem;
`;

const ChangeRegister = styled.div`
  background-color: lightblue;
  border: 1px solid lightblue;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 500px;
  p {
    color: gray;
  }
  a {
    width: 120px;
    height: 40px;
    border-radius: 50px;
    background-color: red;
    text-decoration: none;
    text-align: center;
    line-height: 40px;
    font-weight: bold;
  }
`;

const AuthType = {
  login: '로그인',
  register: '회원가입',
};

const Auth = ({ type }) => {
  const AuthText = AuthType[type];
  return (
    <>
      {type === 'login' && (
        <ChangeRegister>
          <h2>Welcome Back!</h2>
          <p>아직 회원이 아니신가요?</p>
          <Link to="/Register">회원가입</Link>
        </ChangeRegister>
      )}
      <AuthBlock>
        <h2>{AuthText}</h2>
        <form>
          <StyledInput name="email" placeholder="이메일" type="email" />
          <StyledInput name="password" placeholder="비밀번호" type="password" />
          {type === 'register' && (
            <>
              <StyledInput name="passwordConfirm" placeholder="비밀번호 확인" type="password" />
              <StyledInput name="username" placeholder="이름" type="text" />
              <StyledInput name="nickname" placeholder="닉네임" type="text" />
            </>
          )}
        </form>
        <ButtonWithMarginTop big>{AuthText}</ButtonWithMarginTop>
      </AuthBlock>
      {type === 'register' && (
        <ChangeRegister>
          <h2>Hello, Guest!</h2>
          <p>이미 회원이신가요?</p>
          <Link to="/Login">로그인</Link>
        </ChangeRegister>
      )}
    </>
  );
};

export default Auth;
