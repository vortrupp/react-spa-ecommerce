import { render } from 'react-dom';
import App from './App';
import './icons';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/main.css';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);
