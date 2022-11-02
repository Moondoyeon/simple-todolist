const useAxios = (api) => {
  const API = async (params = [], config = {}) => {
    const { onSuccess, onError } = config;
    const { data, status } = await api(...params);
    if (status >= 200 && status < 300) {
      if (onSuccess) {
        await onSuccess(data);
      }
      return;
    }
    if (onError) {
      await onError(data.message);
    }
  };
  return API;
};
export default useAxios;
