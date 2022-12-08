import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faMagnifyingGlass, faTemperature0 } from '@fortawesome/free-solid-svg-icons';
import Select from '../common/Select';
import { useState } from 'react';
import tempImage from '../../images/temp.jpg';

const ReviewButton = styled.button`
    background-color: transparent;
    border: none;

    svg {
        margin: 0px 5px;
    }

    &:hover {
        background-color: silver;
        border-radius: 6px;
    }
`;

const ReviewBlock = styled.div`
    margin-top: 100px;
    position: relative;
    padding: 0px 50px;
`;

const ReviewBox = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    background-color: #f3f3f3;
    margin: 20px 0px;
`;

const ReviewSearchBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    //margin: 0px auto;
    margin-top: 20px;
    height: 50px;
    border-radius: 6px;
    //background-color: #e6e6e6;
`;

const ItemBox = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    margin: 0px 10px;
`;

const SearchInputText = styled.input`
    flex-basis: 40%;
    //width: 260px;
    padding: 8px;
    background-color: white;
    outline: none;
    border: none;
    border-radius: 6px 0px 0px 6px;
`;

const SearchIcon = styled.div`
    background-color: skyblue;
    color: white;
    padding: 4px 8px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    border-radius: 0px 6px 6px 0px;

    &:hover {
        background-color: #7ec1dc;
    }
`;

const ReviewListBox = styled.ul`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    list-style: none;
    padding: 0px;
    margin: 20px 20px;
`;

const ReviewListEmtpy = styled.b`
    margin: 0px auto;
`;

const ReviewListItem = styled.li`
    //background-color: skyblue;
    height: 200px;
    //width: 240px;
    padding: 10px 10px;
    flex-basis: 20%;
    box-sizing: border-box;

    @media screen and (min-width: 1024px) and (max-width: 1440px) {
        flex-basis: 20%;
    }

    @media screen and (max-width: 1024px) {
        flex-basis: 33.33%;
    }
`;

const ReviewItemTitle = styled.div`
    position: absolute;
    display: none;
    background-color: #00000062;
    width: 100%;
    height: 40px;
    bottom: 0;
    color: white;
    line-height: 40px;
`;

const ReviewItem = styled.div`
    position: relative;
    background-color: skyblue;
    height: 100%;

    &:hover {
        ${ReviewItemTitle} {
            display: block;
        }
    }

    img {
        width: 100%;
        height: 100%;
    }
`;

const ReivewPageBox = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    height: 50px;
    margin: 10px 0px;
`;

const PageButton = styled(ReviewButton)`
    height: 30px;
    /* line-height: 20px; */
    padding: 5px 10px;
`;

const PageIndex = styled.a`
    padding: 10px;
    margin: 0px 5px;
    text-align: center;
    vertical-align: middle;

    &:hover {
        background-color: silver;
        border-radius: 6px;
    }
`;

const Review = ({ reviewList, areaCodes, selectAreaCode, onSelectChange }) => {
    return (
        <ReviewBlock>
            <ReviewBox>
                <ReviewSearchBox>
                    <div>여행지</div>
                    <Select value={selectAreaCode} options={areaCodes} onChange={onSelectChange} />
                    <SearchInputText type="text"></SearchInputText>
                    <SearchIcon>
                        <FontAwesomeIcon icon={faMagnifyingGlass} size="1x" />
                    </SearchIcon>
                </ReviewSearchBox>
                <ReviewListBox>
                    {reviewList.length > 0 ? (
                        reviewList.map((v) => (
                            <ReviewListItem>
                                <ReviewItem>
                                    <img src={v.thumbnail ? v.thumbnail : tempImage} />
                                    <ReviewItemTitle>{v.title}</ReviewItemTitle>
                                </ReviewItem>
                            </ReviewListItem>
                        ))
                    ) : (
                        <ReviewListEmtpy>데이터가 없습니다.</ReviewListEmtpy>
                    )}
                </ReviewListBox>
                <ReivewPageBox>
                    <PageButton>
                        <FontAwesomeIcon icon={faAngleLeft} />
                        뒤로
                    </PageButton>
                    <PageIndex>1</PageIndex>
                    <PageIndex>2</PageIndex>
                    <PageIndex>3</PageIndex>
                    <PageButton>
                        앞으로
                        <FontAwesomeIcon icon={faAngleRight} />
                    </PageButton>
                </ReivewPageBox>
            </ReviewBox>
        </ReviewBlock>
    );
};

export default Review;