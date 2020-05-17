import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class ErrorBanner extends Component {
    render() {
        return(
            <div className="error-wrapper">
                <p>{this.props.message}</p>
            </div>
        )
    }
}

ErrorBanner.propTypes = {
    message: PropTypes.string.isRequired
}

