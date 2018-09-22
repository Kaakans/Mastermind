// This is the entry file, which kicks off all rendering.
//
// We import h() here because that's the function our JSX elements transpile to.
// That is to say - this:
//     <div a="b">foo</div>
// ... is converted to this:
//     h('div', { a: 'b' }, 'foo')

import { h, render } from 'preact';
import App from './components/app';
import "../less/styles.less";

declare var module: any;

// require('../less/styles.less');

// this holds our rendered root element so we can re-render in response to HMR updates.
let root: Element;

// // Making our app's initialization a function means it's repeatable.
// function init() {
// 	// HMR requires that this be a require()
// 	// let App = require('./components/app').default;

// 	// render the app and save the new root element:
// 	root = render(<App />, document.body, root);
// }

// initial render!
// init();

let init = () => root = render(<App />, document.body, root);

init();

// If this is webpack-dev-server, set up HMR :)
if (module.hot) module.hot.accept('./components/app', init);