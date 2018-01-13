import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import apis from './Api'

ReactDOM.render(<App api={apis} appId="FindMyBand" youtubeApiKey="AIzaSyCTFwOrrws40mGulV5Jwsv__w6Z9NdjozA" />, document.getElementById('root'))
registerServiceWorker()