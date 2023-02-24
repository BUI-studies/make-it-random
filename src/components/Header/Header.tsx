import React, { FC } from 'react'
import classes from './Header.module.scss'

const Header: FC = () => {
	return (
		<header className={classes.header}>
			<h1 className={classes.title}>Make It Random</h1>
		</header>
	)
}

export default Header
