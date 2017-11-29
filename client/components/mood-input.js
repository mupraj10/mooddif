import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import sentiment from 'sentiment';

//import action creators from store
import { createMood} from "../store";

//semantic ui components
import { Input } from "semantic-ui-react";
import MoodCard from './mood-card';


const giphy = require('giphy-api')('h2eVXfaZ7LbgsC9Xt8313wsWJMp4uebj');

class MoodInput extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    const { handleSubmit,  mood} = this.props;
  
    
    return (
      <div>
        <form onSubmit={handleSubmit} >
          <Input  fluid name="mood" name='mood'  placeholder="How are you feeling today?" />
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
      const sentimentValue = sentiment(feeling);
      const score = sentimentValue.score;

      const newMood = {
        score,
        feeling,
        date: new Date()
      }

      dispatch(createMood(newMood))
    }
  }
}
export default connect(mapState, mapDispatch)(MoodInput);

