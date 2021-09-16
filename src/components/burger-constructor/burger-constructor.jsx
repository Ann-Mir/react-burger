import PropTypes from 'prop-types';
import React, {useEffect} from 'react';
import { useDrop } from 'react-dnd';
import cn from 'classnames';
import {
  ConstructorElement,
  DragIcon,
  Button
} from '@ya.praktikum/react-developer-burger-ui-components';
import {useDispatch, useSelector} from 'react-redux';
import {addBun, addIngredient} from '../../store/slices/burger-constructor-slice';
import {addBunQuantity, increaseQuantity} from '../../store/slices/ingredients-slice';
import {postOrder} from '../../store/slices/order-slice';
import ingredientProp from '../../utils/ingredient.prop';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import Price from '../price/price';
import ScrolledArea from '../scrolled-area/scrolled-area';

import styles from './burger-constructor.module.css';


function BurgerConstructor({ data }) {

  const dispatch = useDispatch();

  const [isModalVisible, setModalIsVisible] = React.useState(false);

  const handleModalClose = React.useCallback(() => setModalIsVisible(false), []);
  const handleModalOpen = React.useCallback(() => setModalIsVisible(true), []);

  const bunClasses = cn(styles.list_item, styles.bun, styles.element);
  const priceClasses = cn('text_type_digits-medium', styles.price);

  const { ingredients, bun } = useSelector((state) => state.burgerConstructor);

  const getPrice = (ingredients, bun) => {
    if (!bun || !ingredients.length) {
      return 0;
    }
    return ingredients.reduce((sum, ingredient) => Number(ingredient.price) + sum, 0) + 2 * Number(bun.price)
  };

  let totalPrice = 0;

  useEffect(() => {
    totalPrice = getPrice(ingredients, bun);
  }, [ingredients, bun]);

  const onDrop = (item) => {
    if (item.type !== 'bun') {
      dispatch(addIngredient(item));
      dispatch(increaseQuantity(item));
      return;
    }
    dispatch(addBun(item));
    dispatch(addBunQuantity(item));
  };

  const [, dropTarget] = useDrop({
    accept: 'ingredient',
    drop(item) {
      onDrop(item);
    },
  });

  const onOrderPlacement = () => {
    const orderIngredients = [...ingredients.map((item) => item._id), bun._id, bun._id];
    dispatch(postOrder({ingredients: orderIngredients}));
    handleModalOpen();
  };

  return (
    <>
      {
        isModalVisible && (
        <Modal onClose={handleModalClose}>
          <OrderDetails onClose={handleModalClose} />
        </Modal>)
      }
      <section className={styles.section} ref={dropTarget}>
        <h2 className="visually-hidden">Ваш заказ:</h2>
        <div className={styles.wrapper}>
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
          <ScrolledArea maxHeight={'400 px'}>
            <ul className={styles.list}>
              { ingredients.length > 0 &&
                ingredients.map((ingredient, index) => {
                  return (
                    <li key={index} className={styles.list_item}>
                      <div className={styles.drag}>
                        <DragIcon type="primary" />
                      </div>
                      <div className={styles.element}>
                        <ConstructorElement
                          text={ingredient.name}
                          price={ingredient.price}
                          thumbnail={ingredient.image}
                        />
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </ScrolledArea>
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
          <Button type="primary" size="large" onClick={onOrderPlacement}>
            Оформить заказ
          </Button>
        </div>
      </section>
    </>
  )
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(ingredientProp.isRequired).isRequired,
};


export default React.memo(BurgerConstructor);
