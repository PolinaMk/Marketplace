import { ICard } from "../redux/types"
import deleteBtn from '../assets/images/svg/delete.svg';
import { useDispatch } from "react-redux";
import { deleteCard, hiddenQuantity, minusOneItem, plusOneItem, totalMinusSum, totalSum } from "../redux/pages/cards/actions";
import { useMemo } from "react";
import _ from "lodash";

interface CartItemProps {
    card: ICard
}

export const ItemCart: React.FC<CartItemProps> = ({ card }) => {
    const dispatch = useDispatch()

    const plusOne = () => {
        dispatch(plusOneItem(card.id))
        dispatch(totalSum(card.price))
    }

    const minusOne = () => {
        dispatch(minusOneItem(card.id))
        hiddenQuantity()
        dispatch(totalMinusSum(card.price))
    }

    const minusItemCheck = useMemo(() => {
        return _.isEqual(card.quantity, 0)
    }, [card])

    const plusItemCheck = useMemo(() => {
        return _.isEqual(card.quantity, 10)
    }, [card])

    const deleteItem = () => {
        dispatch(deleteCard(card.id))
        dispatch(totalMinusSum(card.price * card.quantity))
    }

    if (card.quantity === 0) {
        deleteItem()
    }


    if (card.quantityBlock) {
        return <div className="cart__item">
        <h2 className="cart__item-name">{card.title}</h2>
        <div className="cart__footer-sumWrapper">
            <p className="cart__item-price">{card.price * card.quantity}</p>
            <span className="cart__item-priceSymbol">$</span>
        </div>
        <div className="card__bottom_quantity-wrapper">
            <div className="card__bottom_quantity-wrapper">
                <button type="button" className="btn btn-primary card__btn-quantity card__btn-quantity-minus" onClick={() => minusOne()} disabled={minusItemCheck}>-</button>
                <p className="card__bottom_quantity">{card.quantity}</p>
                <button type="button" className="btn btn-primary card__btn-quantity card__btn-quantity-plus" onClick={() => plusOne()} disabled={plusItemCheck}>+</button>
            </div>
        </div>
        <div className="cart__item-button-wrapper" onClick={deleteItem}>
            <img className="cart__item-button" src={deleteBtn} alt="delete_btn"></img>
        </div>
    </div>
    } else {
        return null
    }
}