import React, { FC, useState } from 'react'
import AddGroupForm from '../AddGroupForm/AddGroupForm'

import classes from './Dashboard.module.scss'

interface DashboardProps {
	groupList: {
		title: string
		list: string[]
	}
	addGroup: boolean
	setGroups: (groups: any) => void
	setAddGroup: (params: boolean) => void
}

const Dashboard: FC<DashboardProps> = ({ groupList, setGroups, setAddGroup, addGroup }) => {
	return (
		<div className="px-6">
			{addGroup ? (
				<AddGroupForm groupList={groupList} setGroups={setGroups} setAddGroup={setAddGroup} />
			) : (
				<div className="text-white text-2xl font-bold py-5">
					<h2>Groups name</h2>
				</div>
			)}
			<div>dashboard</div>
		</div>
	)
}

export default Dashboard
