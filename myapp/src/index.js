import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Route from './router/';
import {Provider} from 'react-redux';
import { AppContainer } from 'react-hot-loader';

const render = Component => {
  ReactDOM.render(
    //绑定redux、热加载
    <Provider>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('root'),
  )
}

render(Route);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./router/', () => {
    render(Route);
  })
}
registerServiceWorker();
