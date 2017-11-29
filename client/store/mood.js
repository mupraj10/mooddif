import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_MOOD_LIST = 'GET_MOOD_LIST'
const GET_NEW_MOOD = "GET_SINGLE_MOOD"
const REMOVE_MOOD = "REMOVE_MOOD"


/**
 * INITIAL STATE not being used 
 */
const initialState = {
  moodList:[],
  singleMood:{}
}

/**
 * ACTION CREATORS
 */
const getNewMood = (mood) => ({type: GET_NEW_MOOD, mood})
const getMoodList = (moodList) => ({type: GET_MOOD_LIST, moodList})

/**
 * THUNK CREATORS
 */

export const fetchSingleMood = () =>
  dispatch =>
    axios.get(`/api/moods`)
    .then(res => dispatch(getNewMood(res.data)))
    .then(error => console.log(error));

    
export const fetchMoodList = () =>
dispatch =>
  axios.get(`/api/moods`)
  .then(res => dispatch(getMoodList(res.data)))
  .catch(error => console.log("this is an error",error));


export const createMood = (mood) => dispatch =>
    axios.post(`/api/moods`, mood)
      .then(res => {
        dispatch(getNewMood(res.data))
        // history.push('/gallery')
      })
      .catch(error =>
        console.log(error))

/**
 * REDUCER
 */
export default function (state = [], action) {
  // let newState = Object.assign({}, state);
  switch (action.type) {

    case GET_NEW_MOOD:
      return  Object.assign({}, state, { mood: action.mood})

    case GET_MOOD_LIST:
      return Object.assign({}, state, {moodList: action.moodList})
    
    case REMOVE_MOOD:
      return [...state.filter(mood => mood.id !== action.id)];

    default:
      return state
  }
}


