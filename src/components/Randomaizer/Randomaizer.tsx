import React, { FC, useEffect } from 'react'

import { useDashboards } from '@/context/DashboardContext'
import RandomaizerItem from './RandomaizerItem/RandomaizerItem'

const Randomaizer: FC = () => {
  const { dashboards, dashboardsId } = useDashboards()

  const dashboardsItem = dashboards.find((item) => item.id === dashboardsId)
  
  const randomaizerList = dashboardsItem?.list.map((el) => <RandomaizerItem {...el} key={el.id} />)

  return <>{randomaizerList}</>
}

export default Randomaizer
