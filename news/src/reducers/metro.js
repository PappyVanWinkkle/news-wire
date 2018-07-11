/* ================
   REDUCER 
===================== */

import { GET_METRO } from '../actions/types';

const initialState = {
	metro: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_METRO:
			return {
				...state,
				metro: action.payload
			};
		default:
			return state;
	}
}
