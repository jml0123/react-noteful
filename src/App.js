import React, {Component} from 'react';
import { Route } from 'react-router-dom'

import Nav from "./components/Nav/Nav"

import SidebarList from "./components/SidebarList/SidebarList"
import NoteList from "./components/NoteList/NoteList"

import NoteView from "./pages/NoteView"
import SidebarNoteView from "./pages/SidebarNoteView"

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
          <div className="App-container">
            <div className="sidebar-container">
              <Route
                exact path = "/"
                render = {() =>
                  <SidebarList folders = {this.state.folders}/>}
              />
              <Route
                exact path = "/folder/:id"
                render = {() =>
                  <SidebarList folders = {this.state.folders}/>}
              />
              <Route
                exact path = "/note/:noteId" 
                render = {(SidebarNoteView)}
              />
            </div>
            <div className = "notes-collection">
              <Route exact path = "/" 
                render = {() => 
                  <NoteList notes = {this.state.notes}/>
                }
              />
              <Route
                exact path = "/folder/:id"
                render = {props =>
                  <NoteList notes = {this.state.notes} folderActive={true} />}
              />
              <Route exact path = "/note/:noteId" render={NoteView}/>
            </div>
          </div>
        </main>
      )
    }
}

export default App;