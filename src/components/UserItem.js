import React, { Component, Fragment } from 'react';
import { USER_QUERY } from '../queries';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
class UserItem extends Component {
    state = {

    }
    render() {
        //get login of User
        const { login } = this.props.match.params;
        
        return (
            <Fragment>
                <Query query={USER_QUERY} variables= {{login}}>
                {({loading, error, data}) => {
                    if(loading) return "Cargando...";
                    if(error) return `Error: ${error.message}`
                    return(
                        <div className="has-user-item row">
                            <div className="w-100 d-flex p-3">
                                <Link to="/" className="has-text-left d-flex justify-content-center aling-items-center">
                                    <i className="float-left fa fa-angle-left fa-2x fa-lg" aria-hidden="true"></i>
                                    <span className="pl-1">Users</span>
                                </Link>
                                <span className="d-flex justify-content-center w-100"> { data.user.name } </span>
                            </div>
                            { data.user.repositories.nodes.map(item => {
                                return (
                                    <div key= {item.id} className="has-user w-100 p-3">
                                        <span className="has-user-text">{ item.name } </span>
                                        <span className="user-item-text float-right">{ item.totalPR.totalCount }</span>
                                        <br></br>
                                        <span className="user-item-text">{ item.description }</span>
                                        
                                        
                                    </div>
                                )
                            }) }
                        </div>
                    )
                }}
            </Query>
            </Fragment>
        );
    }
}

export default UserItem;