import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import styled from 'styled-components';
import LabelTextBox from '../../common/LabelTextBox';
import Modal from '../../common/Modal';

const Container = styled.div`
    width: 100%;
    padding: 5rem 0px;
    background-color: ${(props) => props.theme.primaryBackgroundColor};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 320px;
    background-color: ${(props) => props.theme.secondaryBackgroundColor};
    border-radius: 6px;
    padding: 20px;
`;

const LogoText = styled.b`
    font-size: 2rem;
`;

const FormBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    color: ${(props) => props.theme.secondaryColor};
`;

const ResultText = styled.div`
    width: 70%;
    word-break: keep-all;
    font-size: 1.1rem;
    font-weight: bold;
    margin: 2rem auto;
`;
const IdList = styled.div`
    background-color: ${(props) => props.theme.primaryBackgroundColor};
    color: ${(props) => props.theme.secondaryColor};
    padding: 0.5rem 1rem;
    margin: 2rem 0;
    border-radius: 0.5rem;
    text-align: center;
`;

const Button = styled.button`
    width: 100%;
    margin: 10px 0px;
    height: 36px;
    border: none;
    border-radius: 6px;
    background-color: ${(props) => props.theme.mainColor};
    color: ${(props) => props.theme.primaryColor};
    transition: box-shadow 0.1s ease-in;

    &:hover {
        box-shadow: 0px 3px 6px ${(props) => props.theme.shadowColor};
    }
`;

const LinkBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    font-size: 0.8rem;
`;

const ResultFindId = ({ idFindList }) => {
    const history = useHistory();

    return (
        <Container>
            <ContentBox>
                <LogoText>한국다봄</LogoText>
                <FormBox>
                    <ResultText>
                        {idFindList == null || idFindList.length == 0
                            ? '회원님의 휴대전화로 가입된 아이디가 없습니다.'
                            : '회원님의 휴대전화로 가입된 아이디가 있습니다.'}
                    </ResultText>
                    {idFindList != null && (
                        <IdList>
                            {idFindList.map((item) => (
                                <p>{item}</p>
                            ))}
                        </IdList>
                    )}
                    <Button
                        onClick={() => {
                            history.push('/login');
                        }}
                    >
                        로그인
                    </Button>
                </FormBox>
                <LinkBox>
                    <NavLink to="findPassword">비밀번호 찾기</NavLink>
                </LinkBox>
            </ContentBox>
        </Container>
    );
};

export default ResultFindId;
