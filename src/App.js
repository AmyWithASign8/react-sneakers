import React from 'react';
import './index.scss';
import {Header, Card, Drawer} from './components';
import {Routes, Route, Link} from 'react-router-dom';
import {Home, Registration, Login, NotFoundPage} from './components/pages';

function App() {

  const [activeDrawer, setActiveDrawer] = React.useState(false);

  return (
    <div className="wrapper clear">
    {activeDrawer && <Drawer onCloseDrawer={() => setActiveDrawer(false)}/>}
    <Link to="/Home" component={<Home/>}>
      <Header onOpenDrawer={() => setActiveDrawer(true)}/>
    </Link>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/auth/registration' element={<Registration/>}/>
      <Route path='/auth/login' element={<Login/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
  </div>
  );
}

export default App;
