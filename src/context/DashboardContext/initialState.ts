import { DashboardContextType } from '@/context/DashboardContext/types'
import { LocalStorage } from '@/helpers'

export const initialState: DashboardContextType = {
  dashboards: LocalStorage.get('dashboards') || [],
  dispatch: () => null,
}
export default initialState
