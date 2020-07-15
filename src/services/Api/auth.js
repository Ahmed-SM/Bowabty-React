import { post } from './base';
const Auth = {
  index: (params, setIsAuthenticated, loginFailed) =>
    post('/ADMIN/SYSTEM/LOGIN/USERS_LOGIN', params).then(
        (response) => {
              if(response.data.RESULT_CODE === 401){
              localStorage.removeItem('accessToken');
              loginFailed();
              }
              else {
                console.log(response);
                localStorage.setItem("accessToken", JSON.stringify(response.data.Data.access_token));
                setIsAuthenticated(localStorage.getItem("accessToken") !== null);
              }
        }
    ),
}
export default Auth;