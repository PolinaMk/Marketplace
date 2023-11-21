import './App.scss';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from './components/Header';
import { ModalCard } from './components/ModalCard';
import { MainPage } from './components/MainPage';
import { ContactsPage } from './components/ContactsPage';
import { Cart } from './components/Cart';

export const App = () => {
  return <Provider store={store}>
    <BrowserRouter>
      <ModalCard></ModalCard>
      <Cart></Cart>
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" Component={MainPage}></Route>
          <Route path="/contacts" Component={ContactsPage}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  </Provider>
}
