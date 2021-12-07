import { Location } from 'history';

export type TLocationState = {
  background?: Location;
  from?: string;
  currentOrders?: TFeedOrder[];
};

export type TMenuItem = {
  constructorId?: string | number;
  _id: string;
  name: string;
  type: string;
  imageLarge?: string;
  imageMobile?: string;
  image: string;
  price: number;
  calories: string | number;
  proteins: string | number;
  fat: string | number;
  carbohydrates: string | number;
  count?: number;
  __v: number;
};

export type TServerMenuItem = {
  _id: string;
  name: string;
  type: string;
  image_large?: string;
  image_mobile?: string;
  image: string;
  price: number;
  calories: string | number;
  proteins: string | number;
  fat: string | number;
  carbohydrates: string | number;
  count?: number;
  __v: number;
};

export type TOrder = {
  ingredients: string[];
  _id: string | number;
  status: string;
  number: number;
  createdAt: string;
  updatedAt: string;
};

export type TOrderStatus = 'done' | 'pending' | 'created';

export type TFeedOrder = {
  ingredients: string[];
  _id: string;
  status: TOrderStatus;
  number: number;
  createdAt: string;
  updatedAt: string;
  name: string;
};
