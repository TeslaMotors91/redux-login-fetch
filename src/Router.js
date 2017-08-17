import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './containers/LoginForm';
//import NewScreenOne from './containers/NewScreenOne';
import RandomUser from './containers/RandomUser';
import ShowUser from './containers/ShowUser';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="root">
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" />
        </Scene>

        <Scene key="main">
          <Scene
            key="randomUser"
            component={RandomUser}
            title="Random User"
            initial
          />
          <Scene key="showUser" component={ShowUser} title="Show User" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
