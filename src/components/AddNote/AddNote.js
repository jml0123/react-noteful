import React, {Component} from 'react';
import NotesContext from "../../NotesContext"
import config from "../../config"

import PropTypes from 'prop-types';
import { findAllByTitle } from '@testing-library/react';





export default class AddNote extends Component {
    static contextType = NotesContext;  
    state = {
        error: null,
    };

    getDateTime = () => {
        const event = new Date();
        return (event.toISOString())
    }
    generateUniqueID = () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    handleSubmit = e => {
        e.preventDefault()

        const noteCreated = this.getDateTime()
        const noteId = this.generateUniqueID();

        const { name, content, folder } = e.target;

        const note = {
            id: noteId,
            name: name.value,
            modified: noteCreated,
            folderId: folder.value,
            content: content.value
        }
        this.setState({error: null})
        fetch(`${config.API_ENDPOINT}notes`, {
            method: 'POST',
            body: JSON.stringify(note),
            headers: {
                'content-type': 'application/json'
                // no authorization required
            }
        })
        .then(res => {
            if (!res.ok) {
                return res.json().then(error => {
                    throw error
                })
            }
            return res.json()
        })
        .then(data => {
            note.id = ""
            note.name = ""
            note.modified = ""
            note.folderId =""
            note.content = ""
            this.context.addNote(data)
            this.props.history.push('/')
        })
        .catch(err =>
            this.setState({err}))
    };
  

    handleClickCancel = () => {
        this.props.history.push('/')
    }

    render(){

        const folderSelections = this.context.folders.map(folder => {
            return (
                <option key = {folder.id} value={folder.id}>{folder.name}</option>
            )
        })
        return(
            <section className="AddNote">
                <h2>Add a Note</h2>
                <form
                    className="AddNote-form"
                    onSubmit = {this.handleSubmit}>
                        <div className="form-error" role="alert">
                            {this.state.error && <p>{this.state.error.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="name">
                                Name
                                {' '}
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder = "Buy tomatoes"
                                required />
                        </div>
                        <label htmlFor="content">What do you want to say? {' '}
                        </label>
                        <textarea
                            name="content"
                            id="content"
                            placeholder="Buy San Marzano Tomatoes on Aisle 3"
                        />
                        <label htmlFor="folder">Choose a folder to stash the note</label>
                        <select name="folder" required>
                            {folderSelections}
                        </select>
                        <div className='form-buttons'>
                            <button type='submit'>
                            Add
                            </button>
                            <button type='button' onClick={this.handleClickCancel}>
                            Cancel
                            </button>
                            {' '}
                           
                        </div>
                    </form>
            </section>
        )
    }
}

// Proptype