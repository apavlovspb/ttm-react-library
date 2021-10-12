/* eslint-disable react/button-has-type */
import React from 'react'
import { access } from '../../Helpers'
import globalStyle from '../theme/assets/styles/global.scss'
import style from './style.scss'

const FormButton = React.memo(
  ({
    onClick,
    type = 'button',
    customClass = '',
    children,
    small,
    color,
    checkAccess,
    accesses,
    ...props
  }) => {
    return (
      <button
        {...props}
        type={type}
        disabled={checkAccess && access(accesses, checkAccess)}
        onClick={onClick}
        className={`${style['form-button']} ${globalStyle['gfs-bold']}  ${
          style[color]
        } ${customClass} ${small ? style.small : ''}`}
      >
        {children}
      </button>
    )
  }
)

export default FormButton
