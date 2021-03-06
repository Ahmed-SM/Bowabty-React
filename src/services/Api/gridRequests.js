import {get} from './base';

const GridRequests = {
  index: (params, endpoint, setState, template) =>
    get(endpoint, params).then(
      (response) => {
        if (response.data.RESULT_CODE === 401) {
          localStorage.removeItem('accessToken');
        } else {
          setState(response.data.Data);
        }
      }
    ),
}
export default GridRequests;