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
      <div className="list black">
      <BubbleChart
    graph={
      {zoom: 0.9, // 1.1 means 110% of zoom.
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
    { label: 'CRM', value: 1 },
    { label: 'API', value: 1 },
    { label: 'Data', value: 1 },
    { label: 'Commerce', value: 1 },
    { label: 'AI', value: 3 },
    { label: 'Management', value: 5 },
    { label: 'Testing', value: 6 },
    { label: 'Mobile', value: 9 },
    { label: 'Conversion', value: 9 },
    { label: 'Misc', value: 21 },
    { label: 'Databases', value: 22 },
    { label: 'DevOps', value: 22 },
    { label: 'Javascript', value: 23 },
    { label: 'Languages / Frameworks', value: 25 },
    { label: 'Front End', value: 26 },
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