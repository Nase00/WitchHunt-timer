import {
	INCREMENT_DAY,
	DECREMENT_DAY,
	RESET_DAY
} from '../constants/ActionTypes';

export default function incrementDay(state = 1, action) {
	switch (action.type) {
	case INCREMENT_DAY:
		return state + 1;
	case DECREMENT_DAY:
		return state - 1;
	case RESET_DAY:
		return 0;
	default:
		return state;
	}
}
