/* ==================
  Actions for News 
======================= */

import axios from 'axios';
import { GET_CNN } from './types';

export default function getCnn() {
	const api_key = `922f29b396de45a4bd3d49152024f5ba`;
	const baseURL = `https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=${api_key}`;
	return function(dispatch) {
		axios
			.get(`${baseURL}`)
			.then((response) => {
				dispatch({
					type: GET_CNN,
					payload: response.data.articles
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
}
