import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import NerdError from '../error/nerd-error'

describe('NerdError', () => {
  const error = new Error('Test error')
  const onDismissed = jest.fn()

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders the error message', () => {
    render(<NerdError error={error} onDismissed={onDismissed} />)
    expect(screen.getByText('Test error')).toBeInTheDocument()
  })

  it('renders the custom message if provided', () => {
    render(
      <NerdError
        error={error}
        onDismissed={onDismissed}
        customMessage="Custom error message"
      />
    )
    expect(screen.getByText('Custom error message')).toBeInTheDocument()
  })

  it('calls the onDismissed callback when dismissed', () => {
    render(<NerdError error={error} onDismissed={onDismissed} />)
    fireEvent.click(screen.getByRole('button'))
    expect(onDismissed).toHaveBeenCalledTimes(1)
  })

  it('does not dismiss automatically if shouldDelay is false', () => {
    jest.useFakeTimers()
    render(
      <NerdError
        error={error}
        onDismissed={onDismissed}
        shouldDelay={false}
      />
    )
    jest.advanceTimersByTime(5000)
    expect(onDismissed).not.toHaveBeenCalled()
  })

  it('dismisses automatically after delayTime if shouldDelay is true', () => {
    jest.useFakeTimers()
    render(<NerdError error={error} onDismissed={onDismissed} shouldDelay />)
    jest.advanceTimersByTime(5000)
    expect(onDismissed).toHaveBeenCalledTimes(1)
  })
})