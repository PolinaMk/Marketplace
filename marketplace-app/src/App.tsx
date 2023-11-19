import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from './components/Header';
import { CardsBlock } from './components/CardsBlock';
import { Promo } from './components/Promo';
import { ModalCard } from './components/ModalCard';

export const App = () => {
  return <Provider store={store}>
    <BrowserRouter>
      <ModalCard></ModalCard>
      <Header></Header>
      <Promo></Promo>
      <CardsBlock></CardsBlock>
    </BrowserRouter>
  </Provider>
}
