import React, {Component}  from 'react';
import SidebarButton from "../components/SidebarButton/SidebarButton"
import NotesContext from "../NotesContext"
import { withRouter} from 'react-router-dom';

class SidebarNoteView extends Component {
    // noteID, folder id ==> folder name
    static contextType = NotesContext;
    
    render() {

        let { notes } = this.context;
        let { folders } = this.context;

        //console.log(this.context.folders)


        const currentNote = this.context.notes.find(note => 
            note.id == this.props.match.params.note_id)

        const folder = this.context.folders.find(folder => 
            currentNote.folder_id == folder.id)
        
        
        return(
            <>
                <SidebarButton label="Go Back" handleClick = {()=> this.props.history.push('/')} />
                <h1 className="folder-name--notes">{folder.name}</h1>
   
            </>
        )
    }
}

export default withRouter(SidebarNoteView)
//             <h1 className="folder-name--notes">{folder.keys}</h1>