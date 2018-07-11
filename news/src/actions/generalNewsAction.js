/* ==================
  Actions for News 
======================= */

import axios from 'axios';
import { GET_GENERAL_NEWS } from './types';

export default function getGeneralNews() {
	const api_key = `922f29b396de45a4bd3d49152024f5ba`;
	const baseURL = `https://newsapi.org/v2/top-headlines?sources=the-new-york-times&apiKey=${api_key}`;
	return function(dispatch) {
		axios
			.get(`${baseURL}`)
			.then((response) => {
				dispatch({
					type: GET_GENERAL_NEWS,
					payload: response.data.articles
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
}
