import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  createHttpLink
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { BrowserRouter } from "react-router-dom";
import { setContext } from '@apollo/client/link/context';
import { CssBaseline } from "@mui/material";
import { SearchContext } from "./context/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

const githubLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const serverLink = createHttpLink({
  uri: 'https://hr-project-backend.herokuapp.com/graphql'
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = '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';
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});


const client = new ApolloClient({
  link: ApolloLink.split(
    operation => operation.getContext().clientName === 'githubLink',
    authLink.concat(githubLink), //if above 
    serverLink
),
  cache: new InMemoryCache()
});


root.render(
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
