import styled from 'styled-components';
import Loading from '../common/Loading';
import tempImage from '../../lib/images/plannerErrorImg.png';

const ReviewListContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0.875rem;
    list-style: none;
    padding: 0px;
    margin: 1.25rem 0rem;
    min-height: 750px;
    align-content: start;

    @media screen and (max-width: 1440px) {
        grid-template-columns: repeat(4, 1fr);
        gap: 0.75rem;
        min-height: 650px;
    }

    @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 0.625rem;
        min-height: 550px;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 0.5rem;
        min-height: 450px;
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 0.5rem;
        min-height: 450px;
    }
`;

const ReviewListEmtpy = styled.b`
    grid-column: 1 / -1;
    margin: 0px auto;
    padding: 5rem;
`;

const ReviewListItem = styled.li`
    padding: 0.5rem;
    background-color: ${(props) => props.theme.primaryBackgroundColor};
    border-radius: 12px;
    box-shadow: 0px 2px 8px ${(props) => props.theme.shadowColor};
    cursor: pointer;
    transition: all 0.3s ease;
    overflow: hidden;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0px 8px 16px ${(props) => props.theme.shadowColor};
    }

    img {
        display: block;
        width: 100%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        border-radius: 8px;
        margin-bottom: 0.5rem;
    }
`;

const ReviewItemTitle = styled.h3`
    margin: 0rem;
    padding: 0rem 0.2rem;
    font-size: 0.9rem;
    color: black;
    font-weight: 600;
    white-space: normal;
    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 1.4;
`;

const LocationText = styled.div`
    font-size: 0.875rem;
`;

const ReviewList = ({ loading, list, onItemClick }) => {
    if (loading && !list) {
        return (
            <ReviewListContainer>
                <Loading />
            </ReviewListContainer>
        );
    }

    return (
        <ReviewListContainer>
            {list && list.length > 0 ? (
                list.map((v, i) => (
                    <ReviewListItem key={i} onClick={() => onItemClick(v.reviewId)}>
                        <img src={v.thumbnail ? `/api/upload/files/${v.thumbnail}` : tempImage} />
                        <ReviewItemTitle>{v.title}</ReviewItemTitle>
                        {/* <LocationText>서울</LocationText> */}
                    </ReviewListItem>
                ))
            ) : (
                <ReviewListEmtpy>데이터가 없습니다.</ReviewListEmtpy>
            )}
        </ReviewListContainer>
    );
};

export default ReviewList;
