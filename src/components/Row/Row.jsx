import styles from './Row.module.scss'

const Row = (props)  => {
	const { row, row__small } = styles;
	const { modification, children } = props;

    return (
        <div className={modification ? `${row} ${row__small}` : `${row}`}>{children}</div>
    );
}

export { Row };