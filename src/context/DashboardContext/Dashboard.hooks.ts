import { useContext } from 'react'

import { DashboardContext, DashboardContextType } from '@/context/DashboardContext'

export const useDashboards = () => {
  const context: DashboardContextType = useContext(DashboardContext)

  if (context === undefined) {
    throw new Error('useDashboards must be used within a DashboardContextProvider')
  }

  return context
}
