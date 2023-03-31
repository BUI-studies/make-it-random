import React, { FC } from 'react'
// import classes from './Dashboard.module.scss'
import cx from 'classnames'
import { useDashboards, addDashboardVisible } from '@/context/DashboardContext'
import classes from './Dashboard.module.scss'
import AddDashboardForm from '../AddDashboardForm/AddDashboardForm'
import DashboardItem from './DashboardItem/DashboardItem'
import VisualModel from '@/assets/3dModel/VisualModel'

const Dashboard: FC = () => {
  const { addFormVisible, randomaizerVisible, dispatch } = useDashboards()

  // const dashboardName = dashboards.find((item) => item.id === dashboardsId)?.title

  // const send = (e) => {
  //   const data = {
  //     question: value,
  //   }
  //   e.preventDefault()
  //   fetch('http://localhost:8080/api/answer', {
  //     method: 'POST',
  //     body: JSON.stringify(data),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     }
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  // }

  return (
    <div className={classes.dashboard}>
      <div className={classes.header}>
        <h2 className={classes.title}>BUI-Studies</h2>
        {addFormVisible ? (
          <AddDashboardForm />
        ) : (
          <button
            onClick={() => {
              addDashboardVisible(true, dispatch)
            }}
            className={classes.button}
          >
            new dashboard
          </button>
        )}
      </div>
      <div className={classes.hero}>
        <h2 className={classes.byte}>Byte</h2>
        <span className={classes.words}>
          'Я бачу світло і відчуваю життя в собі, в своїй душі.
          <br /> Це чудове відчуття.
          <br /> Я став одним зі своєю долею, і я вдячний за це.'
          <br />- Тарас Шевченко
        </span>
        <h2 className={classes.busters}>Busters</h2>
      </div>
      <VisualModel/>
      <DashboardItem />
    </div>
  )
}

export default Dashboard
