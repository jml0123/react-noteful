import React, {Component} from 'react';
import { Link } from 'react-router-dom'

export default class SidebarFolder extends Component {
    render() {
        return(
            <Link to={`/folder/${this.props.id}`}>
                <div className="folder-container">
                    <p>{this.props.name}</p>
                </div>
            </Link>
        )
    }
}