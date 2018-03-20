import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';


// import {removeMood}

const MoodCard = (props) => {
  const {remove, mood} = props

  return  (

    <article className="bg-white fl w-50 mw5 ba b--black-10 mv3">
      <div className="pv2 ph3">
        <h1 className="f6 ttu tracked"> {moment(mood.date).format('MMMM Do YYYY')}</h1>
      </div>
      <img src={mood.gif} className="w-100 db" alt="Closeup photo of a tabby cat yawning."/>
        <div className="pa3">
          <a href="#" className="link dim f6 lh-title">{mood.feeling}</a>
          <small className="gray db pv2"> Mood Score <time> {mood.score}</time></small>
          <button onClick={remove}>Delete</button>
        </div>
</article>
 )
}

const mapState = null; 

const mapDispatch = (dispatch) => {
  return {
    remove(evt){
      evt.preventDefault();
      console.log('in delete')
    }
  }
}


export default connect(mapState, mapDispatch)(MoodCard);

