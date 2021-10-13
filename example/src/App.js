import React from 'react'
import { ToolButton } from 'ttm-react-library'
import 'ttm-react-library/dist/index.css'

const icon = 'fas fa-pen'

const App = () => {
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
      <ToolButton
        icon={icon}
        tooltip='testTool'
        click={() => {
          console.log('myTiooolsd')
        }}
      />
    </div>
  )
  // return <ExampleComponent text="Create React Library Example 😄" />
}

export default App
