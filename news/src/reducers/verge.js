/* ======================
   TECH-CRUNCH
=========================== */

import { GET_VERGE } from '../actions/types';

const initialState = {
	verge: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_VERGE:
			return {
				...state,
				verge: action.payload
			};
		default:
			return state;
	}
}
