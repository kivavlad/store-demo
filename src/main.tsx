import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import store from './store';
import App from './app';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
)
