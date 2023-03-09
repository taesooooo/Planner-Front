import styled, { css } from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useRef } from 'react';
import { useState } from 'react';

const PostItem = styled.div`
    border: 1px solid #cdd9ac;
    border-radius: 5px;
    margin-bottom: 1rem;
    /* display: flex; */
    flex-direction: column;
    padding: 10px;
    /* display: none; */
`;

const PostHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const HeaderInfo = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Number = styled.p`
    font-weight: bold;
    font-size: 1.2rem;
    margin-right: 1rem;
`;

const Title = styled.p`
    font-weight: bold;
`;

const Date = styled.p`
    color: lightgray;
    font-size: 0.8rem;
`;

const Text = styled.div`
    overflow-y: hidden;
    visibility: hidden;
    max-height: 0px;
    transition: max-height 300ms ease-in-out;
    margin-top: -25px;
    /* border: 1px solid lightgray;
  border-radius: 1rem; */
    padding: 1rem;
    ${(props) =>
        props.isMax &&
        css`
            visibility: visible;
            max-height: 200px;
        `}
`;

const ButtonBox = styled.div`
    display: flex;
    justify-content: flex-end;

    padding-top: 10px;
`;

const Button = styled.button`
    border-radius: 0.5rem;
    border: none;
    background-color: #9aad67;
    color: white;
    width: 4rem;
    height: 2rem;
    margin-left: 1rem;
    font-weight: bold;
    &:hover {
        cursor: pointer;
        background-color: #f4d284;
    }
`;

const CompleteButton = styled(Button)`
    width: 5rem;
`;

const EditItem = styled.div`
    border: 1px solid #cdd9ac;
    border-radius: 5px;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
`;

const EditItemTitleBox = styled.div`
    display: flex;
    align-items: center;
`;

const StyledInput = styled.input`
    border: none;
    outline: none;
    width: 18rem;
    height: 2rem;
    text-indent: 10px;
    border-radius: 5px;
    background-color: #f1eee0;
    &::placeholder {
        color: #beb9b9;
    }
    &:focus {
        color: #ef9a9a;
    }
`;

const InfoPostItem = ({ memo, curMemo, onUpdateMemo, onDeleteMemo, onChangeMemoTitle, onChangeMemoContent, onLoadMemo }) => {
    const modules = {
        toolbar: [[{ header: [1, 2, 3, false] }], ['bold', 'italic', 'underline', 'strike'], [{ list: 'ordered' }, { list: 'bullet' }], ['link'], [{ color: [] }, { background: [] }], ['clean']],
    };

    // editItem과 postItem을 스타일 변경으로 구분한다.
    // const editItemRef = useRef();
    // const postItemRef = useRef();
    // const onCompletePost = () => {
    //   editItemRef.current.style.display = 'none';
    //   postItemRef.current.style.display = 'flex';
    // };
    // const onEditPost = () => {
    //   editItemRef.current.style.display = 'flex';
    //   postItemRef.current.style.display = 'none';
    //   textRef.current.style.maxHeight = '0';
    //   textRef.current.style.visibility = 'hidden';
    //   setShowText(false);
    // };

    const textRef = useRef();
    const [isMax, setIsMax] = useState(false);
    const onMax = () => {
        if (isMax === false) {
            setIsMax(true);
        } else {
            setIsMax(false);
        }
    };
    // const onMaxPost = () => {
    //   if (!isMax) {
    //     textRef.current.style.maxHeight = '200px';
    //     textRef.current.style.visibility = 'visible';
    //     setIsMax(true);
    //   } else {
    //     textRef.current.style.maxHeight = '0';
    //     textRef.current.style.visibility = 'hidden';
    //     setIsMax(false);
    //   }
    // };

    const [isEdit, setIsEdit] = useState(false);
    const onEdit = () => {
        setIsEdit(true);
        setIsMax(false);
    };

    const onPost = () => {
        setIsEdit(false);
    };

    const { memoId, title, content, updateDate } = memo;
    // const { curTitle, curContent } = curMemo;
    return (
        <>
            {isEdit ? (
                <EditItem>
                    <EditItemTitleBox>
                        <Number>{memoId}</Number>
                        <StyledInput
                            name="title"
                            placeholder="Title"
                            type="text"
                            value={curMemo.title}
                            onChange={(e) => {
                                onChangeMemoTitle(e.target.value);
                            }}
                        />
                    </EditItemTitleBox>
                    <ReactQuill
                        placeholder="내용을 입력해주세요."
                        theme="snow"
                        modules={modules}
                        value={curMemo.content}
                        onChange={(e) => {
                            onChangeMemoContent(e);
                        }}
                    />
                    <ButtonBox>
                        <CompleteButton
                            onClick={() => {
                                onPost();
                                onUpdateMemo(memoId);
                            }}
                        >
                            Update
                        </CompleteButton>
                        {/* <CompleteButton
                                onClick={() => {
                                    onPost();
                                    onCreateMemo();
                                    onCreate();
                                    setIsCreate(false);
                                }}
                            >
                                Complete
                            </CompleteButton> */}
                    </ButtonBox>
                </EditItem>
            ) : (
                <PostItem>
                    <PostHeader>
                        <HeaderInfo>
                            <Number>{memoId}</Number>
                            <div>
                                <Title>{title}</Title>
                                <Date>{updateDate}</Date>
                            </div>
                        </HeaderInfo>
                        <ButtonBox>
                            {isMax ? <Button onClick={onMax}>Min</Button> : <Button onClick={onMax}>Max</Button>}
                            <Button
                                onClick={() => {
                                    onEdit();
                                    onLoadMemo(memo);
                                }}
                            >
                                Edit
                            </Button>
                            <Button
                                onClick={() => {
                                    onDeleteMemo(memoId);
                                }}
                            >
                                Delete
                            </Button>
                        </ButtonBox>
                    </PostHeader>
                    <Text ref={textRef} dangerouslySetInnerHTML={{ __html: content }} isMax={isMax}></Text>
                </PostItem>
            )}
        </>
    );
};

export default InfoPostItem;
