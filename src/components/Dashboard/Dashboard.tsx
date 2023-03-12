import React, { FC } from 'react'
import classes from './Dashboard.module.scss'
import { useDashboards } from '@/context/DashboardContext'

import AddDashboardForm from '../AddDashboardForm/AddDashboardForm'
import DashboardItem from './DashboardItem/DashboardItem'

const Dashboard: FC = () => {
  const { addFormVisible } = useDashboards()
  return (
    <div>
      {addFormVisible ? (
        <AddDashboardForm />
      ) : (
        <div className="text-white text-2xl font-bold py-5">
          <h2>Groups name</h2>
        </div>
      )}
      <DashboardItem />
    </div>
  )
}

export default Dashboard
