import React from 'react'
import { ReactComponent as Spinner } from '../../theme/assets/images/icons/spinner.svg'
import globalStyle from '../../theme/assets/styles/global.scss'
import style from './style.scss'

const BlobOpen = React.memo(({ csv, filename }) => {
  const csvFile = new Blob([csv], { type: 'text/csv' })
  const ref = React.useRef()
  React.useEffect(() => {
    ref.current.click()
  }, [])

  return (
    <a
      download={filename}
      rel='noreferrer'
      target='_blank'
      href={window.URL.createObjectURL(csvFile)}
      ref={ref}
    >
      {filename}
    </a>
  )
})

const CSVDownloads = React.memo(
  ({ cb, text = 'Download csv', filename, icon }) => {
    const [data, setData] = React.useState('')
    const [open, setOpen] = React.useState(false)
    const [disabled, setDisabled] = React.useState(false)
    const wrapper = React.useCallback(async () => {
      setDisabled(true)
      const val = await cb()
      await setData(val || ' ')
      setOpen(true)
      setDisabled(false)
      // window.open(encodeData);
    }, [cb])

    React.useEffect(() => {
      if (open) {
        setOpen(false)
      }
    }, [open])

    return (
      <div className={style['csv-dowload']}>
        {disabled && <Spinner />}
        <button
          type='button'
          disabled={disabled}
          className={`${style['csv-dowload-button']} ${globalStyle['gfs-link']}`}
          onClick={wrapper}
        >
          <div
            className={`${style['csv-dowload-title']} ${
              disabled && style.disabled
            }`}
          >
            {text}
          </div>
          {icon ? (
            <i className={`${icon} ${style['csv-dowload-image']}`} />
          ) : null}
        </button>
        {open && <BlobOpen csv={data} filename={filename} />}
      </div>
    )
  }
)
export default CSVDownloads
