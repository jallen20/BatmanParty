import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { render } from 'react-dom';

const target = document.querySelector('#root');

function renderApp(Component: any) {
    render(Component, target);
}

renderApp(App);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
