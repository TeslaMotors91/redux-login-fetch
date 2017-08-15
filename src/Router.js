import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './containers/LoginForm';
import NewScreenOne from './containers/NewScreenOne';
import RandomUser from './containers/RandomUser';

const RouterComponent = () => {
  console.log('hey!!');
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
          <Scene
            key="newScreenOne"
            component={NewScreenOne}
            title="New Screen One"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
