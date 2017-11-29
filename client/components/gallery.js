import React, {Component} from 'react'
import { connect } from "react-redux";
import { Card } from 'semantic-ui-react'

import MoodCard from './mood-card';

import {fetchMoodList} from '../store'


class Gallery extends Component {
    constructor(props){
        super(props)
    }

 

    render(){
        const moodList = this.props.moodList
     return (
            <div> 
            {moodList && (<Card.Group> {moodList.map(mood => <MoodCard key={mood.id} mood={mood} />)}</Card.Group>)}

            </div>
     )
    } 
}

const mapState = (state) => {
    return {
        moodList: state.mood.moodList
    }
}



export default connect(mapState)(Gallery);

