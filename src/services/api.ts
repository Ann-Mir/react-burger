import {ApiRoutes, BASE_URL} from '../utils/constants';
import { getCookie } from '../utils/common';

class Api {

  baseUrl: string;

  constructor(options: { baseUrl: string }) {
    this.baseUrl = options.baseUrl;
  }


  fetchIngredients() {
    return fetch(`${this.baseUrl}${ApiRoutes.INGREDIENTS}`);
  }

  postOrder(ingredients: any) {
    return fetch(`${this.baseUrl}${ApiRoutes.ORDERS}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + getCookie('accessToken')
      },
      body: JSON.stringify({
        ingredients: ingredients,
      }),
    });
  }

  login(email: string, password: string) {
    return fetch(`${this.baseUrl}${ApiRoutes.AUTH}${ApiRoutes.LOGIN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
  }

  registerUser(user: any) {
    return fetch(`${this.baseUrl}${ApiRoutes.AUTH}${ApiRoutes.REGISTER}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
  }

  refreshToken() {
    const refresh = getCookie('refreshToken');
    const value = {token: refresh};
    return fetch(`${this.baseUrl}${ApiRoutes.AUTH}${ApiRoutes.TOKEN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(value)
    });
  }

  logout() {
    return fetch(`${this.baseUrl}${ApiRoutes.AUTH}${ApiRoutes.LOGOUT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: getCookie('refreshToken'),
      }),
    });
  }

  getUserInfo() {
    console.log('getUserInfo');
    return fetch(`${this.baseUrl}${ApiRoutes.AUTH}${ApiRoutes.USER}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + getCookie('accessToken')
      },
    });
  }

  updateUserInfo(name:string, email:string, password:string) {
    return fetch(`${this.baseUrl}${ApiRoutes.AUTH}${ApiRoutes.USER}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + getCookie('accessToken')
      },
      body: JSON.stringify({
        name, email, password,
      }),
    });
  }

  resetPassword(email: string) {
    return fetch(`${this.baseUrl}${ApiRoutes.PASSWORD_RESET}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
      }),
    });
  }

  updatePassword(password: string, token: string) {
    return fetch(`${this.baseUrl}${ApiRoutes.PASSWORD_RESET}${ApiRoutes.RESET}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password,
        token,
      }),
    });
  }
}

const api = new Api({
  baseUrl: BASE_URL,
});

export default api;
