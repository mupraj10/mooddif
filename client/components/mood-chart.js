import React, {Component} from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import BubbleChart from '@weknow/react-bubble-chart-d3';


// import {removeMood}

class MoodChart extends Component {
  constructor(props){
    super(props)
  }

  

  render(){
    const {remove, mood} = this.props
    
    return  (
      <div className="list black ph5">
      <BubbleChart
    graph={
      {zoom: 0.8, // 1.1 means 110% of zoom.
      offsetX: -0.05, // -0.05 means that the offset is -5% of the graph width.
      offsetY: -0.01}
    }
  width={1000}
  height={800}
  showLegend={false} // optional value, pass false to disable the legend.
  legendPercentage={20} // number that represent the % of with that legend going to use.
  legendFont={{
        family: 'Arial',
        size: 12,
        color: '#000',
        weight: 'bold',
      }}
  valueFont={{
        family: 'Arial',
        size: 12,
        color: '#fff',
        weight: 'bold',
      }}
  labelFont={{
        family: 'Arial',
        size: 16,
        color: '#fff',
        weight: 'bold',
      }}
  data={[
    { label: 'Happy', value: 1 },
    { label: 'Dramatic', value: 1 },
    { label: 'Emotional', value: 1 },
    { label: 'Scared', value: 1 },
    { label: 'Perky', value: 3 },
    { label: 'Blah', value: 9 },
    { label: 'Cheerful', value: 22 },
    { label: 'Sad', value: 22 },
    { label: 'Excited', value: 26 },
    { label: 'Content', value: 26 },
  ]}
/>
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


export default connect(mapState, mapDispatch)(MoodChart);

// <div className="pv2 ph3">
// <h1 className="f6 ttu tracked"> {moment(mood.date).format('MMMM Do YYYY')}</h1>
// </div>
// <img src={mood.gif} className="w-100 db" alt="Closeup photo of a tabby cat yawning."/>
// <div className="pa3">
//   <a href="#" className="link dim f6 lh-title">{mood.feeling}</a>
//   <small className="gray db pv2"> Mood Score <time> {mood.score}</time></small>
//   <button onClick={remove}>Delete</button>
// </div>