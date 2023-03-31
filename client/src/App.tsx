import React, { FC, useState } from 'react'
import Sidebar from '@/components/Sidebar/Sidebar'
import Dashboard from '@/components/Dashboard/Dashboard'
import ParticleBackground from '@/assets/ParticleBg/ParticleBackground'
const App: FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Dashboard />
      <ParticleBackground />
    </div>
  )
}

export default App
