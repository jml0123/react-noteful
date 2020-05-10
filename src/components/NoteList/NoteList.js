import React, {Component} from 'react';
import Note from "../Note/Note"
import { withRouter } from 'react-router-dom';
class NoteList extends Component {
    render(){
        let notes = ""
        if (this.props.folderActive) {
            notes = this.props.notes.filter(note => note.folderId === this.props.match.params.id)
        }
        else {
            notes = this.props.notes
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