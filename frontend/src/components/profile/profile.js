import React from "react";
// import TweetBox from '../tweets/tweet_box';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      purchases: ["Harry Potter"]
    };
  }

  componentWillMount() {
    console.log(this.props.currentUser.id);
    // this.props.fetchUserTweets(this.props.currentUser.id);
  }

  // componentWillReceiveProps(newState) {
  //     this.setState({ tweets: newState.tweets });
  // }

  render() {
    if (this.state.purchases.length === 0) {
      return <div>This user has no Purchases</div>;
    } else {
      return (
        <div>
          <h2>All of This User's Purchases</h2>
          {/* {this.state.purchases.map(tweet => (
                        <TweetBox key={tweet._id} text={tweet.text} />
                    ))} */}
        </div>
      );
    }
  }
}
export default Profile;
