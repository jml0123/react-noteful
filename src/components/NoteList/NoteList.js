import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom'

import Note from "../Note/Note"
import NoteButton from "../NoteButton/NoteButton"
import NotesContext from "../../NotesContext"
;

class NoteList extends Component {
    static contextType = NotesContext;

    static defaultProps = {
        notes: []
    };


    render(){
  
        let { notes } = this.context;

        if (this.props.folderActive) {
            notes = this.context.notes.filter(note => note.folder_id == this.props.match.params.folder_id)
        }
    
        const noteList = (notes).map(note => 
            {
                return (
                <Note
                    name = {note.note_name}
                    noteId = {note.id}
                    key = {note.id}
                    metadata = {note.date_modified}
                />
            )}
        )      
        return(
            <>
                <Link to={'/addnote'}>
                    <NoteButton label="Add Note" onClick = {this.context.addNote}/>
                </Link>

                {noteList}

            </>
        )
    }
}
export default withRouter(NoteList)