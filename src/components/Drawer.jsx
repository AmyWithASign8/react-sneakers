import React from 'react';
import {Button} from './index';

function Drawer({onCloseDrawer, items=[]}) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина <img onClick={onCloseDrawer} className="removeBtn cu-p " src="/img/btn-remove.svg" alt="Remove" />
        </h2>

        {items.map((obj) => {
          <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
              className="cartItemImg"></div>

            <div className="mr-20 flex">
              <p className="mb-5">{obj.title}</p>
              <b>{obj.price} руб.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
        </div>
        })

        }

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб. </b>
            </li>
          </ul>
            <Button>
              Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
            </Button>
        </div>
      </div>
    </div>
  )
}

export default Drawer