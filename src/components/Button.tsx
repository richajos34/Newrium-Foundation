import React from 'react'

export type ButtonVariant = 'light' | 'medium' | 'dark'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Background color of the button
   */
  backgroundColor?: string
  /**
   * Text color of the button
   */
  textColor?: string
  /**
   * Hover background color (optional)
   */
  hoverColor?: string
  /**
   * Predefined color variant (light green, medium green, dark green)
   * If provided, overrides backgroundColor and textColor
   */
  variant?: ButtonVariant
  /**
   * Button content
   */
  children: React.ReactNode
}

const variantColors: Record<ButtonVariant, { bg: string; text: string; hover?: string }> = {
  light: {
    bg: '#a8d5a8', // Light green
    text: '#171717', // Dark gray/black
    hover: '#9bc99b', // Slightly darker green on hover
  },
  medium: {
    bg: '#4a9b4a', // Medium green
    text: '#f5f5f5', // Light gray/off-white
    hover: '#3d8a3d', // Slightly darker green on hover
  },
  dark: {
    bg: '#1a3a2a', // Very dark green/teal-black
    text: '#f5f5f5', // Light gray/off-white
    hover: '#0d2818', // Even darker on hover
  },
}

export default function Button({
  backgroundColor,
  textColor,
  hoverColor,
  variant,
  children,
  className = '',
  style,
  ...props
}: ButtonProps) {
  // Determine colors based on variant or props
  const colors = variant
    ? variantColors[variant]
    : {
        bg: backgroundColor || variantColors.light.bg,
        text: textColor || variantColors.light.text,
        hover: hoverColor,
      }

  const baseStyles: React.CSSProperties = {
    backgroundColor: colors.bg,
    color: colors.text,
    ...style,
  }

  return (
    <button
      className={`px-6 py-3 rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current ${className}`}
      style={baseStyles}
      onMouseEnter={(e) => {
        if (colors.hover) {
          e.currentTarget.style.backgroundColor = colors.hover
        } else {
          e.currentTarget.style.opacity = '0.9'
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = colors.bg
        e.currentTarget.style.opacity = '1'
      }}
      {...props}
    >
      {children}
    </button>
  )
}

