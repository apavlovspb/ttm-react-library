import React from 'react'
import { ToolButton } from 'ttm-react-library'
import 'ttm-react-library/dist/index.css'

const icon = 'fas fa-pen'

const App = () => {
  return (
    <div>
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
