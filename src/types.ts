import { Location } from 'history';

export type TLocationState = {
  background?: Location;
  from?: string;
};

export type TMenuItem = {
  constructorId?: string;
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
  constructorId?: string;
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
