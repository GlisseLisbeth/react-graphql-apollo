import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

import { USERS_QUERY } from '../queries';

const Users = () => (
    <Query query = {USERS_QUERY} >
        {({ loading, error, data }) => {
            if(loading) return "Cargando...";
            if(error) return `Error: ${error.message}`;

            return(
                <Fragment>
                    <Link to = {`/user/${data.viewer.login}`}>
                        <div className="has-user row d-flex align-items-start flex-row p-3">
                            <img
                            alt="user avatar"
                            src= { data.viewer.avatarUrl}
                        /> 
                            <div className="flex-column align-items-start pl-2">
                                <span className="has-user-text">{ data.viewer.name } { data.viewer.location == null ? '' : `, ${data.viewer.location}`} </span>
                                <br></br>
                                <span className="has-user-text-login">{ data.viewer.login }</span>
                            </div>
                        </div>
                    </Link>
                </Fragment>
            )
        }}
    </Query>
)

export default Users;