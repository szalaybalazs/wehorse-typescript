import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes';
import Providers from './providers';

// import stylinf
require('./main.scss');

ReactDOM.render(<Providers><App /></Providers>, document.getElementById('root'));