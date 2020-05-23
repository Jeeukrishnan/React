import React from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';
import Main from './components/MainComponent';

class App extends React.Component {

  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}


export default App;
