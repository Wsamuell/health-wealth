import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Render from './pages/Render'
import Footer from './component/Footer';
import Nav from './component/Nav';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Portal from './pages/Portal';
import Auth from './utils/auth'




const httpLink = createHttpLink({
  // for local
  uri: 'http://localhost:3001/graphql'

  // for production
  // uri: '/graphql'

});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const loggedIn = Auth.loggedIn();


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="">
          {loggedIn && (
            <Nav />
          )}
          <Switch>
            <Route exact path="/" component={Portal} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Portal} />
            <Route exact path="/signup" component={Portal} />
            <Route exact path="/profile" component={Profile} />

          </Switch>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
