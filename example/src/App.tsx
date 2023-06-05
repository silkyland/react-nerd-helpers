import { useState } from 'react'
import { NerdLoading, NerdError } from '../../dist'
import React from 'react'

function App() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(new Error('Test Error'))

  return (
    <>
      <button onClick={() => setLoading(!loading)}>Toggle Loading</button>
      <NerdLoading />
      <hr />
      <button onClick={() => setError(new Error('Test Error'))}>
        Set Error
      </button>
      <NerdError
        error={error!}
        onDismissed={() => setError(new Error('Test Error'))}
      />
    </>
  )
}

export default App
