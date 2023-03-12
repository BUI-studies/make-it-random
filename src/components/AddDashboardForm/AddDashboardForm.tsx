import React, { FC, SyntheticEvent, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'

import Icons from '../../assets/Icons'

import classes from './addDashboardForm.module.scss'
import { addDashboard, addDashboardVisible, Dashboard, useDashboards } from '@/context/DashboardContext'

const AddDashboardForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  
  const { dispatch, dashboards } = useDashboards()
  const [inValid, setInValid] = useState<boolean>(false)

  const onSubmit = ({ dashboardName }: FieldValues) => {
    const newDashboard: Dashboard = { id: uuidv4(), title: dashboardName, list: [] }

    addDashboard(newDashboard, dispatch)
    addDashboardVisible(false, dispatch)
  }

  const onChange = ({ target }: SyntheticEvent) => {
    setInValid(dashboards.some(({ title }) => title === (target as HTMLInputElement).value))
  }
  
  const closeField = () => addDashboardVisible(false, dispatch)

  const IconPlus = Icons.plus

  return (
    <form className={classes.addGroups} onSubmit={handleSubmit(onSubmit)}>
      <input className={classes.field} {...register('dashboardName', { required: true, onChange })} />
      {errors.groupName && <span>This field is required</span>}
      <div className="flex gap-x-3">
        <button className={classes.addButton} disabled={inValid}>
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

export default AddDashboardForm
