import { render } from '@testing-library/react'
import React from 'react'
import NerdLoading from '../components/loading/nerd-loading'

describe('NerdLoading', () => {
  it('renders with default props', () => {
    const { getByText } = render(<NerdLoading />)
    expect(getByText('Loading...')).toBeInTheDocument()
  })

  it('renders with custom message', () => {
    const { getByText } = render(<NerdLoading message="Custom message" />)
    expect(getByText('Custom message')).toBeInTheDocument()
  })

  it('renders with custom spinner', () => {
    const customSpinner = <div data-testid="custom-spinner">Custom spinner</div>
    const { getByTestId } = render(<NerdLoading spinner={customSpinner} />)
    expect(getByTestId('custom-spinner')).toBeInTheDocument()
  })

  it('does not render when visible prop is false', () => {
    const { queryByText } = render(<NerdLoading visible={false} />)
    expect(queryByText('Loading...')).not.toBeInTheDocument()
  })
})
