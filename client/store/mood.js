import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_MOOD_LIST = 'GET_MOOD_LIST'
const GET_SINGLE_MOOD = "GET_SINGLE_MOOD"


/**
 * INITIAL STATE
 */
const initialState = {
  moodList:[],
  singleMood:{}
}

/**
 * ACTION CREATORS
 */
const getSingleMood = (mood) => ({type: GET_SINGLE_MOOD, mood})

const getMoodList = (moodList) => ({type: GET_MOOD_LIST, moodList})

/**
 * THUNK CREATORS
 */

export const fetchSingleMood = () =>
  dispatch =>
    axios.get(`/api/moods`)
    .then(res => dispatch(getSingleMood(res.data)))
    .then(error => console.log(error));

    
export const fetchMoodList = () =>
dispatch =>
  axios.get(`/api/moods`)
  .then(res => dispatch(getMoodList(res.data)))
  // .then(error => console.error(error));


export const createMood = (mood) =>
 { console.log(mood)
  return (dispatch =>
    axios.post(`/api/moods`, {mood})
      .then(res => {
        dispatch(getSingleMood(res.data))
        // history.push('/moodhere')
      })
      .catch(error =>
        console.err(error)))}



/**
 * REDUCER
 */
export default function (state = initialState, action) {
  // let newState = Object.assign({}, state);
  switch (action.type) {

    case GET_SINGLE_MOOD:
      return action.mood

    case GET_MOOD_LIST:
      return action.moodList

    default:
      return state
  }
}
