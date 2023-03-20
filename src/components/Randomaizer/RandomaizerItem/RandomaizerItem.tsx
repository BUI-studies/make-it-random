import React, { FC, useEffect, useState } from 'react'
import { Randomizer, useDashboards, updateDashboard } from '@/context/DashboardContext'
import Icons from '@/assets/Icons'
import Modal from '@/components/Modal/Modal'

import classes from './RandomaizerItem.module.scss'

const RandomaizerItem: FC<Randomizer> = ({ title, items, id }) => {
  const { dashboardsId, dashboards, dispatch } = useDashboards()

  const [wasSelected, setWasSelected] = useState<string>('item will appear here')
  const [wasSelectedArray, setWasSelectedArray] = useState<string[]>([''])
  const [listItems, setListItems] = useState<string[]>(items)
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    setListItems(items)
  }, [dashboards])

  const IconDelete = Icons.delete
  const IconEdit = Icons.edit


  const random = (itemsList: [string]) => {
    if (itemsList.length > 0) {
      const selected: string = itemsList.splice(Math.floor(Math.round(Math.random() * itemsList.length - 1)), 1)[0]

      setWasSelected(selected)

      setWasSelectedArray([...wasSelectedArray, selected])

      setListItems(itemsList.filter((item: string) => item !== selected))
    } else {
        
      setListItems(wasSelectedArray.filter(Boolean))
      setWasSelectedArray([])
      setWasSelected('Randomiser is reloading...Press button one more time.')
    }
  }

  const deleteItem = () => {
    const dashboardsItem = dashboards?.find((item) => item.id === dashboardsId)
    dashboardsItem.list = dashboardsItem?.list.filter((item) => item.id !== id)
    updateDashboard(dashboardsItem, dispatch)
  }

  return (
    <div className={classes.wrapper} key={id}>
      <h2 className={classes.title}>{title}</h2>
      <p className="text-2xl text-center">{wasSelected}</p>
      <div className={classes.iconWrapper}>
        <span onClick={() => setOpen(true)}>
          <IconEdit />
          <Modal open={open} setOpen={setOpen} item={{ title, items, id }} />
        </span>
        <span onClick={deleteItem}>
          <IconDelete />
        </span>
      </div>
      <button className={classes.addButton} onClick={() => random(listItems)}>
        {wasSelected !== 'Randomiser is reloading...Press button one more time.' ? 'start' : 'reset'}
      </button>
    </div>
  )
}

export default RandomaizerItem
