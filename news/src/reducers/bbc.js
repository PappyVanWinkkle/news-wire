/* ======================
   TECH-CRUNCH
=========================== */

import { GET_BBC_NEWS } from '../actions/types';

const initialState = {
	bbc: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_BBC_NEWS:
			return {
				...state,
				bbc: action.payload
			};
		default:
			return state;
	}
}
