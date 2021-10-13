import React from 'react'
import globalStyle from '../../theme/assets/styles/global.scss'

const AddButton = React.memo(({ click }) => {
  return (
    <button type='button' onClick={click} className={globalStyle['add-button']}>
      +
    </button>
  )
})
export default AddButton
