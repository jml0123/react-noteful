import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'

import Note from "../Note/Note"
import NotesContext from "../../NotesContext"

class NoteList extends Component {
    static contextType = NotesContext;

    static defaultProps = {
        notes: []
    };


    render(){
        let { notes } = this.context;

        if (this.props.folderActive) {
            notes = this.context.notes.filter(note => note.folderId === this.props.match.params.id)
        }
     
        const noteList = (notes).map(note => 
            {return (
                <Note
                    name = {note.name}
                    noteId = {note.id}
                    key = {note.id}
                    content = {note.content}
                    metadata = {note.modified}
                    folderId = {note.folderId}
                />
            )}
        )      
        return(
            <>
                {noteList}
            </>
        )
    }
}
export default withRouter(NoteList)