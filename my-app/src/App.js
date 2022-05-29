import React from 'react';
import './App.css';
import Example from './Carousel';



function App() {

  return (
    <div className="App">
      <header className="App-header">

        <div className='ContCarousell'>
          <Example />
        </div>


        <h2> Restaurant List</h2>

        <div className='ContainerRestaurants'>
          <div className='ListCont'>
            <p>Lista</p>
            <p>Restaurante1</p>
            <p>Restaurante2</p>
            <p>Restaurante3</p>
            <p>Restaurante4</p>
            <p>Restaurante5</p>
            <p>Restaurante6</p>
            <p>Restaurante7</p>
          </div>
            
          <div className='InfoCont'>
            <p>Info</p>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
