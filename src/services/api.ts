import {ApiRoutes, BASE_URL} from '../utils/constants';
import { getCookie } from '../utils/common';

class Api {

  baseUrl: string;

  constructor(options: { baseUrl: string }) {
    this.baseUrl = options.baseUrl;
  }

  _getResponseData(response: Response) {
    console.log(response);
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`${(response.status).toString()}`));
  }

  getIngredients() {
    return fetch(`${this.baseUrl}/ingredients`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + getCookie('token')
      },
    }).then((response) => this._getResponseData(response));
  }

  makeOrder(ingredients: Array<string>) {
    return fetch(`${this.baseUrl}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + getCookie('token')
      },
      body: JSON.stringify({
        ingredients: ingredients,
      }),
    }).then((response) => this._getResponseData(response));
  }

  login(email: string, password: string) {
    return fetch(`${this.baseUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((response) => this._getResponseData(response));
  }

  register(name: string, email: string, password: string) {
    console.log(name, email, password);
    return fetch(`${this.baseUrl}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }).then((response) => this._getResponseData(response));
  }

  refreshToken() {
    const refresh = getCookie('refreshToken');
    console.log(refresh);
    const value = {token: refresh};
    console.log(JSON.stringify(value));
    return fetch(`${this.baseUrl}${ApiRoutes.AUTH}${ApiRoutes.TOKEN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(value)
    });
  }

  logout() {
    return fetch(`${this.baseUrl}/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: getCookie('refreshToken'),
      }),
    }).then((response) => this._getResponseData(response));
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
    return fetch(`${this.baseUrl}/auth/user`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + getCookie('token')
      },
      body: JSON.stringify({
        name, email, password,
      }),
    }).then((response) => this._getResponseData(response));
  }

  requestResetPassword(email: string) {
    return fetch(`${this.baseUrl}/password-reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    }).then((response) => this._getResponseData(response));
  }

  resetPassword(password: string, token: string) {
    return fetch(`${this.baseUrl}/password-reset/reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        token,
      }),
    }).then((response) => this._getResponseData(response));
  }
}

const api = new Api({
  baseUrl: BASE_URL,
});

export default api;