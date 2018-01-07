import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://rest.bandsintown.com/'
})
ReactDOM.render(<App api={api} appId="FindMyBand" youtubeApiKey="AIzaSyCTFwOrrws40mGulV5Jwsv__w6Z9NdjozA" />, document.getElementById('root'))
registerServiceWorker()