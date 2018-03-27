import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

const giphyKey = process.env.GIPHY_KEY
const giphy = require('giphy-api')(giphyKey);


import { changeMoodGif } from '../store'

class CurrentMood extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gif: this.props.mood.gif,
      saved: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    let gif;
    evt.preventDefault();
    giphy.translate(this.props.mood.feeling)
    .then(foundGif => {
      gif = foundGif.data.images.original.url;
      this.setState({gif})
    });
  }

  handleSubmit (evt){
    let moodId = this.props.mood.id;
    let gif = this.state.gif;
    console.log(moodId, gif);
    evt.preventDefault();
    this.setState({saved: false});
    this.props.editMoodGif(moodId, gif)
  }

  render() {
    const { mood } = this.props;
    const { gif, saved } = this.state;


    return (
      <div className="ph4 center tc">
        <div className="pv2 ph3">
          <p className="f5 ttu tracked"> {moment(mood.date).format('MMMM Do YYYY')}</p>
        </div>
        <img src={gif} className="w-100 db" alt="Closeup photo of a tabby cat yawning." />
        <div className="pa3">

          <small className="link dim lh-title">You are feeling: {mood.feeling}</small>
          <span className="gray f5 db pv2"> Mood Score <time> {mood.score}</time></span>
          <p className="f5 ttu tracked"> Does the gif describe how you feel? </p>
          { saved ? <div className="dib">
            <button className="f6 link dim br-pill ba bw1 ph3 pv2 mb2 dib dark-green" onClick={this.handleSubmit}>Yep</button> <button className="f6 link dim br-pill ba bw1 ph3 pv2 mb2 dib dark-green" onClick={this.handleChange}>Nope!</button>
          </div> : <a className="f6 link dim br-pill ba bw1 ph3 pv2 mb2 dib dark-green" href='/gallery'> Sweet Saved!</a> }
        </div>

      </div>
    )

  }


}

const mapState = null;

const mapDispatch = (dispatch) => {
  return {
    editMoodGif(moodId, gif) {
      console.log('in edit');
      dispatch(changeMoodGif(moodId, gif));
    }
  }
}


export default connect(mapState, mapDispatch)(CurrentMood);


// <img src={mood.gif} className="w-25 db" alt="Closeup photo of a tabby cat yawning."/>
// <small className="db w-75 dtc-ns v-mid ph2 pr0-ns pl3-ns"> Mood Score <time> {mood.score}</time></small>
