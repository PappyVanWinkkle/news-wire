/* ==================
  Actions for News 
======================= */

import axios from 'axios';
import { GET_METRO } from './types';

export default function getMetro() {
	const api_key = `922f29b396de45a4bd3d49152024f5ba`;
	const baseURL = `https://newsapi.org/v2/top-headlines?sources=metro&apiKey=${api_key}`;
	return function(dispatch) {
		axios
			.get(`${baseURL}`)
			.then((response) => {
				dispatch({
					type: GET_METRO,
					payload: response.data.articles
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
}
