import React, {Component}  from 'react';
import NotesContext from "../NotesContext"
import Note from '../components/Note/Note';


class NoteView extends Component {


    static contextType = NotesContext;
    
    handleDeleteNote = noteId => {
        this.props.history.push('/')
    }

    render(){
        const note = this.context.notes.find(note =>
            note.id === this.props.match.params.noteId)

        return(
            <>
                <Note 
                    name = {note.name}
                    noteId = {note.id}
                    key = {note.id}
                    content = {note.content}
                    metadata = {note.modified}
                    folderId = {note.folderId}
                    onDeleteNote = {this.handleDeleteNote}
                />
                <p className="note-content">
                    {note.content}
                </p>
            </> 
        )
    }
}



export default NoteView
