import React, { FC } from 'react'
import classes from './Sidebar.module.scss'
import Header from '../Header/Header'
import { Dashboard, DashboardContextType, useDashboards } from '@/context/DashboardContext'

interface SidebarProps {
  setAddDashboard: Function
}

const Sidebar: FC<SidebarProps> = ({ setAddDashboard }) => {
  const { dashboards }: DashboardContextType = useDashboards()

  const groupRenderNames = dashboards.map(({ title }: Dashboard, ind) => (
    <li key={ind}>
      <button className={classes.button}>{title}</button>
    </li>
  ))

  return (
    <div className={classes.sidebar}>
      <Header />
      <ul className="py-4 flex flex-col gap-y-4">
        <li>
          <button
            onClick={() => {
              setAddDashboard(true)
            }}
            className={[classes.button, classes.button__add].join(' ')}
          >
            new dashboard
          </button>
        </li>
        {groupRenderNames}
      </ul>
    </div>
  )
}

export default Sidebar
