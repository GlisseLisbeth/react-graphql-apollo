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