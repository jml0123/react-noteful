import React, {Component} from 'react';
import SidebarFolder from '../SidebarFolder/SidebarFolder'

export default class Sidebar extends Component {
    render() {
        const folderList = this.props.folders.map(folder => 
        <SidebarFolder 
            name = {folder.name}
            id = {folder.id}
            key = {folder.id}
        />)
        return (
            <div className="sidebar-container">
                {folderList}
            </div>
        )
    }
}