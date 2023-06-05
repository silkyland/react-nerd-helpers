import React from 'react'
import './style.css'
import './nerd-loading.scss'

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

interface NerdLoadingProps {
  message?: string
  visible?: boolean
  spinner?: React.ReactNode
}

const NerdLoading: React.FC<NerdLoadingProps> = ({
  message = 'กำลังโหลด...',
  visible = true,
  spinner = DefaultSpinner,
}) => {
  if (!visible) {
    return null
  }

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
