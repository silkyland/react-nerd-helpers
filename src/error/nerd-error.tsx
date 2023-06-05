/**
 * This is the main file for the NerdError component.
 * It renders an error message with customizable styling and delay options.
 * @module NerdError
 */

import React from 'react'
import { useEffect } from 'react'
import './nerd-error.scss'

/**
 * Props for the NerdError component.
 * @typedef {Object} ErrorProps
 * @property {Error} error - The error object.
 * @property {string} [title] - The title of the error.
 * @property {function} onDismissed - Callback function invoked when the error is dismissed.
 * @property {number} [delayTime=5000] - The delay time in milliseconds before automatically dismissing the error.
 * @property {boolean} [shouldDelay] - Determines whether the error should be delayed before dismissal.
 * @property {string} [backgroundColor] - The background color of the error component.
 * @property {string} [borderColor] - The border color of the error component.
 * @property {string} [textColor] - The text color of the error component.
 * @property {string} [customMessage] - A custom message to display instead of the error's default message.
 */
interface ErrorProps {
  error: Error
  title?: string
  onDismissed: () => void
  delayTime?: number
  shouldDelay?: boolean
  backgroundColor?: string
  borderColor?: string
  textColor?: string
  customMessage?: string
}

/**
 * A component that displays an error message.
 * @param {ErrorProps} props - The props for the NerdError component.
 * @returns {JSX.Element} - The rendered NerdError component.
 */
export default function NerdError({
  error,
  onDismissed,
  title,
  delayTime = 5000,
  shouldDelay,
  customMessage,
}: ErrorProps) {
  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null
    if (shouldDelay) {
      timeout = setTimeout(() => {
        onDismissed()
      }, delayTime)
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [error, shouldDelay])

  return (
    <div className="nerd-error">
      <button className="nerd-error__close" onClick={onDismissed} title="Close">
        {/* Close button icon */}
        <svg
          className="nerd-error__close-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95 1.414-1.414z" />
        </svg>
      </button>
      {/* Error title */}
      <h2 className="nerd-error__title">{title || 'Error'}</h2>
      {/* Custom error message or error message from the Error object */}
      <p className="nerd-error__message">{customMessage || error.message}</p>
      {/* Error stack trace */}
      <p className="nerd-error__stack">{error.stack}</p>
    </div>
  )
}
