import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import NoteButton from "../NoteButton/NoteButton"
import NotesContext from "../../NotesContext"
import getOrdinalTime from "../../utils/Date/OrdinalTime"
import monthNames from "../../utils/Date/Months"
import config from "../../config"


export default class Note extends Component {
    static contextType = NotesContext

    static defaultProps = {
        onDeleteNote: () => {}
    } 

    handleDeleteNote(note_id, callback) {
        const fetchNotes = `${config.API_ENDPOINT}notes/${note_id}`;
    
        fetch(fetchNotes, {method: 'DELETE', body: {'Content-Type': 'application/json'}
        })
        .then(res => {
            if(!res.ok) {
                return res.json().then(error => {
                    throw error
                })
            }
            return res
        })
        .then(data => {
            this.props.onDeleteNote(note_id)
            callback(note_id)
        })
        .catch(err => {
            console.error(err)
        })
    }

    render() {
        const dateModified = new Date(this.props.metadata);
        return(
    
                <div className="note-wrapper">
                    <Link to={`/note/${this.props.noteId}`}>
                        <h1>{this.props.name}</h1>
                    </Link>
                    <div className="note-data-container">
                        <p>Date modified on {getOrdinalTime(dateModified.getDate())} {monthNames[dateModified.getMonth()]} {dateModified.getFullYear()}</p>
                        <NoteButton 
                            handleClick={() => this.handleDeleteNote(this.props.noteId, this.context.deleteNote)}
                        label="Delete Note" 
                        />
                    </div>
                </div>
            ) 
        }
    }

    Note.propTypes = {
        name: PropTypes.string.isRequired,
        noteId: PropTypes.number.isRequired,
        metadata: PropTypes.string.isRequired,
    }