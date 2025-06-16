import * as mapAPI from "../lib/api/mapAPI";
import createSaga from "../lib/createSaga";
import { takeLatest } from "redux-saga/effects";

const INITAILIZE_MAP_TYPE = 'map/INITAILIZE';
const FIND_ROUTE_MAP_TYPE = 'map/FIND_ROUTE_MAP';
const FIND_ROUTE_MAP_SUCCESS_TYPE = 'map/FIND_ROUTE_MAP_SUCCESS';
const FIND_ROUTE_MAP_FAILURE_TYPE = 'map/FIND_ROUTE_MAP_FAILURE';

// 액션
export const intializeMapAction = () => ({
    type: INITAILIZE_MAP_TYPE
});
export const findRouteMapAction = (start, end, planInfo) => ({
    type: FIND_ROUTE_MAP_TYPE,
    start,
    end,
    info: planInfo
});

// saga
// const findRouteMapSaga = createSaga(FIND_ROUTE_MAP_TYPE, mapAPI.findRouteMap);

export function* mapSaga() {
    // yield takeLatest(FIND_ROUTE_MAP_TYPE, findRouteMapSaga);
}

const initialState = {
    routeMap: [],
    status: {
        state: null,
        message: ''
    }
};

function mapReducer(state = initialState, action) {
    switch (action.type) {
        case INITAILIZE_MAP_TYPE:
            return { ...initialState };
        case FIND_ROUTE_MAP_SUCCESS_TYPE:
            const planLocationRoute = state.routeMap.find((route) => route.planId === action.info.planId);

            // 일정에 경로가 있는 경우
            if (planLocationRoute) {
                // 현재 일정에 기존 경로가 있는 경우
                if (planLocationRoute.routeList.find((item) => item.startLocationIndex === action.info.startPlanLocationIndex && item.endlocationIndex === action.info.endPlanLocationIndex)) {
                    return {
                        ...state,
                        routeMap: state.routeMap.map((route) =>
                            route.planId === action.info.planId ? {
                                ...route,
                                routeList: route.routeList.map((item) => item.startLocationIndex === action.info.startLocationIndex && item.endlocationIndex === action.info.endLocationIndex ? {
                                    ...item,
                                    route: action.payload.routeList
                                } : item)
                            } : route
                        ),
                        status: {
                            state: action.payload.status,
                            message: action.payload.message
                        }
                    };
                }
                else {
                    // 기존 경로가 없는 경우
                    return {
                        ...state,
                        routeMap: state.routeMap.map((route) =>
                            route.planId === action.info.planId ? {
                                ...route,
                                routeList: route.routeList.concat({
                                    startLocationIndex: action.info.startPlanLocationIndex,
                                    endlocationIndex: action.info.endPlanLocationIndex,
                                    route: action.payload.routeList
                                })
                            } : route
                        ),
                        status: {
                            state: action.payload.status,
                            message: action.payload.message
                        }
                    };
                }
            }

            // 새로운 경로 추가
            return {
                ...state,
                routeMap: state.routeMap.concat({
                    planId: action.info.planId,
                    routeList: [{
                        startLocationIndex: action.info.startPlanLocationIndex,
                        endlocationIndex: action.info.endPlanLocationIndex,
                        route: action.payload.routeList
                    }]
                }),
                status: {
                    state: action.payload.status,
                    message: action.payload.message
                }
            };
        case FIND_ROUTE_MAP_FAILURE_TYPE:
            return {
                ...state,
                routeMap: null,
                status: {
                    state: action.payload.status,
                    message: action.payload.message
                }
            };
        default:
            return state;
    }
};

export default mapReducer;