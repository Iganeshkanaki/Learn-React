import React, { Component } from 'react';
import './App.css';
import Navbar from './Pages/Navbar';

class App extends Component {
  render() {    
    return (
      <div> 
        <Navbar />     
        <ul>
          <li>Home</li>
          <li>about</li>
          <li>Contact</li>
        </ul>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis fugiat nemo dolorem sapiente, aut ex minus voluptatem expedita placeat recusandae iste, officiis eveniet accusamus! Animi facilis illo similique expedita reprehenderit numquam laudantium et beatae.</p>
      </div>
    );
  }
}

export default App;
