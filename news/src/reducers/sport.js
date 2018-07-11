/* ================
   REDUCER 
===================== */

import { GET_SPORT } from '../actions/types';

const initialState = {
	sport: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_SPORT:
			return {
				...state,
				sport: action.payload
			};
		default:
			return state;
	}
}
