/* ================
   REDUCER 
===================== */

import { GET_GENERAL_NEWS } from '../actions/types';

const initialState = {
	news: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_GENERAL_NEWS:
			return {
				...state,
				news: action.payload
			};
		default:
			return state;
	}
}
