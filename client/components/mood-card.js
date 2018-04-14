import React, {Component} from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import {Collapse} from 'react-collapse';


// import {removeMood}

class MoodCard extends Component {
  constructor(props){
    super(props)
    this.state = {isOpened: false, height: 100, fixedHeight: 200};
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen(evt){
    evt.preventDefault();
    this.state.isOpened ? this.setState({isOpened: false}) : this.setState({isOpened: true})
  }

  render(){
    const {mood} = this.props
  
    return  (
      <div className="ph4 center tc">
      <a onClick={this.handleOpen} className='f2 link hover-dark-blue b no-underline dark-gray dib ph2 pv1 ttl'> {moment(mood.date).format('MMMM D YYYY h:mm a')} </a>

      <Collapse isOpened={this.state.isOpened} fixedHeight={200}>

      <div className="dt mw6 center  pv2-m pv3-ns">
  <div className="db dtc-ns v-mid-ns">
    <img src={mood.gif} alt="A bright blue sky" className="w-100 mw7 w5-ns" />
  </div>
  <div className="db dtc-ns v-mid ph2 pr0-ns pl3-ns">
    <p className="lh-copy">
      {mood.feeling}
    </p>
  </div>
</div>
    </Collapse>
  </div>
   )

  }
 


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

// <div className="pv2 ph3">
// <h1 className="f6 ttu tracked"> {moment(mood.date).format('MMMM Do YYYY')}</h1>
// </div>
// <img src={mood.gif} className="w-100 db" alt="Closeup photo of a tabby cat yawning."/>
// <div className="pa3">
//   <a href="#" className="link dim f6 lh-title">{mood.feeling}</a>
//   <small className="gray db pv2"> Mood Score <time> {mood.score}</time></small>
//   <button onClick={remove}>Delete</button>
// </div>


// <img src={mood.gif} className="w-25 db" alt="Closeup photo of a tabby cat yawning."/>
// <small className="db w-75 dtc-ns v-mid ph2 pr0-ns pl3-ns"> Mood Score <time> {mood.score}</time></small>