import React from 'react'
import classes from './DashboardItem.module.scss'
import { useDashboards } from '@/context/DashboardContext'
import AddRandomaizer from '@/components/AddRandomaizer/AddRandomaizer'
import Randomaizer from '@/components/Randomaizer/Randomaizer'

const DashboardItem = () => {
  const { dashboards, dashboardsId, randomaizerVisible } = useDashboards()

  return (
    <>
      {randomaizerVisible && (
        <div className={classes.dashboard}>
          <AddRandomaizer />
          {/* <div className="col-span-4"> */}
            <Randomaizer />
          {/* </div> */}
        </div>
      )}
    </>
  )
}

export default DashboardItem
