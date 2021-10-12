import React from 'react'
import ButtonWithTooltip from '../Tooltip/ButtonWithTooltip'
// import  from '../../theme/assets/styles/global.scss'
import style from './style.scss'

const ToolButton = React.memo(
  ({ tooltip, icon, click, active, customClass, text, disabled }) => {
    return (
      <ButtonWithTooltip tooltip={tooltip} key={icon}>
        <button
          className={`${style['form-button']} ${style.white}   ${
            disabled ? style.disabled : ''
          } ${customClass ? `${customClass}` : style['waiting-button']} ${
            active ? style.black : ''
          }`}
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
