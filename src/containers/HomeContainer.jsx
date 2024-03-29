import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    changePlannerDataAction,
    loadSharePlannerListAction,
    LOAD_SHARE_PLANNER_LIST_TYPE,
    plannerInitializePropertyAction,
} from '../modules/plannerModule';
import Home from '../components/home/Home';
import { useHistory } from 'react-router';
import { loadReviewListAction } from '../modules/reviewModule';

const HomeContainer = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { sharePlanners, planner, plannerData, reviewList, loading } = useSelector(
        ({ plannerReducer, reviewReducer, loadingReducer }) => ({
            sharePlanners: plannerReducer.sharePlanners,
            planner: plannerReducer.planner,
            plannerData: plannerReducer.plannerData,
            reviewList: (reviewReducer.reviewList && reviewReducer.reviewList.list) || null,
            loading: {
                plannerLoading: loadingReducer[LOAD_SHARE_PLANNER_LIST_TYPE],
            },
        }),
    );

    const { plannerId, pType } = { ...plannerData };

    // 플래너 선택
    const onClickPlanner = (plannerId) => {
        dispatch(changePlannerDataAction({ property: 'plannerId', value: plannerId }));
        dispatch(changePlannerDataAction({ property: 'pType', value: 1 }));
    };

    const handleReviewClick = (reviewId) => {
        history.push(`/reviews/${reviewId}`);
    };

    // 공유 플래너리스트 가져오기
    useEffect(() => {
        const queryString = { itemCount: 4, sortCriteria: 1, pageNum: 1 };
        dispatch(loadSharePlannerListAction(queryString));
        dispatch(loadReviewListAction(queryString));
    }, [dispatch]);

    // 주소 이동
    useEffect(() => {
        if (planner !== false && Object.keys(planner).length <= 0 && plannerId && pType === 1) {
            history.push(`/Planners/${plannerId}`);
        }
    }, [plannerId]);

    // plannerData, sharePlanners 리셋
    useEffect(() => {
        dispatch(plannerInitializePropertyAction('plannerData'));
        dispatch(plannerInitializePropertyAction('planner'));
        return () => {
            dispatch(plannerInitializePropertyAction('sharePlanners'));
        };
    }, []);

    return (
        <Home
            sharePlanners={sharePlanners}
            reviewList={reviewList}
            loading={loading}
            onClickPlanner={onClickPlanner}
            onReviewClick={handleReviewClick}
        />
    );
};

export default HomeContainer;
