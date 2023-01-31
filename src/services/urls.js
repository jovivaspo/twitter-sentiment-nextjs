const host = process.env.NEXT_PUBLIC_ORIGIN_CORS;
const urls = () => {
  return {
    search: `${host}/api/user/search`,
    tweets: `${host}/api/user/tweets`,
    analyse: `${host}/api/user/tweets/analyse`,
  };
};

export { urls };
