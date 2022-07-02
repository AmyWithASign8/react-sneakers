import React from 'react';
import './App.css';
import {Header, Card, Drawer} from './components';

const arrCard = [
  {title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: '/img/sneakers/1.jpg'},
  {title: 'Мужские Кроссовки Nike Air Max 270', price: 15600, imageUrl: '/img/sneakers/2.jpg'},
  {title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, imageUrl: '/img/sneakers/3.jpg'},
  {title: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, imageUrl: '/img/sneakers/4.jpg'},
  {title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: '/img/sneakers/1.jpg'},
  {title: 'Мужские Кроссовки Nike Air Max 270', price: 15600, imageUrl: '/img/sneakers/2.jpg'},
  
]

function App() {

  const [activeDrawer, setActiveDrawer] = React.useState(false);

  return (
    <div className="wrapper clear">
    {activeDrawer && <Drawer onCloseDrawer={() => setActiveDrawer(false)}/>}
    <Header onOpenDrawer={() => setActiveDrawer(true)}/>
    <div className="content p-40">
      <div className='d-flex align-center justify-between mb-40'>
        <h1>Все кроссовки</h1>
        <div className='search-block d-flex'>
          <img src="/img/search.svg" alt="Search" />
          <input type="text" placeholder='Поиск...'/>
        </div>
      </div>
      <div className="d-flex">
        {
          arrCard.map((obj, index) => (
              <Card key={index} title={obj.title} price={obj.price} imageUrl={obj.imageUrl} onClick={() => console.log(obj)}/>
          ))
        }
      </div>
    </div>
  </div>
  );
}

export default App;
