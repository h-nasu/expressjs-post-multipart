import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';

import AwesomeComponent from './AwesomeComponent.jsx';
import CameraComponent from './CameraComponent.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Capture!</p>
        {/*<AwesomeComponent />*/}
        <CameraComponent scale="1" />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
