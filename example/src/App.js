import React from 'react'
import { Dropdown, useDropdown, CSVDownloads } from 'ttm-react-library'
import 'ttm-react-library/dist/index.css'

const limitPage = [
  { id: 'test', title: 'Test' },
  { id: 'test2', title: 'Test2' }
]

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
        justifyContent: 'center'
      }}
    >
      <CSVDownloads
        cb={() => {
          console.log('cb')
        }}
        filename='testssvs'
      />
    </div>
  )
  // return <ExampleComponent text="Create React Library Example 😄" />
}

export default App
