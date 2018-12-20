import * as React from 'react';

interface IReviewFormState {
  title: string;
  body: string;
  blockchain: string;
  score: number;
  [x: number]: string;
}

class ReviewForm extends React.Component<{}, IReviewFormState> {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      blockchain: '',
      score: 1
    }
  }

  onInputChange = (e) => {
    const value = e.target.value;
    const key: any = e.target.name;

    this.setState({ [key]: value });
  }

  render() {
    return (
      <div className="review-form">
        <form action="https://api.review.network/me/reviews" method="POST">
          <input name="entity_id" value="2" hidden/>
          <input name="title" type="text" value={this.state.title} placeholder="Title" onChange={this.onInputChange} />
          <input name="body" type="text" value={this.state.body} placeholder="Body" onChange={this.onInputChange} />
          <input name="blockchain" type="text" value={this.state.blockchain} placeholder="Blockchain Hash" onChange={this.onInputChange} />
          <input name="score" type="number" min="1" max="5" value={this.state.score} placeholder="Score" onChange={this.onInputChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default ReviewForm;