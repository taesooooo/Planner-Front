import { all, call, put } from 'redux-saga/effects';
import { loadingFinishAction, loadingStartAction } from '../modules/loadingModule';
import { setRequestSuccess } from '../modules/requestStateModule';

export default function createSaga(type, request) {
    return function* (action) {
        const success = `${type}_SUCCESS`;
        const failure = `${type}_FAILURE`;

        yield put(loadingStartAction(type));
        try {
            const response = yield call(request, action);
            yield put({
                type: success,
                payload: response.data,
                response: response,
                info: action.info
            });

            if (action.sub != null && action.sub.onSuccess != null) {
                yield put(action.sub.onSuccess(response.data));
            }

            yield put(setRequestSuccess(type, true));
        }
        catch (e) {
            if (e.code == 'ERR_CANCELED') {
                yield put({
                    type: `${type}_REQUEST_CANCLED`,
                });
            }
            else {
                console.error(e);
                // yield put({
                //     type: failure,
                //     payload: e.response.data,
                //     response: e.response,
                //     info: action.info
                // });
            }
            yield put(setRequestSuccess(type, false));
        }
        yield put(loadingFinishAction(type));
        yield put(setRequestSuccess(type, false));
    }
}