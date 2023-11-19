import { useDispatch, useSelector } from "react-redux"
import { AppStore } from "../redux/store"
import { seeModalWindowAction } from "../redux/pages/cards/actions"

export const ModalCard: React.FC = () => {
    const { modal, cardModal } = useSelector((store: AppStore) => store.pages.cards)
    const dispatch = useDispatch()

    const changeModal = (modal: boolean) => {
        dispatch(seeModalWindowAction(modal))
    }


    if (modal === false) {
        return null
    } else {
        return <div className="modal-card">
        <div className="container modal-card__conteiner">
            <div className="modal-card__wrapper">
                <div className="modal-card__svg-wrapper" onClick={() => changeModal(false)}>
                    <svg className="modal-card__svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 16.9707L8.48528 8.48542L16.9706 0.000140667L19.0919 2.12146L2.12132 19.092L0 16.9707Z" fill="#AF0101" /><path d="M2.12134 0L10.6066 8.48528L19.0919 16.9706L16.9706 19.0919L1.75834e-05 2.12132L2.12134 0Z" fill="#AF0101" /></svg>
                </div>
                <div className="card__img modal-card__img-wrapper">
                    <img className="card__img_item modal-card__img_item" src={cardModal?.img} alt="card_img" />
                </div>
                <div className="card__content">
                    <h2 className="card__title modal-card__title">{cardModal?.title}</h2>
                    <p className="card__description modal-card__description">{cardModal?.body}</p>
                </div>
                <div className="card__bottom">
                    <div className="cart__footer-sumWrapper">
                        <h2 className="card__bottom_price modal-card__bottom_price">{cardModal?.price}</h2>
                        <span className="cart__footer-symbol modal-card__bottom_price-symbol">$</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal-card__overlay" onClick={() => changeModal(false)}></div>
      </div>
    }
}