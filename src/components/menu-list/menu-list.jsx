import React from 'react';
import {mapItemsByType} from '../../utils/common';
import {TABS} from '../../utils/constants';
import {data} from '../../utils/data';
import MenuSublist from '../menu-sublist/menu-sublist';


function MenuList() {

  const itemsByType = mapItemsByType(data);

  return (
    <section>
      <h2 className="visually-hidden">Список ингредиентов</h2>

      {Array.from(itemsByType.keys()).map((title) => <MenuSublist key={title} title={TABS[title]} items={itemsByType.get(title)} />)}
    </section>
  );
}


export default MenuList;
