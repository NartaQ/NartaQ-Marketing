import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import IntercomFacade from '../IntercomFacade'

// Mock the global window object and Intercom function
declare global {
  interface Window {
    Intercom: any
  }
}

describe('IntercomFacade', () => {
  const defaultProps = {
    appId: 'test-app-id',
  }

  beforeEach(() => {
    // Clean up any existing Intercom instances
    delete (window as any).Intercom
    
    // Clean up any existing script tags
    const existingScripts = document.querySelectorAll('script[src*="widget.intercom.io"]')
    existingScripts.forEach(script => script.remove())
  })

  it('renders the facade button initially', () => {
    render(<IntercomFacade {...defaultProps} />)
    
    const button = screen.getByRole('button', { name: /open live chat support/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('aria-label', 'Open live chat support')
  })

  it('shows MessageCircle icon initially', () => {
    render(<IntercomFacade {...defaultProps} />)
    
    const icon = screen.getByTestId('message-circle-icon')
    expect(icon).toBeInTheDocument()
  })

  it('loads Intercom when facade is clicked', async () => {
    render(<IntercomFacade {...defaultProps} />)
    
    const button = screen.getByRole('button', { name: /open live chat support/i })
    fireEvent.click(button)
    
    // Wait for the script to be injected
    await waitFor(() => {
      const script = document.querySelector('script[src*="widget.intercom.io"]')
      expect(script).toBeInTheDocument()
    })
  })

  it('calls Intercom boot after loading', async () => {
    // Mock Intercom function
    const mockIntercom = jest.fn()
    ;(window as any).Intercom = mockIntercom

    render(<IntercomFacade {...defaultProps} />)
    
    const button = screen.getByRole('button', { name: /open live chat support/i })
    fireEvent.click(button)
    
    // Simulate the Intercom script loading
    await waitFor(() => {
      expect(mockIntercom).toHaveBeenCalledWith('boot', {
        api_base: 'https://api-iam.intercom.io',
        app_id: 'test-app-id',
      })
    })
  })

  it('removes facade after Intercom is loaded', async () => {
    render(<IntercomFacade {...defaultProps} />)
    
    const button = screen.getByRole('button', { name: /open live chat support/i })
    fireEvent.click(button)
    
    // Wait for facade to be removed
    await waitFor(() => {
      expect(button).not.toBeInTheDocument()
    }, { timeout: 3000 })
  })

  it('handles multiple clicks gracefully', () => {
    render(<IntercomFacade {...defaultProps} />)
    
    const button = screen.getByRole('button', { name: /open live chat support/i })
    
    // Click multiple times quickly
    fireEvent.click(button)
    fireEvent.click(button)
    fireEvent.click(button)
    
    // Should only create one script tag
    const scripts = document.querySelectorAll('script[src*="widget.intercom.io"]')
    expect(scripts.length).toBeLessThanOrEqual(1)
  })

  it('shows tooltip on hover', () => {
    render(<IntercomFacade {...defaultProps} />)
    
    const button = screen.getByRole('button', { name: /open live chat support/i })
    expect(button).toHaveAttribute('title', 'Need help? Chat with us!')
  })

  it('has proper accessibility attributes', () => {
    render(<IntercomFacade {...defaultProps} />)
    
    const button = screen.getByRole('button', { name: /open live chat support/i })
    expect(button).toHaveAttribute('aria-label', 'Open live chat support')
    expect(button).toHaveAttribute('title', 'Need help? Chat with us!')
  })

  it('handles missing window.Intercom gracefully', async () => {
    render(<IntercomFacade {...defaultProps} />)
    
    const button = screen.getByRole('button', { name: /open live chat support/i })
    
    // Mock console.error to check if error handling works
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation()
    
    fireEvent.click(button)
    
    // Wait and check that no errors were logged during the load attempt
    await waitFor(() => {
      const script = document.querySelector('script[src*="widget.intercom.io"]')
      expect(script).toBeInTheDocument()
    })
    
    // Should not log errors for missing Intercom (it will be available after script loads)
    expect(consoleSpy).not.toHaveBeenCalled()
    
    consoleSpy.mockRestore()
  })

  it('applies correct styling classes', () => {
    render(<IntercomFacade {...defaultProps} />)
    
    const button = screen.getByRole('button', { name: /open live chat support/i })
    expect(button).toHaveClass(
      'group',
      'relative',
      'flex',
      'items-center',
      'justify-center',
      'w-14',
      'h-14',
      'bg-[#0F1419]',
      'hover:bg-[#1A2029]',
      'border',
      'border-[#a98b5d]/20',
      'rounded-full',
      'shadow-lg',
      'transition-all',
      'duration-300',
      'hover:scale-105'
    )
  })
})