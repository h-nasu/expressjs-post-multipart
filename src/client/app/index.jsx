import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';

import CameraComponent from './CameraComponent.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Capture!</p>
        <CameraComponent scale="1" />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
