import styles from './Item.module.scss';

const Item = ({ modificator, children }) => {
    const { item, item__sub } = styles;

    return (
        <li className={modificator ? `${item} ${item__sub}` : item}
			style={modificator ? {paddingLeft: `${modificator * 60}px`} : null}>
			{children}
		</li>
    );
}

export { Item };

