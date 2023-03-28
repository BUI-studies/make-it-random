import React, { FC, useEffect, useState } from 'react'
import { Randomizer, useDashboards, updateDashboard } from '@/context/DashboardContext'
import Icons from '@/assets/Icons'
import Modal from '@/components/Modal/Modal'

import classes from './RandomaizerItem.module.scss'

const RandomaizerItem: FC<Randomizer> = ({ title, items, id, wasSelectedStorage = [] }) => {
  const { dashboardsId, dashboards, dispatch } = useDashboards()

  const [wasSelected, setWasSelected] = useState<string>('item will appear here')
  const [wasSelectedArray, setWasSelectedArray] = useState<string[]>([])
  const [listItems, setListItems] = useState<string[]>([...items])
  const [openModal, setOpenModal] = useState<boolean>(false)

  useEffect(() => {
    setListItems([...items])
  }, [dashboards])

  useEffect(() => {
    if (wasSelectedStorage) setWasSelectedArray(wasSelectedStorage)
  }, [])

  const IconDelete = Icons.delete
  const IconEdit = Icons.edit

  const random = (itemsList: string[]) => {
    // @ts-ignore
    const dashboardsItem: Dashboard = dashboards.map((item) => {
      return item.list?.find((item) => item.id === id)
    })[0]

    if (wasSelectedArray.length !== itemsList?.length) {
      const itemsToSelect = itemsList.filter((item) => !wasSelectedArray.some((wI) => wI === item))
      const selected: string = itemsToSelect.splice(
        Math.floor(Math.round(Math.random() * itemsToSelect.length - 1)),
        1,
      )[0]

      setWasSelected(selected)

      setWasSelectedArray([...wasSelectedArray, selected])

      setListItems(itemsList.filter((item) => !wasSelectedArray.some((wI) => wI === item)))

      dashboardsItem.wasSelectedStorage = [...wasSelectedArray, selected]
      console.log('dashboardsItem', dashboardsItem)
      updateDashboard(dashboardsItem, dispatch)
    } else {
      setListItems(wasSelectedArray)
      setWasSelectedArray([])
      setWasSelected('Randomiser is reloading...Press button one more time.')

      dashboardsItem.wasSelectedStorage = wasSelectedArray
      updateDashboard(dashboardsItem, dispatch)
    }
  }

  const deleteItem = () => {
    const dashboardsItem = dashboards?.find((item) => item.id === dashboardsId)
    if (!!dashboardsItem) {
      dashboardsItem.list = dashboardsItem?.list.filter((item) => item.id !== id)
      updateDashboard(dashboardsItem, dispatch)
    }
  }

  return (
    <div className={classes.wrapper} key={id}>
      <h2 className={classes.title}>{title}</h2>
      <p className="text-2xl text-center">{wasSelected}</p>
      <div className={classes.iconWrapper}>
        <span onClick={() => setOpenModal(true)}>
          <IconEdit />
          <Modal open={openModal} setOpen={setOpenModal} item={{ title, items, id }} />
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
