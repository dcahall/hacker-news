import styles from './Button.module.scss'

const Button = (props) => {
	const { button } = styles;

    return (
        <button
            className={button}
            onClick={props.handleClick}
        >
			{props.title}
		</button>
    );
}

export { Button };