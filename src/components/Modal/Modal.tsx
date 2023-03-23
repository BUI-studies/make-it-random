import { FC, useState, SyntheticEvent } from 'react'
import cx from 'classnames'
import { v4 as uuidv4 } from 'uuid'
import { FieldValues, useForm } from 'react-hook-form'
import { Randomizer, useDashboards, updateDashboard, Dashboard } from '@/context/DashboardContext'

import classes from './Modal.module.scss'
import Icons from '@/assets/Icons'

interface ModalProps {
  open: boolean
  setOpen: (open: boolean) => void
  item: Randomizer
}

const Modal: FC<ModalProps> = ({ open, setOpen, item }) => {
  const [inValid, setInValid] = useState<boolean>(false)
  const [fields, setFields] = useState<string[]>(item.items || [])
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const { dispatch, dashboards, dashboardsId } = useDashboards()

  const { title, id } = item

  const onSubmit = ({ randomaizerName, ...fields }: FieldValues) => {
    let items = []
    console.log(fields)
    for (const key in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, key)) {
        const element = fields[key]
        items.push(element)
      }
    }
    console.log(items)
    const newRandomaizer: Randomizer = { id, title: randomaizerName, items }
    // @ts-ignore
    const dashboardsItem: Dashboard = dashboards?.find((item) => item.id === dashboardsId)
    dashboardsItem.list = [newRandomaizer]
    updateDashboard(dashboardsItem, dispatch)
    setOpen(false)
  }

  const onChange = ({ target }: SyntheticEvent) => {
    setInValid(dashboards?.some(({ title }) => title === (target as HTMLInputElement).value))
  }

  const addField = () => {
    console.log([...fields, ''])
    setFields([...fields, ''])
  }

  const listFields = fields?.map((fieldValue, ind) => (
    <div className="flex gap-x-3 items-center mb-5" key={ind}>
      <p>{++ind}.</p>
      <input
        className={classes.field}
        placeholder="randomaizer name"
        {...register(uuidv4(), { onChange, value: fieldValue })}
      />
    </div>
  ))

  const IconPlus = Icons.plus

  return (
    <div
      className={cx(classes.modal, open ? classes.active : '')}
    
    >
      <div
        className={classes.modalWrapper}
       
      >
        <form className={classes.addGroups} onClick={handleSubmit(onSubmit)}>
          <div className="flex gap-y-4 items-center mb-5 flex-col">
            <p>Title: </p>
            <input
              className={classes.fieldTitle}
              placeholder="randomaizer name"
              {...register('randomaizerName', { required: true, onChange, value: title })}
            />
          </div>
          {errors.groupName && <span>This field is required</span>}
          <h2 className="text-2xl text-center mb-5">Lists</h2>
          {listFields}

          <div className={classes.addButton} onClick={addField}>
            <IconPlus />
          </div>
          <div className="sm:flex sm:flex-row-reverse sm:px-6 gap-x-6">
            <input type="submit" className={classes.saveButton} disabled={inValid} value="Save" />
            <button
              type="button"
              className={classes.closeButton}
              onClick={() => {
                setOpen(false)
              }}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Modal
