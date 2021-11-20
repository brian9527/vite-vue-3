import req from './index_1';

export const getData = () => {
  return req('GET', 'zh-tw/Events/Activity');
};
