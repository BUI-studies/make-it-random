import React, { FC } from 'react'
import classes from './Sidebar.module.scss'
import Header from '../Header/Header'
import {
  Dashboard,
  DashboardContextType,
  removeDashboard,
  addDashboardVisible,
  setDashboardId,
  useDashboards,
} from '@/context/DashboardContext'
import Icons from '@/assets/Icons'

const Sidebar: FC = () => {
  const { dispatch, dashboards }: DashboardContextType = useDashboards()

  const IconDelete = Icons.delete

  const groupRenderNames = dashboards.map(({ title, id }: Dashboard, ind) => (
    <li key={ind} className={classes.groupItem}>
      <button className={classes.button} onClick={() => setDashboardId(id, dispatch)}>
        {title}
      </button>
      <span className={classes.delete} onClick={() => removeDashboard(id, dispatch)}>
        <IconDelete />
      </span>
    </li>
  ))

  return (
    <div className={classes.sidebar}>
      <Header />
      <ul className="py-4 flex flex-col gap-y-4">
        <li>
          <button
            onClick={() => {
              addDashboardVisible(true, dispatch)
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
