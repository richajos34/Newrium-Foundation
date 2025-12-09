'use client'
import { useState, useEffect, FormEvent } from 'react'
import Button from './Button'

interface NewsletterModalProps {
  /**
   * Controls whether the modal is visible
   */
  isOpen: boolean
  /**
   * Callback function when modal should be closed
   */
  onClose: () => void
  /**
   * Callback function when form is submitted
   * Receives the email value as a parameter
   */
  onSubmit: (email: string) => void
  /**
   * Modal title/headline
   */
  title?: string
  /**
   * Label for the submit button
   */
  submitLabel?: string
  /**
   * Label for the close button
   */
  closeLabel?: string
}

export default function NewsletterModal({
  isOpen,
  onClose,
  onSubmit,
  title = 'Join Our Newsletter',
  submitLabel = 'Submit',
  closeLabel = 'Close',
}: NewsletterModalProps) {
  const [email, setEmail] = useState('')
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isOpen) {
      // Trigger animation after modal is mounted
      setTimeout(() => setIsAnimating(true), 10)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    } else {
      setIsAnimating(false)
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      onSubmit(email)
      setEmail('')
    }
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Close modal when clicking the backdrop
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      {/* Dark semi-transparent backdrop */}
      <div
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Modal container */}
      <div
        className={`relative bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl transition-all duration-300 ${
          isAnimating
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-95'
        }`}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <h2 className="text-2xl font-bold font-serif text-foreground pr-8">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 rounded"
            aria-label="Close modal"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email input */}
          <div className="space-y-2">
            <label
              htmlFor="newsletter-email"
              className="block text-xs font-semibold uppercase tracking-wider text-gray-600"
            >
              Email
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-4 rounded-xl bg-gray-100 text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-gray-50 transition-all"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              onClick={onClose}
              backgroundColor="#e5e5e5"
              textColor="#171717"
              hoverColor="#d4d4d4"
              className="flex-1"
            >
              {closeLabel}
            </Button>
            <Button
              type="submit"
              backgroundColor="#d4d4d4"
              textColor="#171717"
              hoverColor="#c4c4c4"
              className="flex-1"
            >
              {submitLabel}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

