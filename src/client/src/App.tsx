import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Globalstyle from 'components/common/Globalstyle';
// components
import Homepage from 'pages/Homepage';
import SignInPage from 'pages/auth/SignInPage';
import NotFound from 'pages/NotFound';
import SignUpPage from 'pages/auth/SignUpPage';
import MyPage from 'pages/auth/MyPage';
import AdminPage from 'pages/admin/AdminPage';

// modules
import Provider from 'modules/contexts/user';
import Header from 'containers/common/Header';


const App = () => {
  return (
    <>
    <Provider>
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Homepage} exact/>
        <Route path="/signin" component={SignInPage} exact />
        <Route path="/signup" component={SignUpPage} exact />
        <Route path ="/mypage" component={MyPage} exact />
        <Route path ="/admin" component={AdminPage} exact />
        <Route path="*" component={NotFound} status={404} />
      </Switch>
    </Router>
    </Provider>
    <Globalstyle/>
    </>
  )
}

export default App;
