import React, {Component} from 'react';
import { Link } from 'react-router-dom'

import NoteButton from "../NoteButton/NoteButton"
import NotesContext from "../../NotesContext"
import config from "../../config"

import getOrdinalTime from "../../utils/Date/OrdinalTime"
import monthNames from "../../utils/Date/Months"

export default class Note extends Component {
    static contextType = NotesContext

    static defaultProps = {
        onDeleteNote: () => {}
    } 

    handleDeleteNote(noteId, callback) {
        const fetchNotes = `${config.API_ENDPOINT}notes/${noteId}`;
    
        fetch(fetchNotes, {method: 'DELETE', body: {'Content-Type': 'application/json'}
        })
        .then(res => {
            if(!res.ok) {
                return res.json().then(error => {
                    throw error
                })
            }
            return res.json()
        })
        .then(data => {
            this.props.onDeleteNote(noteId)
            callback(noteId)
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

    /*      <NoteButton 
                handleClick={handleDeleteNote(props.noteId, context.deleteNote)}
                label="Delete Note" 
            />
            <button 
                onClick={()=> handleDeleteNote(props.noteId, context.deleteNote)}    
                        >Delete Note</button>

    */

