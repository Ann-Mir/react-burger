import PropTypes from 'prop-types';
import React from 'react';
import {mapItemsByType} from '../../utils/common';
import {TABS} from '../../utils/constants';
import ingredientProp from '../../utils/ingredient.prop';
import MenuSublist from '../menu-sublist/menu-sublist';
import ScrolledArea from '../scrolled-container/scrolled-area';

import styles from './menu-list.module.css';

function MenuList({ data }) {

  const itemsByType = mapItemsByType(data);

  return (
    <ScrolledArea maxHeight={'756px'}>
      <section className={styles.menu}>
        <h2 className="visually-hidden">Список ингредиентов</h2>

        {Array.from(itemsByType.keys()).map((title) => <MenuSublist key={title} title={TABS[title]} items={itemsByType.get(title)} />)}
      </section>
    </ScrolledArea>
  );
}


MenuList.propTypes = {
  data: PropTypes.arrayOf(ingredientProp.isRequired).isRequired,
};

export default MenuList;
