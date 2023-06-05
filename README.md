# React Nerd Helpers
![React Nerd Helpers](https://raw.githubusercontent.com/silkyland/react-nerd-helpers/main/react-nerd-helpers.png)

React Nerd Helpers is a React-based library that provides a set of common UI helpers such as loading and error handling for your applications.

## Installation

You can install the React Nerd Helpers library via npm:

```bash
npm install @silkyland/react-nerd-helpers
```

or yarn:

```bash
yarn add @silkyland/react-nerd-helpers
```

## Components

The library currently includes the following components:

- NerdLoading: A loading spinner component.
- NerdError: An error display component.

## Usage

Below are examples of how to use the `NerdLoading` and `NerdError` components.

### NerdLoading

```tsx
import { NerdLoading } from '@silkyland/react-nerd-helpers'

function App() {
  const [isLoading, setIsLoading] = React.useState(true)

  return (
    <div>
      <NerdLoading visible={isLoading} message="Loading, please wait..." />
      {/* Your application code */}
    </div>
  )
}
```

### NerdError

```tsx
import { NerdError } from '@silkyland/react-nerd-helpers'

function App() {
  const [error, setError] = React.useState(null)

  return (
    <div>
      {error && (
        <NerdError
          error={error}
          onDismissed={() => setError(null)}
          title="Oops, something went wrong!"
        />
      )}
      {/* Your application code */}
    </div>
  )
}
```

## Contributing

If you have any suggestions or find any bugs, please file an issue on the GitHub page.

<a href="https://github.com/silkyland/react-nerd-helpers">Github Repository</a>

## License

React Nerd Helpers is released under the MIT License.
