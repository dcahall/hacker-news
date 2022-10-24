import styles from './List.module.scss';

const List = (props) => {
	const { list } = styles;

    return (
        <ul className={list}>
			{props.children}
		</ul>
    )
}

export { List };