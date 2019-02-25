import gpl from 'graphql-tag';

export const USERS_QUERY = gpl`
{
  viewer {
    avatarUrl
    name
    login
    location
  }
}`;

export const USER_QUERY = gpl`
query USER_QUERY($login:String!){
  user(login: $login) {
    name
    repositories(first: 50, isFork: false) {
      nodes {
        id
        name
        description 
        totalPR: pullRequests {
          totalCount
        }
      }
    }
  }
}
`;

export const USER_SEARCH_QUERY = gpl`
query ($user: String!) {
  search(query: $user, last: 10, type: USER) {
    edges {
      node {
        ... on User {
          id
          avatarUrl
          login
          name
          location
        }
      }
    }
  }
}
`;