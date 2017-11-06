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
    const { handleSubmit, mood} = this.props;
    console.log("trying to see single mood here", mood);

    
    return (
      <div>
        <form onSubmit={handleSubmit} >
          <Input  fluid name="mood" name='mood'  placeholder="How are you feeling today?" />
        </form>
        {/* <Image src='https://giphy.com/embed/BqJc5y7Oq6wPS' /> */}
        {/* import component for the mood */}
        <h1> current mood: </h1>

        {mood && <MoodCard mood={mood} />}
        
      </div>
    );
  }
}

// function sentimentValues(moodInput){
//   const sentimentResult = sentiment(moodInput);
//   return {
    
//   }
// }

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
      

      giphy.translate(feeling)
      .then(res => console.log("gipy results", res.data))

      const newMood = {
        feeling, 
        date: new Date()
      }
      
      console.log("dispatch", newMood)
      dispatch(createMood(newMood))
    }
  }
}
export default connect(mapState, mapDispatch)(MoodInput);

