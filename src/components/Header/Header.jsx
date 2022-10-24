import React from "react";
import styles from "./Header.module.scss";
import { Link } from 'react-router-dom'

const Header = () => {
	const { header, header__list, header__logo, header__title, home} = styles;

	return (
        <div className={header}>
            <img className={header__logo} src={'./logo.gif'} alt="logo"/>
            <Link to="/" className={home}>
				<div className={header__title}>Hacker News</div>
			</Link>

            <ul className={header__list}>
                <Link to="/" className={home}>
					<li>new |</li>
				</Link>
                <li> past |</li>
                <li> comments |</li>
                <li> ask |</li>
                <li> show |</li>
                <li> jobs |</li>
                <li> submit</li>
            </ul>
            <ul className={header__list}>
                <li>login</li>
            </ul>
        </div>
    );
}

export { Header };