import React from "react";
import {format, toDate} from "date-fns";
import { Link } from "react-router-dom";

import { Row } from "../Row/Row";
import { Item } from '../Item/Item'
import { List } from '../List/List';

import styles from './NewsList.module.scss';

const  NewsList = ({ news, setActiveTopic }) => {
	const { news__number, new__title } = styles;

	const content = () => {
		return (
			news.map((item, i) => {
				return (
					<Item key={item.id}>
						<Row>
							<p className={news__number}>{i + 1}.</p>
							<Link to={`/${item.id}`}
								className={new__title}
								onClick={() => setActiveTopic(item)}
								style={{textDecoration: "none", color: "black"}}
							>
								{item.title}
							</Link>
						</Row>
						<Row modification='small'>
							<p>author: {item.by}</p>
							<p>rating: {item.score}</p>
							<p>{format(toDate(item.time * 1000), 'PPpp')}</p>
							{item.kids && <p>comments: {item.descendants}</p>}
						</Row>
					</Item>
				);
			})
		);
	}

	const allNews = content();

	return (
		<List>
			{allNews}
		</List>
	);
}

export { NewsList };