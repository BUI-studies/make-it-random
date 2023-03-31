import React, { FC } from 'react'
import classes from './Header.module.scss'

import Icons from '@/assets/Icons'

const Header: FC = () => {
  const Logo = Icons.logo

  return (
    <header className={classes.header}>
      <picture className={classes.img}>
        <Logo />
      </picture>
      
    </header>
  )
}

export default Header
