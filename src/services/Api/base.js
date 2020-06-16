import axios from "axios";
const apiClient = axios.create({
  baseURL: API_URL, // <- ENV variable
});
apiClient.interceptors.request.use((config) => {
  return ({
    ...config,
    headers: {
        //params
    },
  })
},
  error => Promise.reject(error),
);

apiClient.interceptors.response.use((response) =>
  response,
  async (error) => {
    //load
    return Promise.reject(error.response.data);
  },
);

const { get, post, put } = apiClient;
export { get, post, put };