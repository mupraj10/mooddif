import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import sentiment from 'sentiment'; removing sentiment for now 

//import action creators from store
import { createMood} from "../store";

//semantic ui components
// import { Input } from "semantic-ui-react";
// import MoodCard from './mood-card';

const giphyKey = process.env.GIPHY_KEY;
const giphy = require('giphy-api')(giphyKey);

const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

const toneAnalyzer = new ToneAnalyzerV3({
  username: '"012f55f2-2f8e-45ca-9ef8-ce03aeb19d72"',
  password: 'JQsnPtXKd4RX',
  version: '2017-09-21',
  url: 'https://gateway.watsonplatform.net/tone-analyzer/api/'
});

class MoodInput extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { handleSubmit,  mood} = this.props;
    
    return (
      <div>
        <form onSubmit={handleSubmit} >
          <Input fluid name="mood" name='mood'  placeholder="How are you feeling today?" />
        </form>
       
        <h1> current mood: </h1>

        {mood && <MoodCard  mood={mood} />}
        
      </div>
    );
  }
}


const mapState = (state) => {
  return {
    moodList: state.mood.moodList, 
    mood: state.mood.mood
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt){
      evt.preventDefault();

      const feeling = evt.target.mood.value
      

      // console.log('return', returnTone);

      // const newMood = {
      //   score,
      //   returnTone,
      //   date: new Date()
      // }

      // dispatch(createMood(newMood))
    }
  }
}
export default connect(mapState, mapDispatch)(MoodInput);

