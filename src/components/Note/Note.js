import React, {Component} from 'react';
import { Link } from 'react-router-dom'

import NoteButton from "../NoteButton/NoteButton"

import getOrdinalTime from "../../utils/Date/OrdinalTime"
import monthNames from "../../utils/Date/Months"

export default class Note extends Component {
    render() {
        const dateModified = new Date(this.props.metadata);
        
        return(
             // placeholder link
            <Link to={`/note/${this.props.noteId}`}>
                <div className="note-wrapper">
                    <h1>{this.props.name}</h1>
                    <div className="note-data-container">
                        <p>Date modified on {getOrdinalTime(dateModified.getDate())} {monthNames[dateModified.getMonth()]} {dateModified.getFullYear()}</p>
                        <div className="note-button">
                            <NoteButton onClick={() => {}} label="Delete Note" />
                        </div>
                    </div>
                </div>
            </Link>
        ) 
    }
}