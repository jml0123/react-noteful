import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';

export default class SidebarFolder extends Component {

    render() {
        return(
            <NavLink to={`/folder/${this.props.id}`} activeClassName="folder--selected">
                <div className="folder-container">
                    <p>{this.props.name}</p>
                </div>
            </NavLink>
        )
    }
}

SidebarFolder.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}