import { createContext } from 'react'

import { DashboardContextType, initialState } from '.'

const AuthContext = createContext<DashboardContextType>(initialState)

export default AuthContext
