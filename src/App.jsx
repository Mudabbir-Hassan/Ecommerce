import React from 'react';
import MyRoutes from './routing/Routes';
import { Provider } from 'react-redux';
import store from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <MyRoutes />
    </Provider>
  );
}
