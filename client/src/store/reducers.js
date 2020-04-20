import { combineReducers } from 'redux';
import addresses from '../ducks/addresses';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  addresses,
  form: formReducer
});
