import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar';
import HotelDetails from './HotelDetails';
import ReviewForm from './ReviewForm';

const HotelApp = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <Route exact path="/" component={HotelDetails} />
      <Route path="/review" component={ReviewForm} />
    </div>
  </BrowserRouter>
);

export default HotelApp;