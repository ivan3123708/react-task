import * as React from 'react';
import { withState } from 'recompose';

const HotelCard = ({ open, setOpen, hotel, reviews }) => (
  <div className="hotel">
    <h3 className="hotel-name">{hotel.hotel.name}</h3>
    <div className="hotel-details">
      <img className="photo" src={hotel.hotel.images && hotel.hotel.images[0]} />
      <div className="info">
        <p>{hotel.hotel.name}</p>
        <p>{hotel.hotel.address}</p>
      </div>
      <p className="score">{hotel.hotel.review_stats.average_score}</p>
    </div>
    <button onClick={() => setOpen(!open)}>Show reviews</button>
    <div className={open ? 'open' : 'closed'}>
      <h3>Reviews</h3>
      {reviews.reviews.map((review) => <p key={review.id}>{review.title}</p>)}
    </div>
  </div>
);

export default withState('open', 'setOpen', false)(HotelCard);