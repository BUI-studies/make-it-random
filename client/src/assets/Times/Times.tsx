import React, { FC, useState, useEffect } from 'react'

import classes from './time.module.scss'

const Times = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  const [date, setDate] = useState(new Date().toLocaleDateString())
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <div className={classes.date}>
      <p>{time}</p>
      <p>{date}</p>
    </div>
  )
}

export default Times
