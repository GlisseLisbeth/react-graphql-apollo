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