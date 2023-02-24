import { Action } from '@/context/types'
import { ADD_DASHBOARD, UPDATE_DASHBOARD, REMOVE_DASHBOARD, DashboardContextType, Dashboard } from '../index'
import { LocalStorage } from '@/helpers'

const DashboardReducer = (state: DashboardContextType, action: Action): DashboardContextType => {
  let newState: DashboardContextType = { ...state }

  switch (action.type) {
    case ADD_DASHBOARD:
      newState.dashboards = [...state.dashboards, action.payload]
      break
    case UPDATE_DASHBOARD:
      newState.dashboards = state.dashboards.map((dashboard: Dashboard) => {
        if (dashboard.id === action.payload.id) {
          return action.payload
        }
        return dashboard
      })
      break
    case REMOVE_DASHBOARD:
      newState.dashboards = state.dashboards.filter((dashboard: Dashboard) => dashboard.id !== action.payload)
      break
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }

  LocalStorage.set('dashboards', newState.dashboards)

  return newState
}

export default DashboardReducer
