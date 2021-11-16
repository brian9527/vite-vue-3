import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.travel.taipei/open-api/',
  headers: {
    'Access-Control-Allow-Origin': 'https://www.travel.taipei/open-api/',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
    'Access-Control-Max-Age': '86400'
  },
  timeout: 20000
});

instance.interceptors.request.use(
  (response) => {
    return response;
  },
  (err) => {
    if (err && err.response) {
      switch (err.response.status) {
        case 404:
          console.log('找不到該頁面');
          break;
        case 500:
          console.log('伺服器出錯');
          break;
        case 503:
          console.log('服務失效');
          break;
        default:
          console.log(`連結錯誤${err.response.status}`);
          break;
      }
    } else {
      console.log('連接到服務器失敗');
    }
    return Promise.resolve(err.response);
  }
);

export default function (method: string, url: string, data?: any, config = {}) {
  method = method.toLowerCase();
  switch (method) {
    case 'post':
      return instance.post(url, data, config);
    case 'get':
      return instance.get(url, { params: data });
    case 'delete':
      return instance.delete(url, data);
    case 'put':
      return instance.put(url, data);
    case 'patch':
      return instance.patch(url, data);
    default:
      console.log(`未知的 method: ${method}`);
      return false;
  }
}
