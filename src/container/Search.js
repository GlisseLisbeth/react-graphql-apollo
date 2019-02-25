import React, { Component, Fragment } from 'react';
import Result from '../components/Result';
import Users from '../components/Users';

import '../index.css';

class Search extends Component {
    state = {
        value: ''
    }
    searchUsers = (event) => {
        this.setState({
            value: event.target.value
        });
    }
    render() {
        return (
            <Fragment>
                <div className="pb-2 pt-4 mb-2">
                    <h3 className="font-weight-bold">Github Users</h3>
                </div>
                <div className="form-group has-search pb-4">
                    <span className="fa fa-search form-control-feedback"></span>
                    <input 
                        type="text" 
                        value={ this.state.value }
                        className="form-control"
                        onChange = { this.searchUsers }
                        placeholder="Search Github Users"
                    />
                </div>
                { this.state.value === '' ? (<Users />): (<Result value= { this.state.value }/>) }
            </Fragment>
        )
    }
}
export default Search;