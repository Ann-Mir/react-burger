import {TMenuItem} from '../types';

type TSetCookieProps = {
  expires?: number | string;
  path?: string;
} & { [extraParams: string]: string | number | boolean;}

export const mapItemsByType = (items: Array<TMenuItem>) => {
  const results = new Map();
  items.forEach((item) => {
    const type = item.type;
    if (results.has(type)) {
      const currentItems = results.get(type);
      currentItems.push(item);
      results.set(type, currentItems);
    } else {
      const currentItems = [item]
      results.set(type, currentItems);
    }
  });
  return results;
};

export const getCookie = (name: string) => {
  const matches = document.cookie.match(
    new RegExp(`(?:^|; )${name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1')}=([^;]*)`),
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

export const setCookie = (name: string, value: string | number | boolean, props?: TSetCookieProps) => {
  props = {
    path: '/',
    ...props,
  };
  let exp = props.expires;
  const d = new Date();

  if (typeof exp === 'number' && exp) {
    d.setTime(d.getTime() + exp * 1000);
    exp = Number(d);
    props.expires = exp;
  }
  if (exp && d.toUTCString) {
    props.expires = d.toUTCString();
  }
  value = encodeURIComponent(value);
  let updatedCookie = `${name}=${value}`;
  for (const propName in props) {
    updatedCookie += `; ${propName}`;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += `=${propValue}`;
    }
  }
  document.cookie = updatedCookie;
};

export const deleteCookie = (name: string) => {
  setCookie(name, false, { expires: -1 });
};

export const setSession = (data: any) => {
  const accessToken = data.accessToken.split('Bearer ')[1];
  const refreshToken = data.refreshToken;
  if (accessToken) {
    setCookie('accessToken', accessToken, {expires: 1200});
  }
  if (refreshToken) {
    setCookie('refreshToken', refreshToken);
  }
};

export const formatDate = (date: string) => {
  const [day, time] = Array.from(date.split('.'))[0].split('T');
  return time + ' ' + day;
};
