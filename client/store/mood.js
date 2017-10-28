import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const SET_MOOD = 'SET_MOOD'

/**
 * INITIAL STATE
 */
const initialState = {moodInput:''}

/**
 * ACTION CREATORS
 */
export const setMood = (mood) => ({type: SET_MOOD, mood})


/**
 * THUNK CREATORS
 */
export const me1 = () =>
  dispatch =>
    axios.get('/auth/me')
      .then(res =>
        dispatch(getUser(res.data || defaultUser)))
      .catch(err => console.log(err))
      

export const saveMood = (mood) =>
  dispatch =>
    axios.post(`/mood`, { mood })
      .then(res => {
        dispatch(setMood(res.data))
        history.push('/home')
      })
      .catch(error =>
        dispatch(getUser({error})))

export const logout1 = () =>
  dispatch =>
    axios.post('/auth/logout')
      .then(res => {
        dispatch(removeUser())
        history.push('/login')
      })
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_MOOD:
      return action.mood
    default:
      return state
  }
}
