import React from 'react'
import FormButton from '../FormButton'
import FormItem from '../FormItem'
// import { format } from 'date-fns';
import CSVDownloads from '../CsvDownload'
import style from './style.scss'

const ms = 86400000
// const idx = 13;
const setNewArray = ({ from, to }) => {
  const initialValue = new Date(to).getTime()
  const dateCount = initialValue - new Date(from).getTime()
  return {
    initialValue,
    daysCount: (dateCount + ms) / ms
  }
}

const DateRange = React.memo(
  ({
    dateRange,
    setRange,
    getValues,
    csvDownload,
    csvName = 'all-stats',
    automatic
  }) => {
    const [to, setTo] = React.useState(dateRange.to)
    const [from, setFrom] = React.useState(dateRange.from)
    const handleChange = (cb) => (event) => cb(event.target.value)
    const changeDataRange = React.useCallback(async () => {
      await setRange({ ...setNewArray({ to, from }), to, from })
      if (getValues) {
        getValues()
      }
    }, [getValues, to, from, setRange])
    React.useEffect(() => {
      if (automatic) {
        return
      }
      changeDataRange()
    }, [changeDataRange, automatic])

    React.useEffect(() => {
      if (!automatic) {
        return
      }
      changeDataRange()
    }, [automatic, changeDataRange, to, from])

    return (
      <div className={style.range}>
        <FormItem
          label='From'
          color='white'
          value={from}
          type='date'
          onChange={handleChange(setFrom)}
        />
        <FormItem
          label='To'
          color='white'
          value={to}
          type='date'
          onChange={handleChange(setTo)}
        />{' '}
        {automatic ? null : (
          <FormButton
            color='black'
            type='button'
            onClick={changeDataRange}
            customClass='close'
          >
            Apply
          </FormButton>
        )}
        {csvDownload && (
          <CSVDownloads
            cb={csvDownload}
            filename={csvName}
            icon='fas fa-download'
          />
        )}
      </div>
    )
  }
)
export default DateRange
