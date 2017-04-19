import React, { Component } from "react";
import { Task } from "./components/task";
import { Navbar } from './components/navbar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      menuOpen: false
    }
  }
  toggleMenu() {
    console.log('Current menuOpen:' + this.state.menuOpen);
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }
  render() {
    let sidebarClassName = "sidebar"
    if (this.state.menuOpen) {
      sidebarClassName += " sidebar-open"
    }

    return (
      <div className="flex-container">
        <Navbar />
        <div className={sidebarClassName}>
        </div>
        <div className="col-md-12">
          <button type="button" className="btn btn-default" onClick={this.toggleMenu}>Show menu</button>
        </div>
      </div>
    );
  }
}

export default App;
