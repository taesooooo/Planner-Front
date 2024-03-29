import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import ResultFindId from '../../../components/account/find/ResultFindId';
import { initializeAction, initializeErrorAction, initializeIdFindRequestAction } from '../../../modules/accountModule';

const ResultFindIdContainer = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { idFindList, codeRequest, idFindRequest } = useSelector(({ accountReducer }) => ({
        idFindList: accountReducer.idFindList,
        codeRequest: accountReducer.codeRequest,
        idFindRequest: accountReducer.idFindRequest,
    }));

    useEffect(() => {
        return () => {
            dispatch(initializeIdFindRequestAction());
        };
    }, [dispatch]);

    if ((!codeRequest && !idFindRequest) || (codeRequest && !idFindRequest)) {
        alert('잘못된 접근입니다.');
        history.push('/login');
    }

    return <ResultFindId idFindList={idFindList} />;
};

export default ResultFindIdContainer;
