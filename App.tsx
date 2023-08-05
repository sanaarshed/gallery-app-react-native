import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Routes from './Routes';
import store from './src/redux/store';
import {Provider} from 'react-redux';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
