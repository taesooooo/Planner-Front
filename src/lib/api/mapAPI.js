import client from './client'; // client.js를 import
import qs from 'qs';

const baseUri = '/api';

export const findRouteMap = ({ info }) => {
    const coordinates = info.routeInfoList.map((item) => {
        return item.startCoordinate + '|' + item.endCoordinate;
    });
    const queryString = qs.stringify({ coordinates: coordinates }, { arrayFormat: 'comma' });
    return client.get(`${baseUri}/routes/find?${queryString}`);
};
