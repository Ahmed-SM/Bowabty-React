import { get, post, put } from 'config/api';
export const Services = {
  index: () =>
    get('/services'),
  single: (id) =>
    get(`/services/${id}`),
  singleByValue: (value) =>
    get(`/services?value=${value}`),
  create: (params) =>
    post('/services', params),
  update: (id, params) =>
    put(`/services/${id}`, params),
}