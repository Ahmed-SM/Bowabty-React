import {get} from './base';
const GridRequests = {
  index: (params, endpoint, setState, template) =>
    get(endpoint, params).then(
      (response) => {
        if (response.data.RESULT_CODE === 401) {
          localStorage.removeItem('accessToken');
        } else {
          console.log(template.ar.length)
          let temp = Object.assign([], template);
          response.data.Data.forEach(item => {
            let objectAR = {};
            let objectEN = {};
            console.log("------")
              for (const [key, value] of Object.entries(item)) {
                  if( key.endsWith("AR")){
                      objectAR[key.substring( 0, key.indexOf( "_AR" ))] = value;
                  }
                  else if (key.endsWith("EN")){
                      objectEN[key.substring( 0, key.indexOf( "_EN" ))] = value;
                  }
                  else{
                    objectAR[key] = value;
                    objectEN[key] = value;
                  }
                }
                temp.ar.push(objectAR);  
                temp.en.push(objectEN);  
          });
          console.log(temp)
          setState(temp);
        }
      }
    ),
}
export default GridRequests;
