/* ======================
   TECH-CRUNCH
=========================== */

import { GET_TECH_NEWS } from '../actions/types';

const initialState = {
	tech: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_TECH_NEWS:
			return {
				...state,
				tech: action.payload
			};
		default:
			return state;
	}
}
