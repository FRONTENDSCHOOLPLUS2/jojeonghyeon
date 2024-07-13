const API_SERVER = "https://api.fesp.shop";

const useMutation = (url, options = {}) => {
  const send = async (addOptions = {}) => {
    if (!url.startsWith("https")) {
      url = API_SERVER + url;
    }

    options = {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
      ...addOptions,
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`2xx 이외의 응답: ${response.status}`);
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return { send };
};

export default useMutation;
