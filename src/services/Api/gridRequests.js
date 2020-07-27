import {get} from './base';

const GridRequests = {
  index: (params, endpoint, setState, template) =>
    get(endpoint, params).then(
      (response) => {
        if (response.data.RESULT_CODE === 401) {
          localStorage.removeItem('accessToken');
        } else {
          console.log(response.data.Data)
          template.data = response.data.Data;
          setState(template);
        }
      }
    ),
}
export default GridRequests;