import React, { FC } from 'react'
import classes from './Sidebar.module.scss'
import Header from '../Header/Header'

interface SidebarProps {
	groupList: {
		title: string
		list: string[]
	}
	setGroups: (groups: any) => void
	setAddGroup: (params: boolean) => void
}

const Sidebar: FC<SidebarProps> = ({ groupList, setGroups, setAddGroup }) => {
	const groupRenderNames = Object.keys(groupList).map((group, ind) => (
		<li key={ind}>
			<button className={classes.button}>{group}</button>
		</li>
	))

	return (
		<div className={classes.sidebar}>
			<Header />
			<ul className="py-4 flex flex-col gap-y-4">
				<li>
					<button
						onClick={() => {
							setAddGroup(true)
						}}
						className={classes.button}
					>
						new dashboard
					</button>
				</li>
				{groupRenderNames}
			</ul>
		</div>
	)
}

export default Sidebar
