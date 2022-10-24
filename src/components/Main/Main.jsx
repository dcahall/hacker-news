import styles from "./Main.module.scss";

const Main = (props) => {
	const { main, main__comments} = styles
    const { modificator } = props;

    return (
        <div className={modificator
						? `${main} ${main__comments}`
						: `${main}`}
        >
			{props.children}
		</div>
    );
}

export { Main }; 