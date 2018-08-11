import React, { Component } from 'react';
import './App.css';
import Foods from './containers/Foods'
import {Provider} from "react-redux";
import store from "./store/store";

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div className="App">
                <Foods/>
            </div>
        </Provider>
    );
  }
}

export default App;
