import { combineReducers } from 'redux';

import books from './books' 
import cart from './card' 
import filter from './filter' 

export default combineReducers({
   books,
   cart,
   filter
})