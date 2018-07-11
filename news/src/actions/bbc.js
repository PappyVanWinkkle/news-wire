/* ==================
  Actions for News 
======================= */

import axios from 'axios';
import { GET_BBC_NEWS } from './types';

export default function getBbc() {
	const api_key = `922f29b396de45a4bd3d49152024f5ba`;
	const baseURL = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${api_key}`;
	return function(dispatch) {
		axios
			.get(`${baseURL}`)
			.then((response) => {
				dispatch({
					type: GET_BBC_NEWS,
					payload: response.data.articles
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
}
