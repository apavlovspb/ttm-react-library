/* eslint-disable react/button-has-type */
import React from 'react'
// import { useSelector } from 'react-redux';
// import { access } from 'Helpers';
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
    ...props
  }) => {
    // const { accesses } = useSelector(({ user }) => user);
    // if (checkAccess && access(accesses, checkAccess)) {
    //   return (
    //     <button
    //       {...props}
    //       type={type}
    //       disabled
    //       className={`form-button gfs-bold  ${color} ${customClass} ${small ? 'small' : ''}`}>
    //       {children}
    //     </button>
    //   );
    // }
    console.log(style)
    return (
      <button
        {...props}
        type={type}
        onClick={onClick}
        className={`${style['form-button']} ${globalStyle['gfs-bold']}  ${
          style[color]
        } ${customClass} ${small ? style['small'] : ''}`}
      >
        {children}
      </button>
    )
  }
)

export default FormButton
