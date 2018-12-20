import * as React from 'react';
import { connect } from 'react-redux';
import { actions } from '../actions';
import HotelCard from './HotelCard';

interface IHotelDetailsProps {
  getHotel?: () => void,
  getReviews?: () => void,
  hotel: any,
  reviews: any
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

    return <HotelCard {...this.props}/>;
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