import React, {Component}  from 'react';
import NotesContext from "../NotesContext"
import Note from '../components/Note/Note';


class NoteView extends Component {


    static contextType = NotesContext;
    
    handleDeleteNote = noteId => {
        this.props.history.push('/')
    }

    render(){
        let { notes } = this.context;

        const note = this.context.notes.find(note =>
            note.id == this.props.match.params.note_id
        )

        //console.log(note)
        return(
            <>
                <Note 
                    name = {note.note_name}
                    noteId = {note.id}
                    key = {note.id}
                    content = {note.content}
                    metadata = {note.date_modified}
                    folderId = {note.folder_id}
                    onDeleteNote = {this.handleDeleteNote}
                />
                <p className="note-content">
                    {note.content}
                </p>
            </> 
        )
    }
}

//

export default NoteView
