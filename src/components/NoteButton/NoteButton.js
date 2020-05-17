import React from 'react';
import PropTypes from 'prop-types';

export default function NoteButton(props) {
    return(
        <button className="button-wrapper--note" onClick={props.handleClick}>
            <p>{props.label}</p>
        </button>
    )
}

NoteButton.defaultProps = {
    label: "Click Here"
}

NoteButton.propTypes = {
    label: PropTypes.string.isRequired,
}