import React from 'react'
import { ReactComponent as DDIcon } from '../../theme/assets/images/icons/dropdownIcon.svg'
import { ClickOutComponent } from '../../Helpers'
import style from './style.scss'
import globalStyle from '../../theme/assets/styles/global.scss'

const Dropdown = React.memo(
  ({
    current,
    itemList,
    changeItem,
    id,
    title,
    customClass,
    name,
    cb,
    transform
  }) => {
    const [open, setOpen] = React.useState(false)
    const toggle = () => setOpen((prev) => !prev)
    const close = () => {
      setOpen(false)
    }
    const click = React.useCallback(
      (item) => () => {
        changeItem(item[id])()
        toggle()
        if (cb) {
          cb()
        }
      },
      [cb, changeItem, id]
    )

    return (
      <ClickOutComponent onClickOut={close}>
        <div
          className={`${style['dropdown-menu']} ${
            open ? style.open : ''
          } ${customClass}`}
        >
          <button
            className={`${style['dropdown-menu-button']} ${
              globalStyle['gfs-body']
            } ${style.elements} ${customClass}-button ${
              open ? style.open : ''
            }`}
            type='button'
            onClick={toggle}
          >
            {transform ? transform(current[title]) : current[title]}
            <div className={`${style.title} ${globalStyle['gfs-small']}`}>
              {name}
            </div>
            <DDIcon />
          </button>
          {open && (
            <div
              className={`${style['dropdown-menu-items']} ${customClass}-items`}
            >
              {itemList.map((item) => (
                <button
                  className={`${style['dropdown-menu-item']} ${style.elements} ${globalStyle['gfs-body']}  ${customClass}-item`}
                  key={item[id]}
                  type='button'
                  onClick={click(item)}
                >
                  {transform ? transform(item[title]) : item[title]}
                </button>
              ))}
            </div>
          )}
        </div>
      </ClickOutComponent>
    )
  }
)

export default Dropdown
export { default as useDropdown } from './useDropdown'
