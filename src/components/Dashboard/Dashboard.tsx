import React, { FC } from 'react'
import AddDashboardForm from '../AddDashboardForm/AddDashboardForm'

interface DashboardProps {
  addDashboard: boolean
  setAddDashboard: (groups: any) => void
}

const Dashboard: FC<DashboardProps> = ({ addDashboard, setAddDashboard }) => {
  return (
    <div className="px-6">
      {addDashboard ? (
        <AddDashboardForm setAddDashboard={setAddDashboard} />
      ) : (
        <div className="text-white text-2xl font-bold py-5">
          <h2>Groups name</h2>
        </div>
      )}
      <div>dashboard</div>
    </div>
  )
}

export default Dashboard
