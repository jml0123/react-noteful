import React, {Component} from 'react'

export default class FolderError extends Component{
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    render() {
        if  (this.state.hasError) {
            return (<h1>
                Could not display this folder.
            </h1>);
        }
        return this.props.children
    }
}