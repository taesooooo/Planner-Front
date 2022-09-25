import { Link } from 'react-router-dom';
import styled from 'styled-components';
import EditProfile from './EditProfile';
import Button from '../common/Button';
import { useRef, useState } from 'react';
import ImageSelectModal from './ImageSelectModal';
import { forwardRef } from 'react';

const ProfileBlock = styled.div`
    margin: 100px auto 0px;
    width: 80%;
    height: auto;
    min-height: 100%;
    padding-bottom: 210px;
`;
const MyMenu = styled.div`
    a {
        text-decoration: none;
        font-size: 1.5rem;
        font-weight: bold;
        color: black;
    }
    a + a {
        margin-left: 30px;
        color: lightgray;
    }
`;

const StyledButton = styled(Button)`
    color: lightblue;
    background-color: white;
    margin-top: 30px;
    float: right;
`;

const EditProfileBlock = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .nick {
        text-align: center;
    }

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        border: 2px solid silver;
        border-radius: 6px;
        padding: 20px;
        width: 350px;

        li {
            /* display: flex;
      flex-direction: row;
      justify-content: space-between; */
            font-size: 1rem;
            margin: 20px 0px;
        }

        li label {
            display: block;
            margin-bottom: 10px;
        }
    }

    input {
        width: 100%;
        border: none;
        outline: none;
        border-bottom: 2px solid silver;

        &:read-only {
            border-bottom: 2px solid #f38181;
        }
    }
`;

const ButtonBlock = styled.div`
    text-align: right;
`;

const ProfileImageBlock = styled.div`
    text-align: center;

    img {
        width: 120px;
        height: 120px;
        border: none;
        border-radius: 6px;
    }
`;

const ProfileImageButton = styled(Button)`
    margin-top: 10px;
`;

// const ImageSelectModal = forwardRef((ref, modalVisible, onModalClose, onModalConfirm) => {
//     return <ImageSelectModal ref={ref} modalVisible={modalVisible} onModalClose={onModalClose} onModalConfirm={onModalConfirm} />;
// });

const Profile = ({ loading, profile, profileError, onChange, onSubmit, onImageSubmit }) => {
    const inputRef = useRef(null);
    const [modalVisible, setModalVisible] = useState(false);
    const onModalShow = () => {
        setModalVisible(true);
    };
    const onModalClose = () => {
        setModalVisible(false);
    };
    const onModalConfirm = () => {
        // 할 일
        const data = inputRef.current.files[0];
        const formData = new FormData();
        formData.append('image', data);
        onImageSubmit(formData);
        setModalVisible(false);
    };

    if (!loading && profileError) {
        alert(profileError);
    }
    return (
        <>
            <ProfileBlock>
                <MyMenu>
                    <Link to="/Profile">프로필</Link>
                    <Link to="/MyLike">좋아요</Link>
                    <hr />
                </MyMenu>
                {profile && (
                    <EditProfileBlock>
                        <ProfileImageBlock>
                            <img src={`images/${profile.image}` || 'logo192.jpg'} alt="프로필 이미지" />
                            <div>{profile.nickname}</div>
                            <ProfileImageButton onClick={onModalShow}>변경</ProfileImageButton>
                        </ProfileImageBlock>
                        <form onSubmit={onSubmit}>
                            <ul>
                                <li>
                                    <label htmlFor="email">이메일</label>
                                    <input id="email" name="email" type="email" defaultValue={profile.email} readOnly />
                                </li>
                                <li>
                                    <label htmlFor="username">이름</label>
                                    <input id="username" name="username" type="text" defaultValue={profile.username} readOnly />
                                </li>
                                <li>
                                    <label htmlFor="nickname">별명</label>
                                    <input id="nickname" name="nickname" type="text" defaultValue={profile.nickname} onChange={onChange} />
                                </li>
                                <li>
                                    <label htmlFor="phone">전화번호</label>
                                    <input id="phone" name="phone" type="text" defaultValue={profile.phone} onChange={onChange} />
                                </li>
                            </ul>
                            <ButtonBlock>
                                <Button big>저장</Button>
                            </ButtonBlock>
                        </form>
                    </EditProfileBlock>
                )}
                {/* <EditProfile /> */}
                {/* <StyledButton big>회원 탈퇴</StyledButton> */}
            </ProfileBlock>
            <ImageSelectModal ref={inputRef} modalVisible={modalVisible} onModalClose={onModalClose} onModalConfirm={onModalConfirm} />
        </>
    );
};

export default Profile;