/* ================
   REDUCER 
===================== */

import { GET_REDDIT } from '../actions/types';

const initialState = {
	reddit: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_REDDIT:
			return {
				...state,
				reddit: action.payload
			};
		default:
			return state;
	}
}
