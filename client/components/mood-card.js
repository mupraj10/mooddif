import React from 'react'
import moment from 'moment';

import { Card, Icon, Image } from 'semantic-ui-react'

const MoodCard = (props) => {
  return  (<Card>
    <Image src={props.mood.gif} />
    <Card.Content> 
      <Card.Description>
      {moment(props.mood.date).format('MMMM Do YYYY')}
      <br/> 
        {props.mood.feeling}
        
      </Card.Description>
    </Card.Content>
  </Card> )
}

export default MoodCard;

// <div class="tile is-ancestor">
// <div class="tile is-parent">
//   <article class="tile is-child box">
//     <p class="title">One</p>
//     <p class="subtitle">Subtitle</p>
//   </article>
// </div>
// <div class="tile is-parent">
//   <article class="tile is-child box">
//     <p class="title">Two</p>
//     <p class="subtitle">Subtitle</p>
//   </article>
// </div>
// <div class="tile is-parent">
//   <article class="tile is-child box">
//     <p class="title">Three</p>
//     <p class="subtitle">Subtitle</p>
//   </article>
// </div>
// <div class="tile is-parent">
//   <article class="tile is-child box">
//     <p class="title">Four</p>
//     <p class="subtitle">Subtitle</p>
//   </article>
// </div>
// </div>