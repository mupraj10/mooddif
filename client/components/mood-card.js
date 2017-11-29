import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { Card, Image } from 'semantic-ui-react'

// import {removeMood}

const MoodCard = (props) => {
  const {remove, mood} = props

  return  (<Card>
    <Image src={mood.gif} />
    <Card.Content> 
      <Card.Description>
      {moment(mood.date).format('MMMM Do YYYY')}
      <br /> 
        {mood.feeling}
        <br />
        {mood.score}
        <button onClick={remove}>Delete</button>
      </Card.Description>
    </Card.Content>
  </Card> )
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

