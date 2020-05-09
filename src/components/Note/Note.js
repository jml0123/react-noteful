import React, {Component} from 'react';
import { Link } from 'react-router-dom'

import NoteButton from "../NoteButton/NoteButton"

export default class Note extends Component {
    render() {
        return(
             // placeholder link
            <Link to={'/'}>
                <div className="note-wrapper">
                    <h1>{this.props.name}</h1>
                    <div className="note-data-container">
                        <p>{this.props.metadata}</p>
                    </div>
                    <div className="note-button">
                        <NoteButton />
                    </div>
                </div>
            </Link>
        ) 
    }
}