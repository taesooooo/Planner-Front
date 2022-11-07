import styled from 'styled-components';

const EditTransportBlock = styled.select`
   border-radius: 0.5rem;
  border: 0.2rem solid lightblue;
  width: 80px;
  height: 40px;
  z-index: 1;
`;


const OPTIONS = [
  { value: 'plane', name: '비행기' },
  { value: 'train', name: '기차' },
  { value: 'bus', name: '버스' },
  { value: 'taxi', name: '택시' },
  { value: 'bicycle', name: '오토바이' },
  { value: 'personwalking', name: '걷기' },
];

const EditTransportOption = () => {
  return (
    <EditTransportBlock>
      {OPTIONS.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </EditTransportBlock>
  );
};

export default EditTransportOption;
