import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import sentiment from 'sentiment';

//import action creators from store
import { createMood} from '../store';

import MoodCard from './mood-card';


class MoodInput extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { handleSubmit,  mood} = this.props;


    return (
      <div className="mw5 mw6-ns center home br3 pt3 ph3 pb1 ph5-ns">
        <form onSubmit={handleSubmit} >
          <input className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="mood-desc" name='mood'  placeholder="How are you feeling today?" />
        </form>

        

        {mood && <div> <h1> current mood: </h1> <MoodCard  mood={mood} /> </div>}

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

