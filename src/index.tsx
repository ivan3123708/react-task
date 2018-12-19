import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import HotelApp from './components/HotelApp';

ReactDOM.render(<Provider store={store}><HotelApp /></Provider>, document.getElementById('app'));