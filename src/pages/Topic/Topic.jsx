import React, { useState, useEffect } from "react";
import {format, toDate} from "date-fns";
import { Link } from "react-router-dom";
import { useHackerNews } from "../../hooks/useHackerNews";

import { Row } from "../../components/Row/Row";
import { Button } from "../../components/Button/Button";
import { Loader } from "../../components/Loader/Loader";
import { ErrorModal } from "../../components/ErrorModal/ErrorModal";
import { Comment } from '../../components/Comment/Comment'
import { List } from "../../components/List/List";

import styles from './Topic.module.scss'

const Topic = ({ topic, setActiveTopic }) => {
	const { title, author, date, comment, back, container } = styles;
	const { error, loading, getComments, getTopic } = useHackerNews();
	const [comments, setComments] = useState(null);
	const [needUpdate, setNeedUpdate] = useState(false);

	useEffect(() => {
		getTopic(topic.id)
			.then(res => setActiveTopic(res));

		getComments(topic.id)
			.then(res => setComments(res));
	}, [needUpdate]);

	const getCommentsList = () => {
		const allComments = topic.kids.map(idComment => {
			const comment = comments[idComment];

			if (comment.dead || comment.deleted) {
				return null;
			}

			return <Comment 
				allComments={comments} 
				comment={comment}
				key={comment.id}/>
		})

		return (
			<List>
				{allComments}
			</List>
		);
	}

	const err = error ? <ErrorModal/> : null;
	const load = loading ? <Loader/> : null;
	const content = comments ? getCommentsList()  : null;


    return (
        <>
			<Button 
						title='update'
						handleClick={() => setNeedUpdate(prev => !prev)}
			/>
            <Row>
                <p className={title}><a href={topic.url}>{topic.title}</a></p>
            </Row>
            <Row>
                <p className={author}>by {topic.by} </p>
                <p className={date}>{format(toDate(topic.time * 1000), 'PPpp')} </p>
                <p className={comment}> comments: {topic.kids ? topic.descendants : 0}</p>
            </Row>
            <Link className={back} to="/">back</Link>
			{err || load || content}
        </>
    );
}

export { Topic };