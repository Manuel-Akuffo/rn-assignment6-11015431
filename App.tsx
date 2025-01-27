import React from 'react';
import { Provider } from 'react-redux';
import store from './Store';
import AppNavigator from './AppNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
