import { h, render } from 'preact';
import App from './components/app';
import "../less/styles.less";

declare var module: any;

// this holds our rendered root element so we can re-render in response to HMR updates.
let root: Element;
let init = () => root = render(<App rows={8}/>, document.body, root);

init();

// If this is webpack-dev-server, set up HMR :)
if (module.hot) module.hot.accept('./components/app', init);