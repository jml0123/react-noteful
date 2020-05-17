import React from 'react';
import PropTypes from 'prop-types';

export default function SidebarButton(props){
    return(
        <button className="button-wrapper--sidebar" onClick={props.handleClick}>
            <p>{props.label}</p>
        </button>
    )
}

SidebarButton.defaultProps = {
    label: "Click Here"
}

SidebarButton.propTypes = {
    label: PropTypes.string.isRequired,
}