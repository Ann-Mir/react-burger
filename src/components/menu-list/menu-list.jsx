import React from 'react';
import {mapItemsByType} from '../../utils/common';
import {data} from '../../utils/data';
import MenuSublist from '../menu-sublist/menu-sublist';

import styles from './menu-list.module.css';

const TITLES = {
  bun: 'Булки',
  sauce: 'Соусы',
  main: 'Начинки',
};

function MenuList({ }) {

  const itemsByType = mapItemsByType(data);

  return (
    <section>
      <h2 className="visually-hidden">Список ингредиентов</h2>

      {Array.from(itemsByType.keys()).map((title) => <MenuSublist key={title} title={TITLES[title]} items={itemsByType.get(title)} />)}
    </section>
  );
}


export default MenuList;
