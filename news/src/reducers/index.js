// combine reducers
import { combineReducers } from 'redux';
import news from './news';
import tech from './tech';
import reddit from './reddit';
import metro from './metro';
import sport from './sport';
import verge from './verge';
import bbc from './bbc';
import cnn from './cnn';

export default combineReducers({
	news: news,
	tech: tech,
	reddit: reddit,
	metro: metro,
	sport: sport,
	verge: verge,
	bbc: bbc,
	cnn: cnn
});
