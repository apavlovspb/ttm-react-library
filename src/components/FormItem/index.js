import React, { useCallback, useState, useRef } from 'react'
// import { useChangeReadOnly } from 'Helpers';
import style from './style.scss'
import globalStyle from '../../theme/assets/styles/global.scss'
import { access } from '../../Helpers'
// import { ReactComponent as Eye } from 'Theme/assets/images/icons/ic_eye.svg';

const FormItem = React.memo(
  ({
    label,
    onChange,
    value,
    additionalClass = '',
    noAutocomplete,
    small,
    color,
    checkAccess,
    accesses,
    ...props
  }) => {
    const [customClass, setCustomClass] = React.useState(additionalClass)
    const [type] = useState(props.type || 'text')
    const input = useRef(null)
    const highlight = () => {
      setCustomClass((prev) => `${prev} error`)
    }

    const handleChange = useCallback(
      (e) => {
        setCustomClass((prev) => prev.replace('error', ''))
        onChange(e)
      },
      [onChange]
    )

    return (
      <div className={`${style['form-item-group']} ${style.color}`}>
        <input
          ref={input}
          {...props}
          name={`real-${props.name}`}
          type={type}
          className={`${style['form-item']} ${
            globalStyle['gfs-body']
          } ${customClass} ${
            value?.toString().length > 0 ? style['not-empty'] : ''
          } ${small ? 'small' : ''}`}
          value={props.type === 'password' ? undefined : value}
          onChange={handleChange}
          readOnly={
            checkAccess ? access(accesses, checkAccess) : props.readOnly
          }
          onInvalid={highlight}
          placeholder={label}
        />
        {noAutocomplete && (
          <input
            className='autocomplete_hack'
            name={`faketest-${props.name}`}
            type={type}
          />
        )}
        {label && (
          <div
            className={`${style['form-item__label']} ${globalStyle['gfs-small']}`}
          >
            {label}
          </div>
        )}
      </div>
    )
  }
)

export default FormItem
