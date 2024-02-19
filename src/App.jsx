import { useState } from 'react';
import Food from './components/Food';
import Footer from './components/Footer';
import Header from './components/Header';
import StopWatch from './components/StopWatch';

function App() {
  const [menuItem, setMenuItem] = useState('food-list');

  const clickHandler = (item) => {
    setMenuItem(item);
  };

  return (
    <>
      <Header clickHandler={clickHandler}></Header>
      {menuItem === 'food-list' && <Food></Food>}
      {menuItem === 'stopwatch' && <StopWatch></StopWatch>}
      <Footer></Footer>
    </>
  );
}

export default App;