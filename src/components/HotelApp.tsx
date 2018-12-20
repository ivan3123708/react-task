import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar';
import HotelDetails from './HotelDetails';
import ReviewForm from './ReviewForm';
import '../styles/index.sass';

const HotelApp = () => (
  <BrowserRouter>
    <div className="container">
      <Navbar />
      <Route exact path="/" component={HotelDetails} />
      <Route path="/review" component={ReviewForm} />
    </div>
  </BrowserRouter>
);

export default HotelApp;