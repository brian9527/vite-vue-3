import axios from 'axios';

axios.defaults.timeout = 5000;
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

axios.interceptors.request.use(
  (config) => {
    config.data = JSON.stringify(config.data);
    config.headers = {
      // 如果沒有CORS的問題可以省略
      'Access-Control-Allow-Origin': import.meta.env.VITE_API_BASE_URL,
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
      'Access-Control-Max-Age': '86400'
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//異常處理
axios.interceptors.response.use(
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

export function fetch(url: string, params = {}) {
  return new Promise<void>((resolve, reject) => {
    axios
      .get(url, { params: params })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function post(url: string, data = {}) {
  return new Promise<void>((resolve, reject) => {
    axios.post(url, data).then(
      (response) => {
        resolve(response.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
}

export function remove(url: string, data = {}) {
  return new Promise<void>((resolve, reject) => {
    axios.delete(url, data).then(
      (response) => {
        resolve(response.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
}

export function put(url: string, data = {}) {
  return new Promise<void>((resolve, reject) => {
    axios.put(url, data).then(
      (response) => {
        resolve(response.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
}

// 將封裝的方法打包起來
export const UserServer = {
  fetch: function (paramObj = {}) {
    return fetch('', paramObj);
  },
  post: function (paramObj = {}) {
    return post('', paramObj);
  },
  put: function (paramObj = {}) {
    return put('', paramObj);
  },
  delete: function (paramObj = {}) {
    return remove('', paramObj);
  }
};
