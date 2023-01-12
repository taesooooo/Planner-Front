import client from './client';

// 지역 조회
export const loadAreas = () => {
    return client.get('/api/spots/area-codes');
};

// 지역에 따른 여행지
export const loadSpots = ({ areaCode, page }) => {
    return client.get(`/api/spots/lists-area?areaCode=${areaCode}&contentTypeId=12&index=${page}`);
};

// 여행지 상세 정보
export const loadDetailSpot = ({ id }) => {
    return client.get(`/api/spots/lists/${id}`);
};
// 여행지 좋아요 체크
export const checkLikeList = ({ accountId, spotId }) => {
    return client.get(`/api/users/likes/${accountId}/check?contentIds=${spotId}`);
};

// 여행지 좋아요 추가
export const addSpotLike = ({ spotId }) => {
    return client.post(`/api/spots/likes/${spotId}`);
};

// 여행지 좋아요 삭제
export const removeSpotLike = ({ spotId }) => {
    return client.delete(`/api/spots/likes/${spotId}`);
};
