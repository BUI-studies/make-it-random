import React, { FC, useState } from 'react'
import Sidebar from '@/components/Sidebar/Sidebar'
import Dashboard from '@/components/Dashboard/Dashboard'

const App: FC = () => {
  return (
    <div className="grid grid-cols-[20%_80%] bg-gray-800">
      <Sidebar  />
      <Dashboard />
    </div>
  )
}

export default App
