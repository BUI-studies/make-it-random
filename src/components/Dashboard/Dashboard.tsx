import React, { FC } from 'react'
import classes from './Dashboard.module.scss'
import { useDashboards } from '@/context/DashboardContext'

import AddDashboardForm from '../AddDashboardForm/AddDashboardForm'
import DashboardItem from './DashboardItem/DashboardItem'

const Dashboard: FC = () => {
  const { addFormVisible, dashboardsId, dashboards } = useDashboards()

  const dashboardName = dashboards.find((item) => item.id === dashboardsId)?.title
  
  return (
    <div>
      {addFormVisible ? (
        <AddDashboardForm />
      ) : (
        <div className="text-white text-2xl font-bold py-5">
          <h2>{!dashboardName ? 'Group name' : dashboardName}</h2>
        </div>
      )}
      <DashboardItem />
    </div>
  )
}

export default Dashboard
