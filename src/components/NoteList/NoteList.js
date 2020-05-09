import React, {Component} from 'react';

import Note from "../Note/Note"

export default class NoteList extends Component {
    render(){
        // if current route matches the folder, then render that folder's notes
        // if note folder id matches current folder, then add to noteList
        const noteList = (this.props.notes).map(note => 
            {return (
                <Note 
                    name = {note.name}
                    id = {note.id}
                    key = {note.id}
                    content = {note.content}
                    metadata = {note.modified}
                    folderId = {note.folderId}
                />
            )}
        )
        return(
            <div className="notes-collection">
                {noteList}
            </div>
        )
    }
}