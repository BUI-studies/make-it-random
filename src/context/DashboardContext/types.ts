import { Dispatch } from '@/context/types'

export type Randomizer = {
  id: string
  title: string
  items: string[]
}

export type Dashboard = {
  id: string
  title: string
  list: Randomizer[]
}

export type DashboardContextType = {
  dashboards: Dashboard[]
  dispatch: Dispatch
  addFormVisible: boolean
  dashboardsId: string
  randomaizerVisible: boolean
}
