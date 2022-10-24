import { useEffect, useState } from 'react';
import { useHackerNews } from "../../hooks/useHackerNews";

import { Button } from "../../components/Button/Button";
import { Loader } from '../../components/Loader/Loader';
import { ErrorModal } from '../../components/ErrorModal/ErrorModal';
import { NewsList } from '../../components/NewsList/NewsList';


const News = () => {
	const [needUpdate, setNeedUpdate] = useState(false);
	const [news, setNews] = useState(null);
	const {loading, error, getNews} = useHackerNews();

	useEffect(() => {
		getNews()
			.then(res => setNews(res));
	}, [needUpdate])

	useEffect(() => {
		let timerId = setInterval(() => {
			getNews()
				.then(res => setNews(res));
		}, 60000);

		return () => clearInterval(timerId);
	}, [])

	const load = loading ? <Loader/> : null;
	const err = error ? <ErrorModal/> : null;
	const content = news
						? <NewsList news={news}/>
						: null;

	return (
				<>
                	<Button 
						title='update'
						handleClick={() => setNeedUpdate(prev => !prev)}/>
					{err || load || content}
				</>
    );
}

export { News };