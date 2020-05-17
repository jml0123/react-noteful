import React, {Component} from 'react';

import NotesContext from "../../NotesContext"
import config from "../../config"


export default class AddFolder extends Component {
    
    static contextType = NotesContext;  
    state = {
        error: null,
    };

    generateUniqueID = () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    handleSubmit = e => {
        e.preventDefault();
        const { folderName } = e.target;

        const folderId = this.generateUniqueID();

        const folder = {
            id: folderId,
            name: folderName.value
        }
        this.setState({error: null})
        fetch(`${config.API_ENDPOINT}folders`, {
            method: 'POST',
            body: JSON.stringify(folder),
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
            folder.id = ""
            folder.name = ""
            this.context.addFolder(data)
            this.props.history.push('/')
        })
        .catch(err =>
            this.setState({err}))
    }

    handleClickCancel = () => {
        this.props.history.push('/')
    }

    render(){
        // Capture name of folder
        
        return(
            <section className="AddFolder">
                <h2>Add a Folder</h2>
                <form
                    className="AddFolder-form"
                    onSubmit = {this.handleSubmit}>
                        <div className="form-error" role="alert">
                            {this.state.error && <p>{this.state.error.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="folderName">
                                Folder Name
                                {' '}
                            </label>
                            <input
                                type="text"
                                name="folderName"
                                id="folderName"
                                placeholder = "Daily Reflections"
                                required />
                        </div>
                        <div className='form-buttons'>
                            <button type='submit'>
                            Add Folder
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

