import React, { ComponentProps, FC, useReducer } from 'react'

import { DashboardContext, DashboardReducer, initialState } from '.'

const DashboardProvider: FC<ComponentProps<any>> = ({ children }) => {
  const [{ dashboards, addFormVisible, dashboardsId, randomaizerVisible }, dispatch] = useReducer(
    DashboardReducer,
    initialState,
  )

  return (
    <DashboardContext.Provider value={{ dashboards, dashboardsId, addFormVisible, randomaizerVisible, dispatch }}>
      {children}
    </DashboardContext.Provider>
  )
}

export default DashboardProvider
