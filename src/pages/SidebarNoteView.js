import React  from 'react';
import SidebarButton from "../components/SidebarButton/SidebarButton"
import { withRouter} from 'react-router-dom';

import STORE from "../STORE"

function SidebarNoteView(props){
    // noteID, folder id ==> folder name
    const note = STORE.notes.find(note =>
        note.id === props.match.params.noteId
    )
    const folder = STORE.folders.find(folder =>
        note.folderId === folder.id
    )

    return(
        <>
        <SidebarButton label="Go Back" handleClick = {()=> props.history.push('/')} />
        <h1 className="folder-name--notes">{folder.name}</h1>
        </>
    )
}

export default withRouter(SidebarNoteView)