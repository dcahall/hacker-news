import { useState } from 'react';
import {formatDistanceToNow, toDate} from "date-fns";

import { Row } from '../Row/Row';
import { SubComment } from '../SubComments/SubComment'

import styles from './Comment.module.scss'
import { List } from '../List/List';

const Comment = ({ comment, allComments }) => {
	const [showSubComments, setShowSubComments] = useState(false);
	const { author, labelComments, triangle, triangleBottom, triangleTop, time } = styles;


	const subCommentsData = (comment) => {
		let subComments = comment.kids.map(subId => {
			return allComments[subId];
		});
		
		for (let item of subComments) {
			if (item.kids) {
				subComments = [...subComments, ...subCommentsData(item)];
			}
		}
		return subComments;
	}
	
	const getSubComments = (comment) => {
		const subComData = subCommentsData(comment);

		return subComData.map(comment => {
			if (comment.dead || comment.deleted) {
				return null;
			}

			return <SubComment
				key={comment.id}
				author={comment.by}
				text={comment.text}
				nesting={comment.nesting}/>
			});
	}

	const subComments = showSubComments ? getSubComments(comment) : null;

	return (
		<List>
				<Row>
					<p className={author}>{comment.by}:</p>
					<p>{comment.text}</p>
				</Row>
				{comment.kids &&
					<Row>
						<div
							className={showSubComments ? `${triangle} ${triangleBottom}` : `${triangle} ${triangleTop}`}
							onClick={() => setShowSubComments(prev => !prev)}
						/>
						{!showSubComments && <p className={labelComments}>show comments</p>}
						<p className={time}>{formatDistanceToNow(toDate(comment.time * 1000))} ago</p>
					</Row>
				}
				{subComments}
        </List>
	);
}

export { Comment };