import React from 'react';

export default function SidebarButton(props){
    return(
        <button className="button-wrapper--sidebar" onClick={props.handleClick}>
            <p>{props.label}</p>
        </button>
    )
}

