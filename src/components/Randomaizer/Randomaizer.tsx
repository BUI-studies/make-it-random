import React, { FC } from 'react'

import { updateDashboard, Randomizer, useDashboards } from '@/context/DashboardContext'
import { LocalStorage } from '@/helpers'

const Randomaizer: FC = () => {
  const { dashboards, dashboardsId } = useDashboards()
  const [wasSelected, setWasSelected] = React.useState<string>('')

  const dashboardsItem = dashboards.find((item) => item.id === dashboardsId)

  const random = (items) => {
    if (items.length > 0) {
      setWasSelected(items.splice(Math.floor(Math.round(Math.random() * items.length - 1)), 1)[0])
      items = items.sort(() => Math.random() - 0.5)
    } else {
      //   items = wasSelected.sort((el) => Math.random() - 0.5)
      //   setWasSelected([])
      //   LocalStorage.set('dashboards', )
      //   this.fillTheStore(items, wasSelected)
      setWasSelected('Randomiser is reloading...Press button one more time.')
    }
    // this.fillTheStore(items, wasSelected)
  }

  const randomaizerList = dashboardsItem?.list.map(({ title, items }) => (
    <div className="px-3 py-5 col-span-4 bg-amber-200 text-black ">
      <h2>{title}</h2>
      <p>{wasSelected}</p>
      <div>
        <button onClick={() => random(items)}>start</button>
        <button>reset</button>
      </div>
    </div>
  ))

  return <>{randomaizerList}</>
}

export default Randomaizer
