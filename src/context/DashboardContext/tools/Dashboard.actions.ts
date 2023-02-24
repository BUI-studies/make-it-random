import { Dispatch } from '@/context/types'
import { Dashboard, ADD_DASHBOARD, REMOVE_DASHBOARD, UPDATE_DASHBOARD } from '@/context/DashboardContext'

export const addDashboard = (newDashboard: Dashboard, dispatch: Dispatch) => {
  dispatch({
    type: ADD_DASHBOARD,
    payload: newDashboard,
  })
}
export const updateDashboard = (updatedDashboard: Dashboard, dispatch: Dispatch) => {
  dispatch({
    type: UPDATE_DASHBOARD,
    payload: updatedDashboard,
  })
}

export const removeDashboard = (id: string, dispatch: Dispatch) => {
  dispatch({
    type: REMOVE_DASHBOARD,
    payload: id,
  })
}
