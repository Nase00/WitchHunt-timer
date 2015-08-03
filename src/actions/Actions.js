import {
  INCREMENT_DAY,
  DECREMENT_DAY,
  RESET_DAY
} from '../constants/ActionTypes';

export function incrementDay() {
  return {
    type: INCREMENT_DAY
  };
}

export function decrementDay() {
  return {
    type: DECREMENT_DAY
  };
}

export function resetDay() {
  return {
    type: RESET_DAY
  };
}
