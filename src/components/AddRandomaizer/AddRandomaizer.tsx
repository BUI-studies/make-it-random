import React, { FC, SyntheticEvent, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'

import Icons from '../../assets/Icons'

import classes from './addRandomaizer.module.scss'
import { updateDashboard, Randomizer, useDashboards } from '@/context/DashboardContext'

const AddRandomaizer: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const { dispatch, dashboards, dashboardsId } = useDashboards()

  const [inValid, setInValid] = useState<boolean>(false)

  const onSubmit = ({ randomaizerName, randomaizerLists }: FieldValues) => {
    const newRandomaizer: Randomizer = { id: uuidv4(), title: randomaizerName, items: randomaizerLists.split('\n') }
    const dashboardsItem = dashboards.find((item) => item.id === dashboardsId)
    dashboardsItem?.list.push(newRandomaizer)
    updateDashboard(dashboardsItem, dispatch)
  }

  const onChange = ({ target }: SyntheticEvent) => {
    setInValid(dashboards.some(({ title }) => title === (target as HTMLInputElement).value))
  }

  const IconPlus = Icons.plus

  return (
      <form className={classes.addGroups} onSubmit={handleSubmit(onSubmit)}>
        <h2 className='text-center text-white text-lg mb-5'>Add new randomaizer</h2>
        <input className={classes.field} placeholder='randomaizer name' {...register('randomaizerName', { required: true, onChange,})} />
        {errors.groupName && <span>This field is required</span>}
        <textarea className={classes.field} {...register('randomaizerLists', { required: true, onChange })} />

          <button className={classes.addButton} disabled={inValid}>
            <IconPlus />
          </button>
      </form>
  )
}

export default AddRandomaizer
