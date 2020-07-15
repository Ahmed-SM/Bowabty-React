import axios from "axios";
const apiClient = axios.create({
  baseURL: 'http://localhost:50054/API/', // <- ENV variable
});
apiClient.interceptors.request.use((config) => {
  return ({
    ...config,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
    },
  })
},
  error => Promise.reject(error),
);

apiClient.interceptors.response.use((response) =>
  response,
  async (error) => {
    return Promise.reject(error.response);
  },
);

const { get, post, put } = apiClient;
export { get, post, put };
