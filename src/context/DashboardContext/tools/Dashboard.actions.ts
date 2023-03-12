import { Dispatch } from '@/context/types'
import {
  Dashboard,
  ADD_DASHBOARD,
  REMOVE_DASHBOARD,
  UPDATE_DASHBOARD,
  VISIBLE_ADDDASHBOARD,
  SET_DASHBOARDID,
} from '@/context/DashboardContext'

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

export const addDashboardVisible = (bool: boolean, dispatch: Dispatch) => {
  dispatch({
    type: VISIBLE_ADDDASHBOARD,
    payload: bool,
  })
}

export const setDashboardId = (id: string, dispatch: Dispatch) => {
  dispatch({
    type: SET_DASHBOARDID,
    payload: id,
  })
}
