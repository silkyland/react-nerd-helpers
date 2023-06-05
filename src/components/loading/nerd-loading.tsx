import React from 'react'
import '../../scss/nerd-loading.scss'

/**
 * This is the default loading spinner component used when no custom spinner is provided.
 * It's an animated SVG element.
 */
const DefaultSpinner = (
  <svg
    className="nerd-loading__spinner-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <circle
      className="circle"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="path"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
    ></path>
  </svg>
)

/**
 * Interface for the NerdLoadingProps.
 * Props for the NerdLoading component.
 *
 * @param {string} message - Custom loading message to be displayed. Default value is 'Loading...'.
 * @param {boolean} visible - Controls whether the loading component should be visible or not. Default value is true.
 * @param {React.ReactNode} spinner - Element for a custom spinner component. By default, uses an SVG spinner provided within NerdLoading.
 */
interface NerdLoadingProps {
  message?: string // Custom loading message.
  visible?: boolean // Whether or not the loading spinner is visible.
  spinner?: React.ReactNode // Custom spinner component.
}

/**
 * This is the main NerdLoading component.
 * It renders a loading spinner with a custom message.
 * The visibility of the spinner and the spinner itself can be customized.
 * @module NerdLoading
 */
const NerdLoading: React.FC<NerdLoadingProps> = ({
  message = 'Loading...', // Default loading message.
  visible = true, // Default visibility.
  spinner = DefaultSpinner, // Default spinner component.
}) => {
  // If not visible, render nothing.
  if (!visible) {
    return null
  }

  // If visible, render the loading spinner.
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center">
      <div className="modal-overlay absolute top-0 left-0 bottom-0 right-0"></div>
      <div className="bg-white p-5 rounded-md z-10 flex flex-col items-center">
        <div className="flex items-center text-lg leading-6 font-medium text-gray-900">
          {message}
        </div>
        <div className="mt-2 text-sm text-gray-500 flex items-center">
          {spinner}
        </div>
      </div>
    </div>
  )
}

export default NerdLoading
