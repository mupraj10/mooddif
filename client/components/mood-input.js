import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import sentiment from 'sentiment';

//import action creators from store
import { createMood} from '../store';

import CurrentMood from './current-mood';


class MoodInput extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { handleSubmit,  mood} = this.props;


    return (
      <div className="mw5 mw6-ns center home br3 pt3 ph3 pb1 ph5-ns">
        <form onSubmit={handleSubmit} >
          <input className="input-reset ba pa2 mb2 db w-100 f6 " type="text" aria-describedby="mood-desc" name='mood' maxLength="10" placeholder="Use one word to describe how you are feeling." />
        </form>


        {mood && <div> <span className='f4'> mood gif: </span> <CurrentMood mood={mood} /> </div>
      }

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

