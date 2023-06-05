import { useState } from 'react'
import './App.css'
import NerdError from '../../dist/error/nerd-error'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error>(new Error('Error'))

  return (
    <div>
      <h2>Loading example</h2>
      {/* <NerdLoading visible={isLoading} message="Loading, please wait..." /> */}

      <button onClick={() => setIsLoading(!isLoading)}>Toggle loading</button>

      <hr />

      <h2>Error example</h2>
      <NerdError
        error={error}
        onDismissed={() => setError(new Error('Error'))}
        title="Error"
        delayTime={5000}
        shouldDelay={true}
        backgroundColor="#ff0000"
        borderColor="#ff0000"
        textColor="#ffffff"
        customMessage="This is a custom error message."
      />
    </div>
  )
}

export default App
