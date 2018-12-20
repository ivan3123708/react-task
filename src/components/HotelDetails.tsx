import * as React from 'react';
import { connect } from 'react-redux';
import { actions } from '../actions';

interface IHotelDetailsProps {
  getHotel?: () => void,
  getReviews?: () => void,
  hotel?: any,
  reviews?: any
}

class HotelDetails extends React.Component<IHotelDetailsProps, {}> {
  componentDidMount() {
    this.props.getHotel && this.props.getHotel();
    this.props.getReviews && this.props.getReviews();
  }

  render() {
    const { hotel } = this.props;
    const { reviews } = this.props;

    if (!hotel || !reviews) {
      return <p>LOADING</p>
    }

    return (
      <div className="hotel">
        <h1 className="hotel-name">{hotel.hotel.name}</h1>
        <div className="hotel-details">
          <img src={hotel.hotel.images && hotel.hotel.images[0]} />
          <p>{hotel.hotel.name}</p>
          <p>{hotel.hotel.address}</p>
          <p>{hotel.hotel.review_stats.average_score}</p>
        </div>
        <div className="hotel-reviews">
          <h2>Reviews</h2>
          {reviews.reviews.map((review) => <p key={review.id}>{review.title}</p>)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state): any => ({
  hotel: state.hotel.hotel,
  reviews: state.reviews.reviews
});

const mapDispatchToProps = () => ({
  getHotel: actions.getHotel,
  getReviews: actions.getReviews
});

export default connect(mapStateToProps, mapDispatchToProps)(HotelDetails);