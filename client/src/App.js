import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './component/Footer';
import Nav from './component/Nav';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Portal from './pages/Portal';
import NoMatch from './pages/NoMatch';
import Auth from './utils/auth'
import Shop from './pages/Shop';


const httpLink = createHttpLink({
  // for local
//  uri: 'http://localhost:3001/graphql'

  // for production
  uri: '/graphql'

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
            <Route exact path="/#/">
              {Auth.loggedIn() ? (
                <Home />
              ) : (
                <Portal />
              )}
            </Route>
            <Route exact path="/#/home">
              {Auth.loggedIn() ? (
                <Home />
              ) : (
                <Portal />
              )}
            </Route>
            <Route exact path="/#/portal">
              {Auth.loggedIn() ? (
                <Home />
              ) : (
                <Portal />
              )}
            </Route>
            <Route exact path="/#/login" component={Portal} />
            <Route exact path="/#/signup" component={Portal} />
            <Route exact path="/#/shop" >
              {Auth.loggedIn() ? (
                <Shop />
              ) : (
                <Shop />
              )}
            </Route>
            <Route exact path="/#/profile">
              {Auth.loggedIn() ? (
                <Profile />
              ) : (
                <Portal />
              )}
            </Route>
            <Route exact path="/#/profile/:username?">
              {Auth.loggedIn() ? (
                <Profile />
              ) : (
                <Portal />
              )}
            </Route>
            <Route component={NoMatch} />
          </Switch>
        </div>
          <Footer />
      </Router>
    </ApolloProvider >
  );
}

export default App;
