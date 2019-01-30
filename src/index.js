import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {counter,add,remove,addAsync} from "./index.redux";

const store = createStore(counter,applyMiddleware(thunk))
function render() {
    ReactDOM.render(<App store={store} add={add}  addAsync={addAsync}  remove={remove}/>, document.getElementById('root'));
}
render()
store.subscribe(render)


// const store = createStore(counter)
//
// const init = store.getState()
// console.log(init)
//
// store.dispatch({type:"add"})
// // console.log(store.getState())
//
// function listener() {
//     var current = store.getState();
//     console.log(`现在state是${current}`)
// }
// store.subscribe(listener)
// store.dispatch({type:"add"})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
