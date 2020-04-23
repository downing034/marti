import { combineReducers } from 'redux';
import addresses from '../ducks/addresses';
import people from '../ducks/people';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  addresses,
  people,
  form: formReducer
});
