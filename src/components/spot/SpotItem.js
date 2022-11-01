import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import palette from '../../lib/styles/palette';

const SpotItemBlock = styled.li`
    flex-shrink: 0;
    width: 200px;
    float: left;
    border-radius: 2px;
    box-shadow: 3px 3px 7px 1px ${palette.gray[1]};
    /* padding: 0 6px 12px; */
    margin: 0.5%;
    @media all and (min-width: 620px) {
        width: 23%;
    }
    &:hover {
        cursor: pointer;
    }
`;

const ImgBox = styled.div`
    background-color: lightgray;
    padding: 0;
    margin: 0;
    overflow: hidden;
`;

const Img = styled.img`
    width: 100%;
    height: 150px;
    border: none;
    /* position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0; */
    margin: auto;
    @media all and (min-width: 620px) {
        height: 15vw;
    }
`;

const Name = styled.div`
    position: relative;
    bottom: 0;
    height: 35px;
    line-height: 35px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 10px;
    font-weight: bold;
    background-color: white;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    position: relative;
    bottom: 30px;
    left: 255px;
    color: ${(props) => (props.like ? 'yellow' : 'lightgray')};
`;

const SpotItem = ({ spot, onChangeErrorImg, onOpenDetail }) => {
    const { title, firstimage, contentid } = spot.info;
    const { like } = spot;

    return (
        <SpotItemBlock
            onClick={() => {
                onOpenDetail(contentid, like);
            }}
        >
            <ImgBox>
                <Img src={firstimage} alt={title} onError={onChangeErrorImg} />
            </ImgBox>
            {/* <StyledFontAwesomeIcon icon={faStar} like={like} /> */}
            <Name>{title}</Name>
        </SpotItemBlock>
    );
};

export default SpotItem;
