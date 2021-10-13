import React from 'react'
import {
  Dropdown,
  useDropdown,
  CSVDownloads,
  DateRange
} from 'ttm-react-library'
import 'ttm-react-library/dist/index.css'

const limitPage = [
  { id: 'test', title: 'Test' },
  { id: 'test2', title: 'Test2' }
]
const dateRange = { from: '2021-09-29', to: '2021-10-14' }

const App = () => {
  const { currentItem, itemList, changeItem, id, title } = useDropdown(
    limitPage,
    'id',
    'title'
  )
  return (
    <div
      style={{
        height: '500px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'white'
      }}
    >
      <DateRange
        dateRange={dateRange}
        setRange={() => {
          console.log('test')
        }}
      />
    </div>
  )
  // return <ExampleComponent text="Create React Library Example 😄" />
}

export default App
