# react-graphql-apollo

This is `react-graphql-apollo`, a React front end client that communicates with the Github GraphQL API and Apollo Client.

## Features

* React 16 with create-react-app
* Responsive Bootstrap 4
* React Router 4
* Apollo with GitHub GraphQL API
  * Queries
  * Optimistic Updates

## Configuration

### Create Token
To create a personal access token for the GitHub API, go to https://github.com/settings/tokens.

Follow these steps to setup the correct permissions:
https://developer.github.com/v4/guides/forming-calls/#authenticating-with-graphql

Per their documentation, you'll need these permissions:
```
user
public_repo
repo
repo_deployment
repo:status
read:repo_hook
read:org
read:public_key
read:gpg_key
```

### Installation
git clone https://github.com/GlisseLisbeth/react-graphql-apollo.git
cd react-graphql-apollo
add your own GitHub personal access token in a .env file in your root folder
scopes/permissions you need to check: admin:org, repo, user, notifications
REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN=xxxXXX

### Deploy
```
yarn
yarn start
visit http://localhost:3000
```