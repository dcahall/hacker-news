import styles from './SubComment.module.scss'

import { Item } from '../Item/Item'
import { Row } from "../Row/Row";

const SubComment = ({ author, text, nesting }) => {
	const { title } = styles;

	return (
        <Item modificator={nesting} >
            <Row>
                <p className={title}>{author}:</p>
                <p>{text}</p>
            </Row>
        </Item>
    );
}

export { SubComment };