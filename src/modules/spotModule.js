import * as spotAPI from '../lib/api/spotAPI';
import { takeLatest } from 'redux-saga/effects';
import createSaga from '../lib/createSaga';

const LOAD_AREAS_TYPE = 'spot/LOAD_AREAS';
const LOAD_AREAS_SUCCESS_TYPE = 'spot/LOAD_AREAS_SUCCESS';
const LOAD_AREAS_FAILURE_TYPE = 'spot/LOAD_AREAS_FAILURE';

const LOAD_SPOTS_TYPE = 'spot/LOAD_SPOTS';
const LOAD_SPOTS_SUCCESS_TYPE = 'spot/LOAD_SPOTS_SUCCESS';
const LOAD_SPOTS_FAILURE_TYPE = 'spot/LOAD_SPOTS_FAILURE';

const UPDATE_AREA_NUM_TYPE = 'spot/UPDATE_AREA_NUM';
const UPDATE_PAGE_NUM_TYPE = 'spot/UPDATE_PAGE_NUM';
const UPDATE_BLOCK_NUM_TYPE = 'spot/UPDATE_BLOCK_NUM';
const UPDATE_TOTAL_PAGE_TYPE = 'spot/UPDATE_TOTAL_PAGE';
const UPDATE_PAGINATION_TYPE = 'spot/UPDATE_PAGINATION';

const LOAD_DETAIL_SPOT_TYPE = 'spot/LOAD_DETAIL_SPOT';
const LOAD_DETAIL_SPOT_SUCCESS_TYPE = 'spot/LOAD_DETAIL_SPOT_SUCCESS';
const LOAD_DETAIL_SPOT_FAILURE_TYPE = 'spot/LOAD_DETAIL_SPOT_FAILURE';
const UNLOAD_DETAIL_SPOT_TYPE = 'spot/UNLOAD_DETAIL_SPOT';

const UPDATE_DETAIL_SPOT_TYPE = 'spot/UPDATE_DETAIL_SPOT';

const ADD_SPOT_LIKE_TYPE = 'spot/ADD_SPOT_LIKE';
const ADD_SPOT_LIKE_SUCCESS_TYPE = 'spot/ADD_SPOT_LIKE_SUCCESS';
const ADD_SPOT_LIKE_FAILURE_TYPE = 'spot/ADD_SPOT_LIKE_FAILURE';

const REMOVE_SPOT_LIKE_TYPE = 'spot/REMOVE_SPOT_LIKE';
const REMOVE_SPOT_LIKE_SUCCESS_TYPE = 'spot/REMOVE_SPOT_LIKE_SUCCESS';
const REMOVE_SPOT_LIKE_FAILURE_TYPE = 'spot/REMOVE_SPOT_LIKE_FAILURE';

const UPDATE_SPOTS_LIKE_TYPE = 'spot/UPDATE_SPOTS_LIKE';
const TOGGLE_DETAIL_LIKE_TYPE = 'spot/TOGGLE_DETAIL_LIKE';

const CHECK_LIKE_LIST_TYPE = 'spot/CHECK_LIKE_LIST';
const CHECK_LIKE_LIST_SUCCESS_TYPE = 'spot/CHECK_LIKE_LIST_SUCCESS';
const CHECK_LIKE_LIST_FAILURE_TYPE = 'spot/CHECK_LIKE_LIST_FAILURE';

const CLEAN_SPOTS_TYPE = 'spot/CLEAN_SPOTS';
const CLEAN_LIKE_LIST_TYPE = 'spot/CLEAN_LIKE_LIST';
const CLEAN_CURRENT_INFO_TYPE = 'spot/CLEAN_CURRENT_INFO';

export const loadAreasAction = () => ({ type: LOAD_AREAS_TYPE });
export const loadSpotsAction = (areaCode, page) => ({ type: LOAD_SPOTS_TYPE, areaCode, page });
export const updateAreaNumAction = (num) => ({ type: UPDATE_AREA_NUM_TYPE, num });
export const updatePageNumAction = (num) => ({ type: UPDATE_PAGE_NUM_TYPE, num });
export const updateBlockNumAction = (num) => ({ type: UPDATE_BLOCK_NUM_TYPE, num });
export const updateTotalPageAction = (num) => ({ type: UPDATE_TOTAL_PAGE_TYPE, num });
export const updatePaginationAction = (num) => ({ type: UPDATE_PAGINATION_TYPE, num });
export const loadDetailSpotAction = (id) => ({ type: LOAD_DETAIL_SPOT_TYPE, id });
export const unloadDetailSpotAction = () => ({ type: UNLOAD_DETAIL_SPOT_TYPE });
export const updateDetailSpotAction = (spotInfo) => ({ type: UPDATE_DETAIL_SPOT_TYPE, spotInfo });
export const addSpotLikeAction = (spotId) => ({ type: ADD_SPOT_LIKE_TYPE, spotId });
export const removeSpotLikeAction = (spotId) => ({ type: REMOVE_SPOT_LIKE_TYPE, spotId });
export const updateSpotsLikeAction = (likes) => ({ type: UPDATE_SPOTS_LIKE_TYPE, likes });
export const toggleDetailLikeAction = () => ({ type: TOGGLE_DETAIL_LIKE_TYPE });
export const checkLikeListAction = (accountId, spotId) => ({ type: CHECK_LIKE_LIST_TYPE, accountId, spotId });
export const cleanSpotsAction = () => ({ type: CLEAN_SPOTS_TYPE });
export const cleanLikeListAction = () => ({ type: CLEAN_LIKE_LIST_TYPE });
export const cleanCurrentInfoAction = () => ({ type: CLEAN_CURRENT_INFO_TYPE });

const loadAreasSaga = createSaga(LOAD_AREAS_TYPE, spotAPI.loadAreas);
const loadSpotsSaga = createSaga(LOAD_SPOTS_TYPE, spotAPI.loadSpots);
const loadDetailSpotSaga = createSaga(LOAD_DETAIL_SPOT_TYPE, spotAPI.loadDetailSpot);
const addSpotLikeSaga = createSaga(ADD_SPOT_LIKE_TYPE, spotAPI.addSpotLike);
const removeSpotLikeSaga = createSaga(REMOVE_SPOT_LIKE_TYPE, spotAPI.removeSpotLike);
const checkLikeListSaga = createSaga(CHECK_LIKE_LIST_TYPE, spotAPI.checkLikeList);

export function* spotSaga() {
    yield takeLatest(LOAD_AREAS_TYPE, loadAreasSaga);
    yield takeLatest(LOAD_SPOTS_TYPE, loadSpotsSaga);
    yield takeLatest(LOAD_DETAIL_SPOT_TYPE, loadDetailSpotSaga);
    yield takeLatest(ADD_SPOT_LIKE_TYPE, addSpotLikeSaga);
    yield takeLatest(REMOVE_SPOT_LIKE_TYPE, removeSpotLikeSaga);
    yield takeLatest(CHECK_LIKE_LIST_TYPE, checkLikeListSaga);
}

const initialState = {
    areas: null,
    spots: null,
    detail: null,
    spotError: null,
    currentInfo: {
        areaNum: 1,
        pageNum: 1,
        blockNum: 0,
        totalPage: null,
        pagination: null,
    },
    likeList: null,
};

function spotReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_AREAS_SUCCESS_TYPE:
            return {
                ...state,
                areas: action.payload.data.items,
            };
        case LOAD_AREAS_FAILURE_TYPE:
            return {
                ...state,
                spotError: action.payload.error,
            };
        case LOAD_SPOTS_SUCCESS_TYPE:
            return {
                ...state,
                spots: {
                    list: action.payload.data.items.map((item) => {
                        return {
                            info: {
                                ...item,
                                like: false,
                            },
                        };
                    }),
                    totalCount: action.payload.data.totalCount,
                },
            };
        case LOAD_SPOTS_FAILURE_TYPE:
            return {
                ...state,
                spotError: action.payload.error,
            };
        case UPDATE_AREA_NUM_TYPE:
            return {
                ...state,
                currentInfo: {
                    ...state.currentInfo,
                    areaNum: action.num,
                },
            };
        case UPDATE_PAGE_NUM_TYPE:
            return {
                ...state,
                currentInfo: {
                    ...state.currentInfo,
                    pageNum: action.num,
                },
            };
        case UPDATE_BLOCK_NUM_TYPE:
            return {
                ...state,
                currentInfo: {
                    ...state.currentInfo,
                    blockNum: action.num,
                },
            };
        case UPDATE_TOTAL_PAGE_TYPE:
            return {
                ...state,
                currentInfo: {
                    ...state.currentInfo,
                    totalPage: action.num,
                },
            };
        case UPDATE_PAGINATION_TYPE:
            return {
                ...state,
                currentInfo: {
                    ...state.currentInfo,
                    pagination: action.num,
                },
            };
        case LOAD_DETAIL_SPOT_SUCCESS_TYPE:
            return {
                ...state,
                detail: {
                    info: {
                        ...state.detail.info,
                        overview: action.payload.data.overview,
                        likeCount: action.payload.data.likeCount,
                    },
                },
            };
        case LOAD_DETAIL_SPOT_FAILURE_TYPE:
            return {
                ...state,
                spotError: action.payload.error,
            };
        case UPDATE_DETAIL_SPOT_TYPE:
            return {
                ...state,
                detail: {
                    info: {
                        title: action.spotInfo.info.title,
                        contentid: action.spotInfo.info.contentid,
                        firstimage: action.spotInfo.info.firstimage,
                        like: action.spotInfo.info.like,
                    },
                },
            };
        case UNLOAD_DETAIL_SPOT_TYPE:
            return {
                ...state,
                detail: null,
            };
        case ADD_SPOT_LIKE_SUCCESS_TYPE:
            return {
                ...state,
                detail: {
                    info: {
                        ...state.detail.info,
                        likeCount: state.detail.info.likeCount + 1,
                    },
                },
            };
        case ADD_SPOT_LIKE_FAILURE_TYPE:
            return {
                ...state,
                spotError: action.payload.error,
            };
        case REMOVE_SPOT_LIKE_SUCCESS_TYPE:
            return {
                ...state,
                detail: {
                    info: {
                        ...state.detail.info,
                        likeCount: state.detail.info.likeCount - 1,
                    },
                },
            };
        case REMOVE_SPOT_LIKE_FAILURE_TYPE:
            return {
                ...state,
                spotError: action.payload.error,
            };
        case UPDATE_SPOTS_LIKE_TYPE:
            return {
                ...state,
                spots: {
                    list: action.likes.map((like, i) => {
                        return {
                            info: {
                                ...state.spots.list[i].info,
                                like: String(like.contentId) === state.spots.list[i].info.contentid ? like.state : false,
                            },
                        };
                    }),
                    totalCount: state.spots.totalCount,
                },
            };

        case TOGGLE_DETAIL_LIKE_TYPE:
            return {
                ...state,
                detail: {
                    info: {
                        ...state.detail.info,
                        like: !state.detail.info.like,
                    },
                },
            };
        case CHECK_LIKE_LIST_SUCCESS_TYPE: {
            return {
                ...state,

                likeList: action.payload.data,
            };
        }
        case CHECK_LIKE_LIST_FAILURE_TYPE: {
            return { ...state, spotError: action.payload.error };
        }
        case CLEAN_SPOTS_TYPE: {
            return { ...state, likeList: null, spots: null };
        }
        case CLEAN_LIKE_LIST_TYPE: {
            return { ...state, likeList: null };
        }
        case CLEAN_CURRENT_INFO_TYPE: {
            return {
                ...state,
                currentInfo: {
                    areaNum: 1,
                    pageNum: 1,
                    blockNum: 0,
                    totalPage: null,
                    pagination: null,
                },
            };
        }
        default:
            return state;
    }
}

export default spotReducer;