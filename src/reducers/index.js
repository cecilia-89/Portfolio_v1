import Swipe from './swipe';
import play from './play';
import animate from './animate';
import { combineReducers } from 'redux';

export const allReducers = combineReducers({
    Swipe,
    play,
    animate,
})