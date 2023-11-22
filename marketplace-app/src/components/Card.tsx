import { useDispatch, useSelector } from "react-redux";
import { ICard, Identifier } from "../redux/types";
import { AppStore } from "../redux/store";
import { hiddenQuantity, minusOneItem, plusOneItem, seeModalWindowAction, showQuantity, totalMinusSum, totalSum, updateCardId } from "../redux/pages/cards/actions";
import { useEffect, useMemo } from "react";
import _ from "lodash"


interface CardProps {
    card: ICard
}

export const Card: React.FC<CardProps> = ({ card }) => {
  const { cardId } = useSelector((store: AppStore) => store.pages.cards)
  const dispatch = useDispatch()

    const changeModal = (modal: boolean) => {
      dispatch(seeModalWindowAction(modal))
      dispatch(updateCardId(card))
    }

    const showQuantityBlock = () => {
      dispatch(showQuantity(card.id))
      dispatch(totalSum(card.price))
    }

    const hiddenQuantityBlock = () => {
      dispatch(hiddenQuantity(card.id))
    }

    const plusOne = () => {
      dispatch(plusOneItem(card.id))
      dispatch(totalSum(card.price))
    }

    const minusOne = () => {
      dispatch(minusOneItem(card.id))
      hiddenQuantityBlock()
      dispatch(totalMinusSum(card.price))
    }

    const minusItemCheck = useMemo(() => {
      return _.isEqual(card.quantity, 0)
    }, [card])

    const plusItemCheck = useMemo(() => {
      return _.isEqual(card.quantity, 10)
    }, [card])


    return <div className="card">
          <div className="card__top">
            <a className="card__img" href="#">
              <img className="card__img_item" src={card.img} alt="img_monkey_punk"/>
              <div className="card__img_circle" onClick={() => changeModal(true)}>
                <svg className="card__search_svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </a>
          </div>
          <div className="card__content">
            <h2 className="card__title"><a className="card__title_link" href="#">{card.title}</a></h2>
            <p className="card__description">{card.body}</p>
          </div>
          <div className="card__bottom">
            <h2 className="card__bottom_price">{card.price}$</h2>
            {card.quantityBlock && <div className="card__bottom_quantity-wrapper">
                <button type="button" className="btn btn-primary card__btn-quantity card__btn-quantity-minus" onClick={() => minusOne()} disabled={minusItemCheck}>-</button>
                <p className="card__bottom_quantity">{card.quantity}</p>
                <button type="button" className="btn btn-primary card__btn-quantity card__btn-quantity-plus" onClick={() => plusOne()} disabled={plusItemCheck}>+</button>
            </div>}
            {!card.quantityBlock && <button className="card__bottom_btn" onClick={() => showQuantityBlock()}>Add to cart</button>}
          </div>
        </div>
}