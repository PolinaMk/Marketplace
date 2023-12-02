import { useDispatch, useSelector } from "react-redux"
import { seeModalCart } from "../redux/pages/cart/actions"
import { AppStore } from "../redux/store"
import { ItemCart } from "./ItemCart"
import { deleteAllItemsInCart } from "../redux/pages/cards/actions"

export const Cart: React.FC = () => {
    const { cartModal } = useSelector((store: AppStore) => store.pages.cart)
    const { cards, totalSum } = useSelector((store: AppStore) => store.pages.cards)
    const dispatch = useDispatch()

    const closeCart = () => {
      dispatch(seeModalCart(false))
    }

    const deleteAllItems = () => {
      if (window.confirm('Do you want to delete all items in cart?')) {
        dispatch(deleteAllItemsInCart())
      }
    }

    const payAllItems = () => {
      if (window.confirm('Do you want to order all items in cart?')) {
        alert('Thank you for your order')
        dispatch(deleteAllItemsInCart())
      }
    }

    if (!cartModal) {
        return null
    } else {
        return <div className="cart">
        <div className="container">
          <div className="cart__wrapper">
            <div className="cart__header">
              <h2 className="cart__title">Cart</h2>
              <div className="cart__svg-wrapper" onClick={() => closeCart}>
                <svg className="cart__svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 16.9707L8.48528 8.48542L16.9706 0.000140667L19.0919 2.12146L2.12132 19.092L0 16.9707Z" fill="#AF0101" />
                  <path d="M2.12134 0L10.6066 8.48528L19.0919 16.9706L16.9706 19.0919L1.75834e-05 2.12132L2.12134 0Z" fill="#AF0101" />
                </svg>
              </div>
            </div>
            <div className="cart__items-wrapper">
                {cards.map((card) => {
                    return <ItemCart key={card.id} card={card}></ItemCart>
                })}
            </div>
            <div className="cart__footer">
              <button className="cart__footer-button header__button_cart" onClick={deleteAllItems}>Delete All</button>
              <button className="cart__footer-button-pay header__button_cart" onClick={payAllItems}>Pay</button>
              <p className="cart__footer-text">Total</p>
              <div className="cart__footer-sumWrapper">
                  <p className="cart__footer-sum">{totalSum}</p><span className="cart__footer-symbol">$</span>
              </div>
            </div>
          </div>
        </div>
        <div className="pop_up__overlay" onClick={() => closeCart}></div>
      </div>
    }
}