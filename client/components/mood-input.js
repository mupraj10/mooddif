import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import sentiment from 'sentiment';

//import action creators from store
import { createMood, fetchMoodList } from "../store";

//semantic ui components
import { Input } from "semantic-ui-react";
import MoodCard from './mood-card';


const giphy = require('giphy-api')('h2eVXfaZ7LbgsC9Xt8313wsWJMp4uebj');

class MoodInput extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   moodInput: '',
    //   currentMood: '', 
    //   sentimentValue: {}
    // };
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    this.props.getMoods()
  }

//   handleChange(evt){
//       evt.preventDefault();
//     const moodInput = evt.target.value;
//         this.setState({ moodInput });
//   }

//  handleSubmit(evt) {
//     evt.preventDefault();
//     const currentMood = this.state.moodInput;
//     const sentimentValue = sentiment(currentMood);
//     console.dir(sentimentValue);



// this.setState({ currentMood, sentimentValue});
// this.setState({ moodInput:''});

// const sentimentWord = sentimentValue.words.toString();

// console.log('passed to GIPHY', currentMood)
// giphy.translate(currentMood)
// .then(res => console.dir(res.data))
// .then(data => this.setState({gifUrl: data.bitly_gif_url}))


// }
// 

  

  render() {
    // const { currentMood, moodInput, sentimentValue } = this.state;
    const { handleSubmit, moodList} = this.props;
    
    console.log(moodList);
    
    return (
      <div>
        <form onSubmit={handleSubmit} >
          <Input  fluid name="mood" name='mood'  placeholder="How are you feeling today?" />
        </form>
        {/* <Image src='https://giphy.com/embed/BqJc5y7Oq6wPS' /> */}
        {/* import component for the mood */}
        <MoodCard />
      </div>
    );
  }
}


const mapState = (state) => {
  return {
    moodList: state.mood.moodList
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt){
      evt.preventDefault();
      console.log('in handleSubmit')
      const newMood = {
        feeling: evt.target.mood.value, 
        date: Date.now()
      }
      console.log(newMood)
      dispatch(createMood(newMood))
    },
    getMoods(){
      dispatch(fetchMoodList());
    }
  }
}
export default connect(mapState, mapDispatch)(MoodInput);

