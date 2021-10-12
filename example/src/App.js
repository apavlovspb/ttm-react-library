import React from 'react'

import { FormButton } from 'ttm-react-library'
import 'ttm-react-library/dist/index.css'

const App = () => {
  const accesses = ['user', 'user+']
  return (
    <div>
      <FormButton
        type='button'
        color='black'
        accesses={accesses}
        checkAccess='user+'
        small
        onClick={() => {
          console.log('hello')
        }}
      >
        Mty
      </FormButton>
    </div>
  )
  // return <ExampleComponent text="Create React Library Example 😄" />
}

export default App
