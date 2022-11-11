import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useRef } from 'react';
import { useState } from 'react';

const PostItem = styled.div`
  border: 1px solid lightblue;
  border-radius: 5px;
  margin-bottom: 1rem;
  /* display: flex; */
  flex-direction: column;
  padding: 10px;
  display: none;
`;

const PostItemTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleInfo = styled.div`
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
`;

const Button = styled.button`
  border-radius: 0.5rem;
  border: none;
  background-color: lightblue;
  color: white;
  width: 5rem;
  height: 2rem;
  margin-left: 1rem;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    background-color: blueviolet;
  }
`;

const EditItem = styled.div`
  border: 1px solid lightblue;
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

const ButtonBox = styled.div`
  width: 100%;
  Button {
    float: right;
    margin-top: 8px;
  }
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  width: 18rem;
  height: 2rem;
  text-indent: 10px;
  border-radius: 5px;
  background-color: #f1eded;
  &::placeholder {
    color: #beb9b9;
  }
  &:focus {
    color: lightblue;
  }
`;

const InfoPostItem = ({ index }) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link'],
      [{ color: [] }, { background: [] }],
      ['clean'],
    ],
  };

  const editItemRef = useRef();
  const postItemRef = useRef();
  const textRef = useRef();
  const onCompletePost = () => {
    editItemRef.current.style.display = 'none';
    postItemRef.current.style.display = 'flex';
  };
  const onEditPost = () => {
    editItemRef.current.style.display = 'flex';
    postItemRef.current.style.display = 'none';
    textRef.current.style.maxHeight = '0';
    textRef.current.style.visibility = 'hidden';
    setShowText(false);
  };

  const [showText, setShowText] = useState(false);
  const onMaxPost = () => {
    if (!showText) {
      textRef.current.style.maxHeight = '200px';
      textRef.current.style.visibility = 'visible';
      setShowText(true);
    } else {
      textRef.current.style.maxHeight = '0';
      textRef.current.style.visibility = 'hidden';
      setShowText(false);
    }
  };
  return (
    <>
      <EditItem ref={editItemRef}>
        <EditItemTitleBox>
          <Number>{index}</Number>
          <StyledInput name="title" placeholder="Title" type="text" />
        </EditItemTitleBox>
        <ReactQuill
          placeholder="내용을 입력해주세요."
          theme="snow"
          modules={modules}
          // value={text}
          // onChange={}
        />
        <ButtonBox>
          <Button onClick={onCompletePost}>Complete</Button>
        </ButtonBox>
      </EditItem>
      <PostItem ref={postItemRef}>
        <PostItemTitleBox>
          <TitleInfo>
            <Number>{index}</Number>
            <div>
              <Title>공지사항</Title>
              <Date>2022. 08. 19. PM 13:24:31</Date>
            </div>
          </TitleInfo>
          <div>
            <Button onClick={onMaxPost}>Max</Button>
            <Button onClick={onEditPost}>Edit</Button>
            <Button>Delete</Button>
          </div>
        </PostItemTitleBox>
        <Text ref={textRef}>
          PostText입니다.PostText입니다.PostText입니다.PostText입니다.PostText입니다.PostText입니다.PostText입니다.PostText입니다.PostText입니다.PostText입니다.PostText입니다.PostText입니다.PostText입니다.PostText입니다.
        </Text>
      </PostItem>
    </>
  );
};

export default InfoPostItem;
