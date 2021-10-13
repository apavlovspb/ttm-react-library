import React from 'react'
import ButtonWithTooltip from '../Tooltip/ButtonWithTooltip'
// import  from '../../theme/assets/styles/global.scss'
import style from './style.scss'
import style2 from '../FormButton/style.scss'

const ToolButton = React.memo(
  ({ tooltip, icon, click, active, customClass, text, disabled }) => {
    return (
      <ButtonWithTooltip tooltip={tooltip} key={icon}>
        <button
          className={`${style2['form-button']} ${style['form-button']} ${
            style2.white
          }   ${disabled ? style.disabled : ''} ${
            customClass ? `${customClass}` : style['waiting-button']
          } ${active ? style2.black : ''}`}
          type='button'
          onClick={click}
          disabled={disabled}
        >
          {text}
          {icon ? <i className={icon} /> : null}
        </button>
      </ButtonWithTooltip>
    )
  }
)

export default ToolButton
