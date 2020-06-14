import React, {Component} from 'react';
import { Route } from 'react-router-dom'
import Nav from "./components/Nav/Nav"
import SidebarList from "./components/SidebarList/SidebarList"
import NoteList from "./components/NoteList/NoteList"
import AddNote from "./components/AddNote/AddNote" // Should this be a page and stored in pages?
import AddFolder from "./components/AddFolder/AddFolder" // Should this be a page and stored in pages?
import NoteError from './components/NoteError/NoteError';
import FolderError from './components/FolderError/FolderError'
import NoteView from "./pages/NoteView"
import SidebarNoteView from "./pages/SidebarNoteView"
import NotesContext from "./NotesContext"
import config from "./config"
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
      //sets state of notes and folders based on request
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
        this.setData(res[0], res[1]) // calls back to setData Function
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
    addNote = note => {
      this.setState({
        notes: [...this.state.notes, note]
      })
    }

    addFolder = folder => {
      this.setState({
        folders: [...this.state.folders, folder]
      })
    }
    

    render(){
      const contextVal = {
        notes: this.state.notes,
        folders: this.state.folders,
        deleteNote: this.deleteNote,
        addNote: this.addNote,
        addFolder: this.addFolder
      }

      return (
        <main>
          <NotesContext.Provider value = {contextVal} >
          <Nav />
            <div className="App-container">
              <div className="sidebar-container">
                <Route
                  exact path= "/"
                  component={SidebarList}
                 />
                <Route
                  exact path = "/folder/:folder_id"
                  render = {props =>
                    <SidebarList folderActive={true} />}
                />
                <Route
                  exact path = "/note/:note_id" 
                  component = {SidebarNoteView}
                />
              </div>
              <div className = "notes-collection">
                <FolderError>
                  <Route exact path = "/"
                    component = {NoteList}
                  />
                </FolderError>
                <FolderError>
                  <Route
                    exact path = "/folder/:folder_id"
                    render = {props =>
                      <NoteList folderActive={true} />}
                  />
                </FolderError>
                <NoteError>
                  <Route exact path = "/note/:note_id" 
                    component={NoteView} 
                  />
                </NoteError>
                <Route 
                  exact path ="/addnote"
                  component={AddNote} 
                />
                <Route
                  exact path="/addfolder"
                  component={AddFolder} 
                />
              </div>
            </div>
          </NotesContext.Provider>
        </main>
      )
    }
}

export default App;





