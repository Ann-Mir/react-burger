import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from '../../app-header/app-header';
import MainWrapper from '../../main-wrapper/main-wrapper';
import ingredientProp from '../../../utils/ingredient.prop';
import styles from './main-page.module.css';


function MainPage({ data }) {
  console.log(data);
  return (
    <div className={styles.wrapper}>
      <AppHeader className={styles.header}/>
      <MainWrapper data={data}/>
    </div>
  )
}

MainPage.propTypes = {
  data: PropTypes.arrayOf(ingredientProp.isRequired).isRequired,
};


export default MainPage;
