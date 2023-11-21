import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { seeModalCart } from "../redux/pages/cart/actions"
import { searchCards } from "../redux/pages/cards/actions"
import { useEffect, useMemo, useState } from "react"
import { AppStore } from "../redux/store"

export const Header: React.FC = () => {
  const { cards } = useSelector((store: AppStore) => store.pages.cards)
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState('')

  const openCart = (modal: boolean) => {
      dispatch(seeModalCart(modal))
  }


  return <header className="header">
    <div className="container header__container">
      <a className="header__logo" href="#">NFT Marketplace</a>
      <div className="header__form">
        <div className="header__button_search">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#B5B5B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <input className="header__input" type="text" placeholder="Search" id="search__input" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
      </div>
      <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to='/'>Main</NavLink>
      <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to='/contacts'>Contacts</NavLink>
      <button className="header__button_cart" onClick={() => openCart(true)}>Cart</button>
    </div>
  </header>
}