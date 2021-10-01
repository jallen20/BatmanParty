import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { render } from 'react-dom';

const target = document.querySelector('#root');

function renderApp(Component: any) {
    render(Component, target);
}

renderApp(App);

reportWebVitals(console.log);
