import * as React from 'react';
import { connect } from 'react-redux';
import { getHotel } from '../actions/hotelActions';
import { getReviews } from '../actions/reviewsActions';

interface HotelAppProps {
  getHotel: () => void,
  getReviews: () => void,
  hotel: any,
  reviews: any
}

class HotelApp extends React.Component<HotelAppProps, {}> {
  componentDidMount() {
    this.props.getHotel();
    this.props.getReviews();
  }

  render() {
    const hotel = this.props.hotel;
    const reviews = this.props.reviews;

    if (!hotel || !reviews) {
      return <p>LOADING</p>
    }

    return (
      <div className="hotel">
        <h1 className="hotel-name">{hotel.name}</h1>
        <div className="hotel-details">
          <img src={hotel.images && hotel.images[0]} />
          <p>{hotel.name}</p>
          <p>{hotel.address}</p>
          <p>{hotel.review_stats && hotel.review_stats.average_score}</p>
        </div>
        <div className="hotel-reviews">
          {reviews.length && reviews.map((review) => <p key={review.id}>{review.title}</p>)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  hotel: state.hotel.hotel,
  reviews: state.reviews.reviews
});

const mapDispatchToProps = (dispatch) => ({
  getHotel: () => dispatch(getHotel()),
  getReviews: () => dispatch(getReviews())
});

export default connect(mapStateToProps, mapDispatchToProps)(HotelApp);