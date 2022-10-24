import { useHttp } from './useHttp';

const useHackerNews = () => {
	const { loading, error, request, setLoading } = useHttp();
	const urlBase = 'https://hacker-news.firebaseio.com/v0/'

	const getNews = async () => {
		const response = await request(`${urlBase}newstories.json`)
		const ids = response.slice(0, 110);
			
		const news = await Promise.all(ids.map(async id => {
			return await request(`${urlBase}item/${id}.json`);	
		}));

		setLoading(false);
		return news.filter(item => item).slice(0, 100);
	}

	const getTopic = async (id) => {
		return await request(`${urlBase}item/${id}.json`);
	}

	const getComments = async (id) => {
		const response = await request(`${urlBase}item/${id}.json`);
		let result = null;

		if (response.kids) {
			result = await gatherComments(response.kids);
		}

		setLoading(false);
		return result;
	}

	const gatherComments = async (kids) => {
		const response = await recursiveComments(kids, 0);
		const result = {};

		for (let item of response) {
			// if (!item.deleted && !item.dead && item.by){
			result[item.id] = item;
			// }
		}
		return result
	}

	const recursiveComments = async (commentsId, nesting) => {
		let res = await Promise.all(commentsId.map(async id => {
			return await request(`${urlBase}item/${id}.json`);	
		}));

		for (let item of res) {
			item.nesting = nesting;
			if (item.kids) {
				res = [...res, ...await recursiveComments(item.kids, nesting + 1)]
			}
		}
		return res;
	}

	return { loading, error, getNews, getComments, getTopic };
}

export { useHackerNews };