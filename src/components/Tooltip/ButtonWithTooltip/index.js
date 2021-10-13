import React from 'react'
import style from './style.scss'

const ButtonWithTooltip = ({ children, tooltip }) => {
  //
  return (
    <div className={style['row-button']}>
      {children}
      {tooltip ? (
        <div className={`${style.tooltip} ${style['gfs-body']}`}>{tooltip}</div>
      ) : null}
    </div>
  )
}
export default ButtonWithTooltip
