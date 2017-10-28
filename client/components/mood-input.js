import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import sentiment from 'sentiment';

//import action creators from store
import { setMood } from "../store";

//semantic ui components
import { Input } from "semantic-ui-react";
import MoodCard from './mood-card';

// import giphy from 'giphy-api';

const giphy = require('giphy-api')('h2eVXfaZ7LbgsC9Xt8313wsWJMp4uebj');

export default class MoodInput extends Component {
  constructor() {
    super();
    this.state = {
      moodInput: '',
      currentMood: '', 
      sentimentValue: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt){
      evt.preventDefault();
    const moodInput = evt.target.value;
        this.setState({ moodInput });
  }

 handleSubmit(evt) {
    evt.preventDefault();
    const currentMood = this.state.moodInput;
    const sentimentValue = sentiment(currentMood);
    console.dir(sentimentValue);



this.setState({ currentMood, sentimentValue});
this.setState({ moodInput:''});

const sentimentWord = sentimentValue.words.toString();

console.log('passed to GIPHY', currentMood)
giphy.translate(currentMood)
.then(res => console.dir(res.data))
.then(data => this.setState({gifUrl: data.bitly_gif_url}))

    
    

  
}
// 

  

  render() {
    const { currentMood, moodInput, sentimentValue } = this.state;
    
    // console.log(sentimentWords);
    
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <Input  fluid name="mood" value={moodInput} onChange={this.handleChange} placeholder="How are you feeling today?" />
        </form>
        {/* <Image src='https://giphy.com/embed/BqJc5y7Oq6wPS' /> */}
        {/* import component for the mood */}
        <MoodCard />
      </div>
    );
  }
}


// // console.log('passed to GIPHY', sentimentWord)
// //     async function result() {
// //         await giphy.translate(sentimentWord);

// //     // .then(res => console.dir(res.data))
// //     // .then(data => this.setState({gifUrl2: data.bitly_gif_url})) 
// //   }