import React from 'react';
import { useDrop } from 'react-dnd';
import cn from 'classnames';
import {
  ConstructorElement,
  Button
} from '@ya.praktikum/react-developer-burger-ui-components';
import {useDispatch, useSelector} from 'react-redux';
import {Route, Redirect, useLocation, useHistory} from 'react-router-dom';
import {addBun, addIngredient, clearOrder} from '../../store/slices/burger-constructor-slice';
import {addBunQuantity, clearQuantities, increaseQuantity} from '../../store/slices/ingredients-slice';
import {postOrder} from '../../store/slices/order-slice';
import {AppRoutes} from '../../utils/constants';
import ConstructorItem from '../constructor-item/constructor-item';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import Price from '../price/price';

import styles from './burger-constructor.module.css';


function BurgerConstructor() {

  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  const location = useLocation();
  const history = useHistory();

  const [isModalVisible, setModalIsVisible] = React.useState(false);

  const handleModalClose = React.useCallback(() => setModalIsVisible(false), []);
  const handleModalOpen = React.useCallback(() => setModalIsVisible(true), []);

  const bunClasses = cn(styles.list_item, styles.bun, styles.element);
  const priceClasses = cn('text_type_digits-medium', styles.price);
  const instructionClasses = cn('text text_type_main-medium', styles.instruction);

  const { ingredients, bun, totalPrice } = useSelector((state) => state.burgerConstructor);
  const isDisabled = ingredients.length === 0 || !bun;
  const buttonStyle = isDisabled ? {opacity: '0.5', pointerEvents: 'none'} : null;

  const onDrop = (item) => {
    if (item.type !== 'bun') {
      dispatch(addIngredient(item));
      dispatch(increaseQuantity(item));
      return;
    }
    dispatch(addBun(item));
    dispatch(addBunQuantity(item));
  };

  const [{isHover}, dropTarget] = useDrop({
    accept: 'ingredient',
    drop(item) {
      onDrop(item);
      return item;
    },
    collect: monitor => ({
      isHover: monitor.isOver(),
    })
  });

  const hoverStyles = isHover ? {border: 'dashed #4C4CFF'} : {border: 'dashed transparent'};

  const onOrderPlacement = () => {
    if (!isAuthenticated) {
      history.push({pathname: AppRoutes.LOGIN, state: {from: location}});
    } else {
      const orderIngredients = [...ingredients.map((item) => item._id), bun._id, bun._id];
      dispatch(postOrder({ingredients: orderIngredients}))
        .then(() => {
          dispatch(clearQuantities());
          dispatch(clearOrder());
        })
      handleModalOpen();
    }
  };

  return (
    <>
      {
        isModalVisible && (
        <Modal onClose={handleModalClose}>
          <OrderDetails onClose={handleModalClose} />
        </Modal>)
      }
      <section className={styles.section}>
        <h2 className="visually-hidden">Ваш заказ:</h2>
        {ingredients.length === 0 && !bun && (
          <p className={instructionClasses}>Перетащи сюда ингредиенты</p>
        )}
        <div className={styles.wrapper} ref={dropTarget} style={hoverStyles}>
          <div className={bunClasses}>
            {
              bun && (
                <ConstructorElement
                  type="top"
                  isLocked={true}
                  text={`${bun.name} (верх)`}
                  price={bun.price}
                  thumbnail={bun.image}
                />
              )
            }
          </div>
            <ul className={styles.list}>
              {ingredients.length > 0 &&
                ingredients.map((ingredient, index) =>
                  <ConstructorItem
                    ingredient={ingredient}
                    index={index}
                    key={ingredient.constructorId}
                    className={styles.list_item}
                  />
              )}
            </ul>
          <div className={bunClasses}>
            {
              bun && (
                <ConstructorElement
                  type="bottom"
                  isLocked={true}
                  text={`${bun.name} (низ)`}
                  price={bun.price}
                  thumbnail={bun.image}
                />
              )
            }
          </div>
        </div>
        <div className={styles.price_wrapper}>
          <Price price={totalPrice} type="primary" className={priceClasses} />
          <Button type="primary" size="large" onClick={onOrderPlacement} disabled={isDisabled} style={buttonStyle}>
            Оформить заказ
          </Button>
        </div>
      </section>
    </>
  )
}


export default BurgerConstructor;
