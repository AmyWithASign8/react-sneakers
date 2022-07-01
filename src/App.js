import './App.css';
import {Header, Card} from './components';

function App() {
  return (
    <div className="wrapper clear">
    <Header/>
    <div className="content p-40">
      <div className='d-flex align-center justify-between mb-40'>
        <h1>Все кроссовки</h1>
        <div className='search-block d-flex'>
          <img src="/img/search.svg" alt="Search" />
          <input type="text" placeholder='Поиск...'/>
        </div>
      </div>
      <div className="d-flex">
        <Card/>
        <Card/>
        <Card/>
        <Card/>

      </div>
    </div>
  </div>
  );
}

export default App;
