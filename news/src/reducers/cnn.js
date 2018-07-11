/* ================
   REDUCER 
===================== */

import { GET_CNN } from '../actions/types';

const initialState = {
	cnn: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_CNN:
			return {
				...state,
				cnn: action.payload
			};
		default:
			return state;
	}
}
