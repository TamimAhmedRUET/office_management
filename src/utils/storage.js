import Cookies from 'js-cookie';

const TOKEN_KEY = 'auth_token';
const REFRESH_TOKEN_KEY = 'refresh_token';

export const storage = {
  getToken: () => Cookies.get(TOKEN_KEY),
  setToken: (token) => Cookies.set(TOKEN_KEY, token, { secure: true, sameSite: 'strict' }),
  removeToken: () => Cookies.remove(TOKEN_KEY),

  getRefreshToken: () => Cookies.get(REFRESH_TOKEN_KEY),
  setRefreshToken: (token) => Cookies.set(REFRESH_TOKEN_KEY, token, { secure: true, sameSite: 'strict' }),
  removeRefreshToken: () => Cookies.remove(REFRESH_TOKEN_KEY),

  clearAll: () => {
    Cookies.remove(TOKEN_KEY);
    Cookies.remove(REFRESH_TOKEN_KEY);
  }
};
