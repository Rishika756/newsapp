
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
       <Navbar/>
       <News/> 
      </div>
    )
  }
}

// difference in class based compononent and function based component is in function  based component we return direclty a component and in class based component we create render function and then return in it . in class based component we can manage methods easily. 