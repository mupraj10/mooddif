import React from 'react'
import { connect } from "react-redux";
import { Card } from 'semantic-ui-react'

import MoodCard from './mood-card';

const Gallery = (props) => {
    const {moodList} = props
  return (
      <Card.Group> 
      
      {moodList.map(mood => 
         <MoodCard key={mood.id} mood={mood} />)
    }


      
      </Card.Group>
)
}

const mapState = (state) => {
    return {
        moodList: state.mood.moodList
    }
}

export default connect(mapState)(Gallery);