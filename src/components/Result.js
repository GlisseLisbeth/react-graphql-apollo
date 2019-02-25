import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

import { USER_SEARCH_QUERY } from '../queries';

const Result= (props) => {
        const user = props.value;
        if( user.length === 0) return null;
        
        return (
            <Fragment>
                <Query query={USER_SEARCH_QUERY} variables={{ user }}>
                {({ loading, error, data }) => {
                    if(loading) return "Cargando...";
                    if(error) return `Error: ${error.message}`;
                    if(data.search.edges.length === 0) return (
                        <div className="alert alert-danger" role="alert">
                            No se encontraron resultados
                        </div>);
                    
                    return(
                        <div>
                            { 
                                data.search.edges.map(item => {
                                return (    
                                    <Link key= {item.node.id} to = {`/user/${item.node.login}`}>
                                        <div className="has-user row d-flex align-items-start flex-row p-3">
                                            <img
                                            alt="user avatar"
                                            src= { item.node.avatarUrl}
                                        /> 
                                            <div className="flex-column align-items-start pl-2">
                                                <span className="has-user-text">{ item.node.name } { item.node.location == null ? '' : `, ${item.node.location}`} </span>
                                                <br></br>
                                                <span className="has-user-text-login">{ item.node.login }</span>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            }) }
                        </div>
                    )
                }} 
                </Query>
            </Fragment>
        )
    
}

export default Result;