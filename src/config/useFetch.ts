import { ref, computed, reactive } from 'vue';
import axios from 'axios';

export const useFetch = (url: string, config = { skip: false }) => {
  const data = ref(null);
  const response = ref<any>(null);
  const error = ref(null);
  const loading = ref(false);

  const fetch = async () => {
    loading.value = true;
    try {
      const res = await axios.request({
        url,
        ...config
      });
      response.value = res;
      data.value = res.data;
    } catch (e: any) {
      error.value = e;
    } finally {
      loading.value = false;
    }
  };

  !config.skip && fetch();

  return { response, error, data, loading, fetch };
};

const cacheMap = reactive(new Map());

export const useFetchCache = (key: any, url: string, config = {}) => {
  const info = useFetch(url, { skip: true, ...config });
  const update = () => cacheMap.set(key, info.response.value);
  const clear = () => cacheMap.set(key, undefined);

  const fetch = async () => {
    try {
      await info.fetch();
      update();
    } catch (e) {
      clear();
    }
  };

  const response = computed(() => cacheMap.get(key));
  const data = computed(() => response.value?.data);

  if (response.value === null) {
    fetch();
  }

  return { ...info, fetch, data, response, clear };
};
