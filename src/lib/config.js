const normalizeApiBaseUrl = (url) => {
  if (!url || url === 'undefined' || url === 'null') {
    return 'http://localhost:8001';
  }

  return url.replace(/\/+$/, '');
};

export const API_URL = normalizeApiBaseUrl(process.env.REACT_APP_BACKEND_URL);
