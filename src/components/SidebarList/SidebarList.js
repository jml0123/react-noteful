import React, {Component} from 'react';
import SidebarFolder from '../SidebarFolder/SidebarFolder'
import SidebarButton from '../SidebarButton/SidebarButton';


export default class SidebarList extends Component {
    render() {
        const folderList = this.props.folders.map(folder => 
        <SidebarFolder 
            name = {folder.name}
            id = {folder.id}
            key = {folder.id}
        />)
        return (
            <>
                {folderList}
                <SidebarButton label="Add folder" handleClick={()=>{}}/>
            </>
        )
    }
}