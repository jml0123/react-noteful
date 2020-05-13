import React, {Component} from 'react';
import { Route } from 'react-router-dom'

import Nav from "./components/Nav/Nav"

import SidebarList from "./components/SidebarList/SidebarList"
import NoteList from "./components/NoteList/NoteList"

import NoteView from "./pages/NoteView"
import SidebarNoteView from "./pages/SidebarNoteView"

import NotesContext from "./NotesContext"

import config from "./config"
import STORE from "./STORE"
import "./App.css"


class App extends Component {
    
    state = {
      notes: [],
      folders: [],
      error: null
    };

    setData = (notes, folders) => {
      this.setState({
        notes, folders
      })
    }

    componentDidMount(){
      const fetchNotes = `${config.API_ENDPOINT}notes`;
      const fetchFolders = `${config.API_ENDPOINT}folders`;

      Promise.all([
        fetch(fetchNotes).then(res => {
          if (!res.ok){
            throw new Error(res.status)   
          }
          return res.json()
        }),
        fetch(fetchFolders).then(res => {
          if (!res.ok){
            throw new Error(res.status)   
          }
          return res.json()
        }),
      ]).then((res) => {
        this.setData(res[0], res[1])
      })
      .catch(error => this.setState({error}))
    }

    deleteNote = noteId => {
      const newNotes = this.state.notes.filter(
        note => note.id !== noteId
      )
      this.setState({
        notes: newNotes
      })
    }
    

    render(){
      const contextVal = {
        notes: this.state.notes,
        folders: this.state.folders,
        deleteNote: this.deleteNote,
      }

      return (
        <main>
          <NotesContext.Provider value = {contextVal} >
          <Nav />
            <div className="App-container">
              <div className="sidebar-container">
                <Route
                  exact path = "/"
                  component={SidebarList}
                />
                <Route
                  exact path = "/folder/:id"
                  render = {props =>
                    <SidebarList folderActive={true} />}
                />
                <Route
                  exact path = "/note/:noteId" 
                  component = {SidebarNoteView}
                />
              </div>
              <div className = "notes-collection">
                <Route exact path = "/" 
                  component = {NoteList}
                />
                <Route
                  exact path = "/folder/:id"
                  render = {props =>
                    <NoteList folderActive={true} />}
                />
                <Route exact path = "/note/:noteId" 
                  component={NoteView} 
                />
              </div>
            </div>
          </NotesContext.Provider>
        </main>
      )
    }
}

export default App;