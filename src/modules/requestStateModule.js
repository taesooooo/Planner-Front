

// 액션 타입
const SET_REQUEST_SUCCESS = 'requestState/SET_REQUEST_SUCCESS';

// 액션 생성자
export const setRequestSuccess = (requestType, isSuccess) => ({
    type: SET_REQUEST_SUCCESS,
    payload: { requestType, isSuccess },
});

// 초기 상태
const initialState = {};

// 리듀서
export default function requestStateReducer(state = initialState, action) {
    switch (action.type) {
        case SET_REQUEST_SUCCESS:
            return {
                ...state,
                [action.payload.requestType]: action.payload.isSuccess,
            };
        default:
            return state;
    }
}