import React, { FC, useState, useEffect } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Dashboard from './components/Dashboard/Dashboard'

const App: FC = () => {
	const [groups, setGroups] = useState<any>({})
	const [addGroup, setAddGroup] = useState<boolean>(false)
	
	useEffect(() => {
		const storage = JSON.parse(localStorage.getItem('MentorGroups') || '')
		if (!!storage) setGroups(storage)
	}, [])

	return (
		<div className="grid grid-cols-[20%_80%] bg-gray-800">
			<Sidebar groupList={groups} setGroups={setGroups} setAddGroup={setAddGroup} />
			<Dashboard groupList={groups} setGroups={setGroups} addGroup={addGroup} setAddGroup={setAddGroup} />
		</div>
	)
}

export default App
