import React from 'react'
import classes from './DashboardItem.module.scss'
import { useDashboards } from '@/context/DashboardContext'
import AddRandomaizer from '@/components/AddRandomaizer/AddRandomaizer'
import Randomaizer from '@/components/Randomaizer/Randomaizer'

const DashboardItem = () => {
  const { randomaizerVisible } = useDashboards()

  return (
    <>
      {randomaizerVisible && (
        <div className={classes.dashboard}>
          <AddRandomaizer />

          <Randomaizer />
        </div>
      )}
    </>
  )
}

export default DashboardItem
