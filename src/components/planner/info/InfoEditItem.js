import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

const InfoEditItemBlock = styled.div``;

const EditItem = styled.div`
  border: 1px solid lightblue;
  border-radius: 5px;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 10px;
`;

const Number = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  margin-right: 1rem;
`;
const EditItemTitleBox = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonBox = styled.div`
  width: 100%;
`;

const Button = styled.button`
  border-radius: 0.5rem;
  border: none;
  background-color: lightblue;
  color: white;
  width: 5rem;
  height: 2rem;
  font-weight: bold;
  margin-top: 1rem;
  float: right;
  &:hover {
    cursor: pointer;
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

const InfoEditItem = () => {
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

  return (
    <InfoEditItemBlock>
      <EditItem>
        <EditItemTitleBox>
          <Number>2</Number>
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
          <Button>Complete</Button>
        </ButtonBox>
      </EditItem>
    </InfoEditItemBlock>
  );
};

export default InfoEditItem;
