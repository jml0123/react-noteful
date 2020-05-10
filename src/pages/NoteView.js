import React  from 'react';
import Note from '../components/Note/Note';

import STORE from "../STORE"

export default function NoteView(props){
    const note = STORE.notes.find(note =>
        note.id === props.match.params.noteId
    )
    return(
        <>
        <Note 
            name = {note.name}
            noteId = {note.id}
            key = {note.id}
            content = {note.content}
            metadata = {note.modified}
            folderId = {note.folderId}
        />
        <p className="note-content">
            {note.content}
        </p>
        </>
    )
}
