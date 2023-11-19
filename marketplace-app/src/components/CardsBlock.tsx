import { useDispatch, useSelector } from "react-redux"
import { AppStore } from "../redux/store"
import { useEffect } from "react"
import { getCards } from "../redux/pages/cards/actions"
import { Card } from "./Card"

export const CardsBlock: React.FC = () => {
    const { cards, loading } = useSelector((store: AppStore) => store.pages.cards)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCards() as any)
    }, [])

    if (loading) {
        return <div className="container">
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    }

    return <div className="cards" id="cardsAll">
        <div className="container container__cards" id="cardsTotal">
            {cards.map((card) => {
                return <Card key={card.id} card={card}></Card>
            })}
      </div>
    </div>
}