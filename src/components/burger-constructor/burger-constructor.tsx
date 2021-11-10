import React, {CSSProperties} from 'react';
import { useDrop } from 'react-dnd';
import cn from 'classnames';
import {
  ConstructorElement,
  Button
} from '@ya.praktikum/react-developer-burger-ui-components';
import {useSelector} from 'react-redux';
import {useLocation, useHistory} from 'react-router-dom';
import {useAppDispatch} from '../../hooks';
import {addBun, addIngredient, clearOrder} from '../../store/slices/burger-constructor-slice';
import {addBunQuantity, clearQuantities, increaseQuantity} from '../../store/slices/ingredients-slice';
import {postOrder} from '../../store/slices/order-slice';
import {TMenuItem} from '../../types';
import {AppRoutes} from '../../utils/constants';
import ConstructorItem from '../constructor-item/constructor-item';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import Price from '../price/price';

import styles from './burger-constructor.module.css';


function BurgerConstructor(): JSX.Element {

  const dispatch = useAppDispatch();
  const isAuthenticated = useSelector((state: any) => state.user.isAuthenticated);
  const location = useLocation();
  const history = useHistory();

  const [isModalVisible, setModalIsVisible] = React.useState<boolean>(false);

  const handleModalClose = React.useCallback(() => setModalIsVisible(false), []);
  const handleModalOpen = React.useCallback(() => setModalIsVisible(true), []);

  const bunClasses = cn(styles.list_item, styles.bun, styles.element);
  const priceClasses = cn('text_type_digits-medium', styles.price);
  const instructionClasses = cn('text text_type_main-medium', styles.instruction);

  const { ingredients, bun, totalPrice } = useSelector((state: any) => state.burgerConstructor);
  const isDisabled = ingredients.length === 0 || !bun;
  const buttonStyle = isDisabled ? {opacity: '0.5', pointerEvents: 'none'} as CSSProperties : undefined;

  const onDrop = (item: TMenuItem) => {
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
    drop(item: TMenuItem) {
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
      const orderIngredients = [...ingredients.map((item: TMenuItem) => item._id), bun._id, bun._id];
      // @ts-ignore
      dispatch(postOrder(orderIngredients))
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
                ingredients.map((ingredient: TMenuItem, index: number) =>
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
          <Price price={totalPrice} className={priceClasses} />
          <div style={buttonStyle}>
            <Button type="primary" size="large" onClick={onOrderPlacement}>
              Оформить заказ
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}


export default BurgerConstructor;
