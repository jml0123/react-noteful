import React from 'react';

export default function NoteButton(props) {
    return(
        <button className="button-wrapper--note" onClick={props.handleClick}>
            <p>{props.label}</p>
        </button>
    )
}