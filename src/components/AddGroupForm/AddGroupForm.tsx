import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import Icons from '../../assets/Icons'

import classes from './addGroupForm.module.scss'

interface addGroupFormProps {
	groupList: {
		title: string
		list: string[]
	}
	setGroups: (groups: any) => void
	setAddGroup: (params: boolean) => void
}

const addGroupForm: FC<addGroupFormProps> = ({ groupList, setGroups, setAddGroup }) => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm()

	const onSubmit = ({ groupName }: { groupName: string }) => {
		const newGroup = { ...groupList, [groupName]: {} }
		setGroups(newGroup)
		localStorage.setItem('MentorGroups', JSON.stringify(newGroup))
		setAddGroup(false)
	}
    const closeField = () => setAddGroup(false)

    const IconPlus = Icons.plus

	return (
		<form className={classes.addGroups} onSubmit={handleSubmit(onSubmit)}>
			<input className={classes.field} {...register('groupName', { required: true })} />
			{errors.groupName && <span>This field is required</span>}
			<div className="flex gap-x-3">
				<button className={classes.addButton}>
					<IconPlus />
				</button>
				<button className={classes.addButton} onClick={closeField}>
					<span className="rotate-45">
						<IconPlus />
					</span>
				</button>
			</div>
		</form>
	)
}

export default addGroupForm