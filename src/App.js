import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom'
import Nav from "./components/Nav/Nav"
import Sidebar from "./components/Sidebar/Sidebar"
import NoteList from "./components/NoteList/NoteList"

import STORE from "./STORE"
import "./App.css"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = STORE;
    }
    render(){
      return (
        <main>
          <Nav />
          <Sidebar 
            folders = {this.state.folders}
          />
          <NoteList 
            notes = {this.state.notes}
          />  
        </main>
      )
    }
}

export default App;