import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import SidebarFolder from '../SidebarFolder/SidebarFolder'
import SidebarButton from '../SidebarButton/SidebarButton';
import NotesContext from "../../NotesContext"

export default class SidebarList extends Component {
    static contextType = NotesContext;

    static defaultProps = {
        folders: []
    }

    render() {
        const { folders } = this.context

        const folderList = folders.map(folder => 
        <SidebarFolder 
            name = {folder.name}
            id = {folder.id}
            key = {folder.id}
        />)
        return (
            <>
                {folderList}
                <Link to="/addfolder">
                    <SidebarButton label="Add folder" handleClick={()=>{}}/>
                </Link>
            </>
        )
    }
}
